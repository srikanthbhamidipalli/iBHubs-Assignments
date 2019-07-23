import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import {
  EachProductDivision,
  ProductImage,
  FreeShippingLabel,
  FreeShippingText,
  ColouredDash,
  SizeSelector,
  AddToCart,
  AddToCartText
} from "./styledComponents";

@observer
class EachProduct extends Component {
  @observable selectedSize = "select";
  handleClick = productId => {
    this.selectedSize === "select"
      ? alert("select Your Size")
      : this.props.addProductToCart(productId, this.selectedSize);
  };

  handleSizeClick = e => {
    this.selectedSize = e.target.value;
  };
  render() {
    let selectSizeList = [];
    const select = (
      <option key="select" value="select">
        select Size
      </option>
    );
    selectSizeList.push(select);
    for (let i = 0; i < this.props.eachItem.availableSizes.length; i++) {
      const eachSize = (
        <option
          key={this.props.eachItem.availableSizes[i]}
          value={this.props.eachItem.availableSizes[i]}
        >
          {this.props.eachItem.availableSizes[i]}
        </option>
      );
      selectSizeList.push(eachSize);
    }
    return (
      <EachProductDivision>
        <ProductImage>
          <img src={this.props.eachItem.image} alt="productImage" />
          {this.props.eachItem.isFreeShipping ? (
            <FreeShippingLabel>
              <FreeShippingText>Free Shipping</FreeShippingText>
            </FreeShippingLabel>
          ) : (
            ""
          )}
        </ProductImage>
        <br />
        <div>{this.props.eachItem.title}</div>
        <br />
        <ColouredDash />
        <br />
        <SizeSelector>
          <select onClick={this.handleSizeClick}>{selectSizeList}</select>
        </SizeSelector>
        <div>${this.props.eachItem.price}</div>
        <div>
          or{" "}
          {this.props.eachItem.installments +
            " *" +
            (
              this.props.eachItem.price / this.props.eachItem.installments
            ).toFixed(2)}
        </div>
        <br />
        <AddToCart onClick={() => this.handleClick(this.props.eachItem.id)}>
          <AddToCartText>Add to Cart</AddToCartText>
        </AddToCart>
      </EachProductDivision>
    );
  }
}

export default EachProduct;
