import React, {Component} from "react";
import Left from "./left/left";
import Right from "./right/Right";
class Content extends Component {
    render() {
        return (
        <div id="content">
         <Left></Left>
         
         <Right></Right>
        </div>
        );
    }
}
export default Content;