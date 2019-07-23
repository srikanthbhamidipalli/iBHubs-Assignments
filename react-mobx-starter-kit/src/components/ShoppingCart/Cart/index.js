import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

import SelectedProduct from "./SelectedProduct";
import {
  SideNavBar,
  OutsideCartDiv,
  OutsideDivWithIcon,
  OutsideCartIcon,
  OutsideCartItemsCount,
  CrossIcon,
  SideNavBarBody,
  InsideCartIconDiv,
  InsideCartIcon,
  InsideCartItemsCount,
  CartItemsContainer,
  SubTotalContainer,
  AddToCartText,
  CheckOut
} from "./styledComponents";

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
      <OutsideDivWithIcon>
        <OutsideCartIcon src="/assets/images/cart.jpg" alt="cartimage" />
        <OutsideCartItemsCount>
          <span>{this.props.appStore.cartListLength}</span>
        </OutsideCartItemsCount>
      </OutsideDivWithIcon>
    );

    return (
      <SideNavBar clickedStatus={this.isClicked}>
        <OutsideCartDiv onClick={this.handleClick}>
          {this.isClicked ? (
            <CrossIcon>
              <span>X</span>
            </CrossIcon>
          ) : (
            outSideIcon
          )}
        </OutsideCartDiv>
        <SideNavBarBody>
          <InsideCartIconDiv>
            <InsideCartIcon src="/assets/images/cart.jpg" alt="cartimage" />
            <span>Cart</span>
            <InsideCartItemsCount>
              <span>{this.props.appStore.cartListLength}</span>
            </InsideCartItemsCount>
          </InsideCartIconDiv>
          <CartItemsContainer>
            {selectedItems.length > 0 ? selectedItems : ""}
          </CartItemsContainer>
          <SubTotalContainer>
            <span>SUBTOTAL</span>
            <span>$ {this.props.appStore.subTotalAmount.toFixed(2)}</span>
          </SubTotalContainer>
          <CheckOut>
            <AddToCartText>CheckOut</AddToCartText>
          </CheckOut>
        </SideNavBarBody>
      </SideNavBar>
    );
  }
}

export default Cart;
