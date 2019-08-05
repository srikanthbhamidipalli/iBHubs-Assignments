import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import {
  EachCartItem,
  ProductInfoContainer,
  SizeAndQuantityInfo,
  PriceInsideCart,
  DeleteIcon,
  ProductPicInsideCart
} from "./styledComponents";

@observer
class SelectedProduct extends Component {
  @observable hovered = false;

  onHovered = () => {
    this.hovered = !this.hovered;
  };
  render() {
    return (
      <EachCartItem>
        <ProductPicInsideCart src={this.props.image} alt="productPic" />
        <ProductInfoContainer>
          <span>{this.props.title}</span>
          <SizeAndQuantityInfo>
            <span>{this.props.size}</span>
            {" | "}
            <span>{this.props.style}</span>
          </SizeAndQuantityInfo>
          <SizeAndQuantityInfo>
            Quantity: {this.props.quantity}
          </SizeAndQuantityInfo>
        </ProductInfoContainer>
        <PriceInsideCart>${this.props.price}</PriceInsideCart>
        <DeleteIcon
          onClick={() => this.props.deleteItem(this.props.id, this.props.size)}
          onMouseOver={this.onHovered}
          hoverStatus={this.hovered}
        >
          X
        </DeleteIcon>
      </EachCartItem>
    );
  }
}

export default SelectedProduct;
