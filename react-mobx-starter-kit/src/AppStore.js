import { observable, action, computed } from "mobx";

import ProductItemModel from "./ProductItemModel";
import CartItemModel from "./CartItemModel";

class AppStore {
  @observable orderBy = "select";
  @observable productList = [];
  @observable cartItemList = [];
  @observable selectedSize = [];
  @observable failureMessage = "";
  @observable productsFetchingStatus = "loading";

  @action buyProductToStore = products => {
    // products = [];
    products.forEach(eachProduct =>
      this.productList.push(new ProductItemModel(eachProduct))
    );
  };

  @action.bound async fetchProductsData() {
    const apiUrl = "https://demo8129378.mockable.io/products/all/v1";
    try {
      const result = await fetch(apiUrl);
      if (!result.ok) throw new Error(result.status);
      else {
        const productsData = await result.json();
        this.buyProductToStore(productsData.products);
      }
    } catch (error) {
      this.failureMessage = error.message;
    }
    this.productsFetchingStatus = "loadingCompleted";
  }

  @action addSelectedSize = userSelectedSize => {
    if (!this.selectedSize.includes(userSelectedSize))
      this.selectedSize.push(userSelectedSize);
    else
      this.selectedSize = this.selectedSize.filter(
        size => size !== userSelectedSize
      );
  };

  @action addProductToCart = (productId, selectedCartItemSize) => {
    let isAdded = this.cartItemList.find(
      item => item.productId === productId && item.size === selectedCartItemSize
    );
    if (isAdded) {
      isAdded.incrementQuantity();
    } else {
      this.cartItemList = this.cartItemList.concat(
        new CartItemModel(productId, selectedCartItemSize)
      );
    }
  };

  @action removeProductFromCart = productId => {
    this.cartItemList = this.cartItemList.filter(id => id !== productId);
  };

  @action setOrderByValue = newValue => {
    this.orderBy = newValue;
  };

  @action deleteCartItem = (productId, size) => {
    let index = this.cartItemList.findIndex(
      cartItem => cartItem.productId === productId && cartItem.size === size
    );
    this.cartItemList.splice(index, 1);
  };

  @computed get orderByFilteredProducts() {
    let productsWithSelectedSizes = [];
    for (let i = 0; i < this.selectedSize.length; i++) {
      this.productList.forEach(product => {
        if (product.availableSizes.includes(this.selectedSize[i])) {
          if (!productsWithSelectedSizes.includes(product))
            productsWithSelectedSizes.push(product);
        }
      });
    }
    if (this.orderBy === "select") {
      return this.selectedSize.length === 0
        ? this.productList
        : productsWithSelectedSizes;
    } else if (this.orderBy === "Highest-To-Lowest") {
      return this.selectedSize.length === 0
        ? this.productList.sort(function(a, b) {
            return b.price - a.price;
          })
        : productsWithSelectedSizes.sort(function(a, b) {
            return b.price - a.price;
          });
    } else {
      return this.selectedSize.length === 0
        ? this.productList.sort(function(a, b) {
            return a.price - b.price;
          })
        : productsWithSelectedSizes.sort(function(a, b) {
            return a.price - b.price;
          });
    }
  }

  @computed get subTotalAmount() {
    let totalAmount = 0;
    this.cartItemList.forEach(cartItem => {
      this.productList.forEach(product => {
        if (cartItem.productId === product.id)
          totalAmount += cartItem.quantity * product.price;
      });
    });
    return totalAmount;
  }

  @computed get cartListLength() {
    let totalLength = 0;
    this.cartItemList.forEach(cartItem => (totalLength += cartItem.quantity));
    return totalLength;
  }
}
const appStore = new AppStore();

export default appStore;
