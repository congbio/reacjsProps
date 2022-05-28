import React from "react";
import './component/Style.css'
import getdata from "../data/datacrud";
class App extends React.Component {
  
  constructor(props) {
    super(props);
    console.log(getdata());
    var array = getdata();
    this.state = {
      index: 0,
      name: "",
      price: 0,
      action: "ADD ITEM", //default ADD ITEM
      items: array
    };
    this.changeName = this.changeName.bind(this);
    this.changePrice = this.changePrice.bind(this);
  }
  changeName = (e) => {
    this.setState({
      name: e.target.value
    });
  };
  changePrice = (e) => {
    this.setState({
      price: e.target.value
    });
  };
  changeImg = (e) => {
    this.setState({
      img: "images/"+e.target.files[0].name
    });
  };

  addItem = () => {
    if (!this.state.items.find((item) => item.name === this.state.name)) {
      this.setState({
        items: [
          ...this.state.items,
          {
            name: this.state.name,
            price: this.state.price,
            img: this.state.img
          }
        ],
        name: "",
        price: "",
        img: ""
      });
      console.log(...this.state.items);
    }
  };
  Edit = (item, index) => {
    this.setState({
      action: "UPDATE ITEM",
      name: item.name,
      price: item.price,
      img: item.img,
      index: index
    });
  };
  updateItem = () => {
    let data = this.state.items;
    data.map((item, index) => {
      if (this.state.index === index) {
        item.name = this.state.name;
        item.img = this.state.img;
        item.price = parseInt(this.state.price);
      }
    });
    //set update items
    this.setState({
      items: data,
      name: "",
      price: "",
      img: "",
      action: "ADD_ITEM"
    });
  };

  deleteItem = (name) =>
    this.setState({
      items: this.state.items.filter((item) => item.name !== name)
    });
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1>{this.state.action}</h1>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name=""
                className="form-control"
                onChange={this.changeName}
                value={this.state.name}
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="text"
                name=""
                className="form-control"
                onChange={this.changePrice}
                value={this.state.price}
              />
              <label>Image</label>
              <input

                type="file"
                name=""
                className="form-control"
                onChange={this.changeImg}
                
              />
            </div>
            <div className="form-group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={
                  this.state.action == "ADD ITEM"
                    ? this.addItem
                    : this.updateItem
                }
              >
                Add
              </button>
            </div>
          </div>

          <div className="col-md-8">
            <h1>List Products</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>SDT</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>image</th>
                  <th>Modify</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {this.state.items.map((item, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{item.name}</td>
                    <td>{item.price} $</td>
                    <td>
                      <img width="100px" src={'./'+item.img} alt="" />
                    </td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => this.Edit(item, index)}
                      >
                        modify
                      </button>
                    </td>
                    <td>
                      <button 
                        className="btn btn-danger "
                        onClick={() => this.deleteItem(item.name)}
                      >
                        remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
