import React, { Component } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import "react-dropdown/style.css";
import "./css/Address.css";
class Address extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { country: "", region: "", country1: "", region1: "" };
  }

  selectCountry(val) {
    this.setState({ country: val });
    this.setState({ country1: val });
  }
  selectCountry1(val) {
    this.setState({ country1: val });
  }
  selectRegion(val) {
    this.setState({ region: val });
  }
  selectRegion1(val) {
    this.setState({ region1: val });
  }

  render() {
    const { country, region, country1, region1 } = this.state;
    return (
      <div className="address-container">
        <div className="fromto-container">
          <fieldset className="backcolor">
            <legend>
              <h3 className="h3">From</h3>
            </legend>
            <div className="alignadd">
              <h5>Address Line 1</h5>
              <input
                className="textbox"
                type="text"
                placeholder="enter address..."
              ></input>
            </div>
            <div className="alignadd">
              <h5>Address Line 2</h5>
              <input
                className="textbox"
                type="text"
                placeholder="enter address..."
              ></input>
            </div>
            <div className="alignadd">
              <h5>Country / State</h5>
              <div>
                <CountryDropdown
                  className="countrysel"
                  value={country}
                  onChange={(val) => this.selectCountry(val)}
                />
                <RegionDropdown
                  country={country}
                  value={region}
                  onChange={(val) => this.selectRegion(val)}
                />
              </div>
            </div>
          </fieldset>
        </div>
        <div className="fromto-container">
          <fieldset className="backcolor">
            <legend>
              <h3 className="h3">To</h3>
            </legend>
            <div className="alignadd">
              <h5>Address Line 1</h5>
              <input
                className="textbox"
                type="text"
                placeholder="enter address..."
              ></input>
            </div>
            <div className="alignadd">
              <h5>Address Line 2</h5>
              <input
                className="textbox"
                type="text"
                placeholder="enter address..."
              ></input>
            </div>
            <div className="alignadd">
              <h5>Country / State</h5>
              <div>
                <CountryDropdown
                  className="countrysel"
                  value={country1}
                  onChange={(val) => this.selectCountry1(val)}
                />
                <RegionDropdown
                  country={country1}
                  value={region1}
                  onChange={(val) => this.selectRegion1(val)}
                />
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    );
  }
}

export default Address;
