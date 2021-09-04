import React, { Component } from "react";
import "./css/Datatable.css";
let temp = [];
let currentAmount = 0;
class Maintable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
    this.state.products = [];
  }
  handleAddEvent(evt) {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var product = {
      id: id,
      itemname: "",
      quantity: "",
      rate: "",
      amount: 0,
    };
    this.state.products.push(product);
    this.setState(this.state.products);
  }
  handleRowDel(product) {
    var index = this.state.products.indexOf(product);
    this.state.products.splice(index, 1);
    this.setState(this.state.products);
  }

  handleProductTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value,
    };
    var products = this.state.products.slice();
    var newProducts = products.map(function (product) {
      for (var key in product) {
        if (key === item.name && product.id === item.id) {
          product[key] = item.value;
        }
      }
      return product;
    });
    this.setState({ products: newProducts });
  }
  render() {
    return (
      <div>
        <ProductTable
          onProductTableUpdate={this.handleProductTable.bind(this)}
          onRowAdd={this.handleAddEvent.bind(this)}
          onRowDel={this.handleRowDel.bind(this)}
          products={this.state.products}
        />
      </div>
    );
  }
}
class ProductTable extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      finaltotal: 0,
    };
  }
  render() {
    var onProductTableUpdate = this.props.onProductTableUpdate;
    var rowDel = this.props.onRowDel;
    var product = this.props.products.map(function (product) {
      currentAmount = product.amount;
      return (
        <ProductRow
          onProductTableUpdate={onProductTableUpdate}
          product={product}
          onDelEvent={rowDel.bind(this)}
          key={product.id}
        />
      );
    });
    return (
      <div className="maintablecontainer">
        <div className="tablecontainer">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Rate</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>{product}</tbody>
          </table>
        </div>
        <button
          type="button"
          onClick={this.props.onRowAdd}
          className="btn btnadd btn-success pull-right"
        >
          Add
        </button>
        <div className="totalcontainer">
          <div className="subtotalcontainer">
            <div>
              <button
                className="btn btnsub"
                onClick={() => {
                  if (temp.length === 0) {
                    this.setState({
                      total: temp,
                    });
                  } else {
                    temp = temp.reduce((a, b) => parseInt(a) + parseInt(b));
                    this.setState({
                      total: temp,
                    });
                  }
                }}
              >
                See subtotal
              </button>
            </div>
            <div className="containermain">
              <div className="leftcontainer">
                <p className="text">Subtotal </p>
                <p className="text">Tax </p>
              </div>
              <div className="rightcontainer">
                <p className="text">Rs: {this.state.total}</p>
                <input
                  className="textbox"
                  type="text"
                  id="tax"
                  placeholder="enter tax in (%)"
                />
              </div>
            </div>
            <div>
              <button
                type="button"
                className="btn btnsub"
                onClick={() => {
                  let inputVal = document.getElementById("tax").value;
                  let finaltotal =
                    this.state.total + (this.state.total * inputVal) / 100;
                  this.setState({
                    finaltotal: finaltotal,
                  });
                }}
              >
                Get Total
              </button>
            </div>
            <div className="finaltotalcontainer">
              <div>
                <p className="text">Total </p>
              </div>
              <div>
                <p className="text1">Rs: {this.state.finaltotal}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ProductRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.product);
  }
  render() {
    return (
      <tr className="eachRow">
        <EditableCell
          onProductTableUpdate={this.props.onProductTableUpdate}
          cellData={{
            type: "itemname",
            value: this.props.product.itemname,
            id: this.props.product.id,
          }}
        />
        <EditableCell
          onProductTableUpdate={this.props.onProductTableUpdate}
          cellData={{
            type: "quantity",
            value: this.props.product.quantity,
            id: this.props.product.id,
          }}
        />
        <EditableCell
          onProductTableUpdate={this.props.onProductTableUpdate}
          cellData={{
            type: "rate",
            value: this.props.product.rate,
            id: this.props.product.id,
          }}
        />
        <EditableCell
          onProductTableUpdate={this.props.onProductTableUpdate}
          cellData={{
            type: "amount",
            value: this.props.product.amount,
            id: this.props.product.id,
          }}
        />
        <td className="del-cell">
          <input
            type="button"
            onClick={this.onDelEvent.bind(this)}
            value="X"
            className="del-btn"
          />
        </td>
      </tr>
    );
  }
}
class EditableCell extends React.Component {
  render() {
    return (
      <td>
        <input
          type="text"
          name={this.props.cellData.type}
          id={this.props.cellData.id}
          value={this.props.cellData.value}
          onChange={this.props.onProductTableUpdate}
          onBlur={() => temp.push(currentAmount)}
        />
      </td>
    );
  }
}
export default Maintable;
