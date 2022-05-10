import React, { Component } from "react";
import Content from "./content/content";
import Header from "./header/header";
class App extends Component {
    render() {
        return (
        <div id="container">
        <Header></Header>
        <Content></Content>
        <div className="footer">
          <h3>Passerelled Numerques.org</h3>
          <div>
            <ul className="lop">
              <li><a href>Product |</a></li>
              <li><a href>About us |</a></li>
              <li><a href>Contact |</a></li>
            </ul>
          </div>
        </div>
      </div>
        );
    }
}
export default App;