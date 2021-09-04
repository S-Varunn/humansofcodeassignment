import React, { Component } from "react";
import "./css/Nav.css";
class Nav extends Component {
  state = {};
  render() {
    return (
      <div className="nav-container">
        <div className="logo">
          <i className="fas fa-bug"></i>
        </div>
        <div className="taxbox">
          <h2>Tax Invoice</h2>
          <div className="invoiceno">
            <h3>Invoice Number :</h3>
            <input
              className="textbox"
              type="text"
              placeholder="Enter here**"
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
