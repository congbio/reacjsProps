// import React, { Component } from 'react';
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand" href="#">
            HOME
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to={"/Admin"}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  ADMIN
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  CONTACT
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

          </header>
  );
};
export default Header;
