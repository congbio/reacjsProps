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
			image: "",
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
				url: `https://6290540a27f4ba1c65b73fb1.mockapi.io/ArrayNew/${id}`,
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
			.get("https://6290540a27f4ba1c65b73fb1.mockapi.io/ArrayNew")
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
		console.log(event.target.files[0].name);
	};
	showEditProduct = (id) => {
		var product = this.getProduct(id);
		this.setState({
			id: product.id,
			content: product.content,
			title: product.title,
			image: product.image,
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
			if (
				this.state.content !== "" &&
				this.state.title !== "" &&
				this.state.image !== ""
			) {
				axios({
					method: "POST",
					url: `https://6290540a27f4ba1c65b73fb1.mockapi.io/ArrayNew`,
					data: {
						content: this.state.content,
						title: this.state.title,
						image: this.state.avatar,
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
				url: `https://6290540a27f4ba1c65b73fb1.mockapi.io/ArrayNew/${this.state.id}`,
				data: {
					content: this.state.content,
					title: this.state.title,
					image: this.state.avatar,
				},
			}).then((res) => {
				this.componentDidMount();
				alert("Successfully");
			});
		}
		this.setState({
			id: "",
			content: "",
			title: "",
			image: "",
		});
	};
	onDelete = (id) => {
		console.log(id);
		axios({
			method: "DELETE",
			url: `https://6290540a27f4ba1c65b73fb1.mockapi.io/ArrayNew/${id}`,
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
		return (
			<div className="container">
				<div className="row">
					<div className="col-4">
						<form onSubmit={this.onSave}>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Name</label>
								<input
									type="text"
									name="name"
									value={this.state.content}
									onChange={this.onChange}
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Enter name"
								/>
							</div>

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
								<label>Image</label>
								<input
									type="file"
									name="image"
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
									src={"./" + this.state.image}
									alt="img"
									style={{ width: "100px" }}
								/>
							</div>
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</form>
					</div>
					<div className="col-8">
						<div className="row">
							{this.state.products.map((product) => (
                console.log(product.image),
								<div className="card col-4" style={{ width: "18rem" }}>
									<img
										className="card-img-top"
										src={"./" + product.image}
                    
										alt="Card cap"
									/>
									<div className="card-body">
										<h5 className="card-title">{product.title}</h5>
										<div className="row">
											<div className="col-6">{product.content}</div>
											<div className="col-6">{}</div>
										</div>

										<button
											className="btn btn-primary"
											onClick={() => this.showEditProduct(product.id)}
										>
											Edit
										</button>
										<button
											className="btn btn-danger"
											onClick={() => this.onDelete(product.id)}
										>
											delete
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default List;
