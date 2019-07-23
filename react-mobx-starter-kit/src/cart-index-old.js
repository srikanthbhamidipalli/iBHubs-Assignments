import React, { Component } from "react";

import SelectedProduct from "./SelectedProduct";

import "./styles.css";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
class Cart extends Component {
  @observable isClicked = false;

  handleClick = () => {
    this.isClicked = !this.isClicked;
  };
  render() {
    let selectedItems = [];
    this.props.appStore.cartItemList.forEach(cartItem => {
      this.props.appStore.productList.forEach(product => {
        if (cartItem.productId === product.id)
          selectedItems.push(
            <SelectedProduct
              deleteItem={this.props.appStore.deleteCartItem}
              id={cartItem.productId}
              image={product.image}
              title={product.title}
              size={cartItem.size}
              style={product.style}
              price={product.price}
              quantity={cartItem.quantity}
            />
          );
      });
    });

    const outSideIcon = (
      <div>
        <img
          className={
            this.isClicked === false
              ? "sidenav-cart-icon"
              : "side-nav-icon-margin-left"
          }
          src="/assets/images/cart.jpg"
          alt="cartimage"
        />
        <div
          className={
            this.isClicked === false
              ? "out-cart-item-count"
              : "out-cart-item-count-left"
          }
        >
          <span>{this.props.appStore.cartListLength}</span>
        </div>
      </div>
    );

    return (
      <div>
        <div className="cart-toggle">
          <div
            className={this.isClicked === true ? "show-container" : "container"}
          >
            <div className="out-cart" onClick={this.handleClick}>
              {!this.isClicked ? (
                outSideIcon
              ) : (
                <div className="cross-icon">
                  <span>X</span>
                </div>
              )}
            </div>
            <div className={this.isClicked === true ? "" : "show-side-nav-div"}>
              <div className="side-nav-container">
                <img
                  src="/assets/images/cart.jpg"
                  className="cart-icon-inside-nav"
                  alt="cartimage"
                />
                <span>Cart</span>
                <div className="cart-item-count">
                  <span>{this.props.appStore.cartListLength}</span>
                </div>
              </div>
              <div className="selected-items-container">
                {selectedItems.length > 0 ? selectedItems : ""}
              </div>
              <div className="sub-total-container">
                <span>SUBTOTAL</span>
                <span>$ {this.props.appStore.subTotalAmount.toFixed(2)}</span>
              </div>
              <div className="check-out">
                <span className="add-to-cart-text">CheckOut</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
