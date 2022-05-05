import React,{Component} from "react";
class Header extends Component {
    render() {
        return (
            <div id="header">
          <div id="header-logo">
            <img src="https://e7.pngegg.com/pngimages/273/845/png-clipart-instagram-logo-computer-icons-facebook-crosswinds-high-school-black-instagram-icon-miscellaneous-logo.png" alt="" width="60px" id="img-logo" />
            <h1>SHOP</h1>
          </div>
          <div id="header-menu">
            <ul className="header-ul-menu">
              <li><a href>Home</a></li>
              <li><a href>About Us</a></li>
              <li><a href>News</a></li>
              <li><a href>News</a></li>
              <li><a href>Services</a></li>
              <li><a href>Site Map</a></li>
              <li><a href>Contact</a></li>
            </ul>
          </div>
        </div>
        );
    }
}
export default Header;
