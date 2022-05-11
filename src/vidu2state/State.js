import React,{Component} from "react";
import Products_data from "../data/data";

class Show extends Component {
    constructor(props) {
        var arr = Products_data();
        super(props);
        this.state = {arr};
    }
    render() {
        return (
             <div  id="products">
             {this.state.arr.map(key =>
               

               <div className="product">
                <div className="text">
                  <div className="chose"><a href="#">{key.name}</a></div>
                </div>
                <div className="img-product">
                  <img src={key.img} alt="" />
                </div>
                <div className="infomation">
                  <div className="infomation-detail">{key.detail}</div>
                  <div className="please">please Call</div>
                </div>
              </div>
              
              )
            }
            </div>
        );
    }
}


export default Show;