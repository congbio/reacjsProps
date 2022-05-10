import React, { Component } from "react";
const affterClick = (name) => {
            alert("Order Succesfull " + name)           
  }

class Item extends Component {
    render() {
        return (


            <div className="product">
                <div className="text">
                  <div className="chose"><a href="#">{this.props.tenSP}</a></div>
                </div>
                <div className="img-product">
                  <img src={this.props.anh} alt="" />
                </div>
                <div className="infomation">
                  <div className="infomation-detail">{this.props.chitiet}</div>
                  <div className="please">please Call</div>
                </div>
               
               
               
               
                    <div className="sub"><button type="button" onClick={() => affterClick(this.props.tenSP)} defaultValue="ADD" >add</button>  </div>
              </div>

        
        );
    }
}
export default Item;