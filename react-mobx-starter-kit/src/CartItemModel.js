import { observable, action } from "mobx";

class CartItemModel {
  @observable quantity = 1;
  constructor(productId, selectedSize) {
    this.productId = productId;
    this.quantity = 1;
    this.size = selectedSize;
  }

  @action incrementQuantity = () => {
    this.quantity++;
  };
}

export default CartItemModel;
