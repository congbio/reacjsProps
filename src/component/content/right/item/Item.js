import React, { Component } from "react";

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
                  <div className="submit"><input type="submit" name="ADD" defaultValue="ADD" /></div>
                </div>
              </div>

        
        );
    }
}
export default Item;