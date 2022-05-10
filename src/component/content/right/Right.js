import React, {Component} from "react";
import Item from "./item/Item";
import Products_data from "../../../data/data";



class Right extends Component {
    render() {
        var rows = [];
        for (var i = 0; i <Products_data().length; i++) {
            rows.push(
                <Item
                    tenSP={Products_data()[i].name}
                    anh={Products_data()[i].img}
                    chitiet={Products_data()[i].detail}>    
                </Item>// truyền dât vô
            );
        }
        return (
           <div id="conten-right">
                <h2>Product : </h2>
                <div id="products">
                {rows}
                
                </div>
          </div>
        )
    }
}
export default Right;