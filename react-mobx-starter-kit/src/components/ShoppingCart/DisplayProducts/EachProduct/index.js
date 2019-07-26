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
import { orderByOptions, alertMessageForSizeSelection } from "../../constants";

@observer
class EachProduct extends Component {
  @observable selectedSize = orderByOptions.select;
  handleClick = () => {
    this.selectedSize === orderByOptions.select
      ? alert(alertMessageForSizeSelection)
      : this.props.addProductToCart(this.props.eachItem.id, this.selectedSize);
  };

  handleSizeClick = e => {
    this.selectedSize = e.target.value;
  };
  render() {
    const { eachItem } = this.props;
    let selectSizeList = [];
    const select = (
      <option key={orderByOptions.select} value={orderByOptions.select}>
        select Size
      </option>
    );
    selectSizeList.push(select);
    for (let i = 0; i < eachItem.availableSizes.length; i++) {
      const eachSize = (
        <option
          key={eachItem.availableSizes[i]}
          value={eachItem.availableSizes[i]}
        >
          {eachItem.availableSizes[i]}
        </option>
      );
      selectSizeList.push(eachSize);
    }
    return (
      <EachProductDivision>
        <ProductImage>
          <img src={eachItem.image} alt="productImage" />
          {eachItem.isFreeShipping ? (
            <FreeShippingLabel>
              <FreeShippingText>Free Shipping</FreeShippingText>
            </FreeShippingLabel>
          ) : null}
        </ProductImage>
        <br />
        <div>{eachItem.title}</div>
        <br />
        <ColouredDash />
        <br />
        <SizeSelector>
          <select onClick={this.handleSizeClick}>{selectSizeList}</select>
        </SizeSelector>
        <div id="price">${eachItem.price}</div>
        <div>
          or{" "}
          {eachItem.installments +
            " *" +
            (eachItem.price / eachItem.installments).toFixed(2)}
        </div>
        <br />
        <AddToCart onClick={this.handleClick}>
          <AddToCartText>Add to Cart</AddToCartText>
        </AddToCart>
      </EachProductDivision>
    );
  }
}

export default EachProduct;
