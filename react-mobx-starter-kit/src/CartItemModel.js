import { observable, action } from "mobx";

class CartItemModel {
  @observable quantity = 1;
  constructor(productId, selectedSizes, quantity = 1) {
    this.productId = productId;
    this.quantity = quantity;
    this.size = selectedSizes;
  }

  @action incrementQuantity = () => {
    this.quantity++;
  };
}

export default CartItemModel;
