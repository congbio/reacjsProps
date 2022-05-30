import React, { Component } from "react";
import axios from "axios";
// import {toast} from 'react-toastify';

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			id: "",
			content: "",
			title: "",
			type: "trong nuoc",
			img: "",
		};
		this.onDelete = this.onDelete.bind(this);
		this.onChange = this.onChange.bind(this);
		this.showEditProduct = this.showEditProduct.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount() {
		var { match } = this.props;
		if (match) {
			var id = match.params.id;
			axios({
				method: "GET",
				url: `https://629378507aa3e6af1a0be0a9.mockapi.io/ArrayNew/${id}`,
				data: null,
			})
				.then((res) => {
					var data = res.data;
					this.setState({
						id: data.id,
						content: data.content,
						title: data.title,
						image: data.image,
					});
				})
				.catch((err) => {});
		}
		axios
			.get("https://629378507aa3e6af1a0be0a9.mockapi.io/ArrayNew")
			.then((res) => {
				this.setState({ products: res.data });
			});
		if (this.state.id === "") {
			document.getElementById("image-edit").style.display = "none";
		} else {
			document.getElementById("image-edit").style.display = "block";
		}
	}
	getProduct = (id) => {
		for (var i = 0; i < this.state.products.length; i++) {
			if (this.state.products[i].id === id) {
				return this.state.products[i];
			}
		}
		return null;
	};
	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});


	};
	onChangeImage = (event) => {
		this.setState({
			[event.target.name]: "images/" + event.target.files[0].name,
		});
	console.log("images/" + event.target.files[0].name);
	};
	showEditProduct = (id) => {
		var product = this.getProduct(id);
		this.setState({
			id: product.id,
			content: product.content,
			type: product.type,
			title: product.title,
			img: product.img,
		});
		document.getElementById("image-edit").style.display = "block";
		alert(id);
	};
	getIndexProducts = (id) => {
		for (var i = 0; i < this.state.products.length; i++) {
			if (this.state.products[i].id === id) {
				return i;
			}
		}
		return -1;
	};
	onSave = (event) => {
		event.preventDefault();
		if (this.state.id === "") {
			if (this.state.content !== "" &&	this.state.title !== "" &&	this.state.img !== ""
			) {

       
				axios({
          
					method: "POST",
					url: `https://629378507aa3e6af1a0be0a9.mockapi.io/ArrayNew`,
					data: {
						content: this.state.content,
						type: this.state.type,
						title: this.state.title,
						img: this.state.img,
					},
				}).then((res) => {
					this.componentDidMount();
					alert("Successfully");
				});
			} else {
				alert("Empty something");
			}
		} else {
			axios({
				method: "PUT",
				url: `https://629378507aa3e6af1a0be0a9.mockapi.io/ArrayNew/${this.state.id}`,
				data: {
					content: this.state.content,
					type: this.state.type,
					title: this.state.title,
					img: this.state.img,
				},
			}).then((res) => {
				this.componentDidMount();
				alert("Successfully");
			});
		}
		this.setState({
			id:"",
			content: "",
			type: "trong nuoc",
			title: "",
			img: "",
		});
	};
	onDelete = (id) => {
		console.log(id);
		axios({
			method: "DELETE",
			url: `https://629378507aa3e6af1a0be0a9.mockapi.io/ArrayNew/${id}`,
			data: null,
		}).then((res) => {
			if (res.status === 200) {
				var index = this.getIndexProducts(id);
				if (index !== -1) {
					var products = this.state.products;
					products.splice(index, 1);
				}
				this.setState({
					products: products,
				});
				alert(id + "Xóa sản phẩm thành công");
			}

		});
	};
	
	render() {
		// console.log(this.state);
		return (
			<div className="container">
				<div className="row">
					<h1 style={{ color: "black", textAlign: "center" }}>Admin</h1>

					<div className="row">
						<div>
							<table className="table table-hover" id="table1">
								<thead>
									<tr>
										<th >STT</th>
										<th >image</th>
										<th >Title</th>
										<th >Conten</th>
										<th >Action</th>
									</tr>
								</thead>
								<tbody>
									{this.state.products.map((product, index) => (
										<tr key={index}>
											<td >{index + 1}</td>
											<td>
												<img
													src={product.img}
													alt=""
													style={{ width: "50px", height: "50px" }}
												/>
											</td>
											<td>
												{product.title}
											</td>
											<td>{product.content}</td>
											<td className="">
												<div className="d-flex">
													<button
														className="m-3 btn btn-primary "
														onClick={() => this.showEditProduct(product.id)}
													>
														Edit
													</button>
													<button
														className="m-3 btn btn-danger"
														onClick={() => this.onDelete(product.id)}
													>
														Delete
													</button>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
					<div className="row">
						<form onSubmit={this.onSave}>
							<div className="form-group">
								<label htmlFor="exampleInputEmail2">title</label>
								<input
									type="text"
									name="title"
									onChange={this.onChange}
									value={this.state.title}
									className="form-control"
									id="exampleInputEmail2"
									aria-describedby="emailHelp"
									placeholder="Enter title"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputEmail2">Conten</label>
								<textarea
									type="text"
									name="content"
									onChange={this.onChange}
									value={this.state.content}
									className="form-control"
									id="exampleInputEmail2"
									aria-describedby="emailHelp"
									placeholder="Enter content"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="name_category">Category</label>
								<select
									className="form-control"
									id="name_category"
									name="type"
									onChange={this.onChange}
									// defaultValue={this.props.products.type}
								>
									<option value="trong nuoc">Trong nuoc</option>
									<option value="ngoai nuoc">Ngoai nuoc</option>
								</select>
							</div>
							<div className="form-group">
								<label>Image</label>
								<input
									type="file"
									name="img"
									onChange={this.onChangeImage}
									className="form-control"
									placeholder="image"
								/>
							</div>
							<div
								className="form-group"
								id="image-edit"
								style={{ display: "none" }}
							>
								<label>Image</label>
								<img
									src={"./" + this.state.img}
									alt="img"
									style={{ width: "200px" }}
								/>
							</div>
							<button type="submit" className="mt-5 mb-5 btn btn-primary">
								ADD NEW
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default List;
