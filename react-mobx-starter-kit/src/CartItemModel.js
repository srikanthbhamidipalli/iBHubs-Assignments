import { observable, action } from "mobx";

class CartItemModel {
  @observable quantity = 1;
  constructor(productId, selectedSizes) {
    this.productId = productId;
    this.quantity = 1;
    this.size = selectedSizes;
  }

  @action incrementQuantity = () => {
    this.quantity++;
  };
}

export default CartItemModel;
