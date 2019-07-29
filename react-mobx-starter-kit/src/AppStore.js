import { observable, action, computed } from "mobx";

import ProductItemModel from "./ProductItemModel";
import CartItemModel from "./CartItemModel";
import { orderByOptions } from "./components/ShoppingCart/constants";
import {
  apiUrls,
  fetchingProductsStatus,
  networkError
} from "./components/HybridUserForm/constants";
class AppStore {
  @observable orderBy = orderByOptions.select;
  @observable productList = [];
  @observable cartItemList = [];
  @observable selectedSizes = [];
  @observable failureMessage = "";
  @observable initialProductsFetchingStatus = "";
  @observable error = "";
  @observable accessToken = "";

  //TODO: Change addSelectedSizes name
  //TODO: set addProductToCart and deleteCartItem names properly
  //TODO: Set scroll for cartItems container and hide the down scroll bar.
  //TODO: Create AuthStore(signin,signup),ProductStore(product related info),CartStore(Cart info).
  @action buyProductToStore = products => {
    //products = [];
    products.forEach(eachProduct =>
      this.productList.push(new ProductItemModel(eachProduct))
    );
  };

  @action.bound async fetchProductsData() {
    this.initialProductsFetchingStatus = fetchingProductsStatus;
    this.failureMessage = "";
    const options = {
      method: "POST",
      headers: {
        Authorization: this.accessToken,
        "Content-Type": "application/json"
      }
    };
    const apiUrl = apiUrls.products;
    try {
      let result = await fetch(apiUrl, options);
      result = await result.json();
      if (result.error) throw new Error(result.error);
      else {
        const productsData = result;
        this.buyProductToStore(productsData.products);
      }
    } catch (error) {
      this.failureMessage = error;
    }
    this.initialProductsFetchingStatus = "";
  }

  @action addselectedSizes = userselectedSizes => {
    if (!this.selectedSizes.includes(userselectedSizes))
      this.selectedSizes.push(userselectedSizes);
    else
      this.selectedSizes = this.selectedSizes.filter(
        size => size !== userselectedSizes
      );
  };

  @action.bound addProductToCart(productId, selectedCartItemSize) {
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
  }

  // @action removeProductFromCart = productId => {
  //   this.cartItemList = this.cartItemList.filter(id => id !== productId);
  // };

  @action setOrderByValue = newValue => {
    this.orderBy = newValue;
  };

  @action deleteCartItem = (productId, size) => {
    let index = this.cartItemList.findIndex(
      cartItem => cartItem.productId === productId && cartItem.size === size
    );
    this.cartItemList.splice(index, 1);
  };

  @action.bound async userLogin(body) {
    this.accessToken = "";
    try {
      let result = await fetch(
        apiUrls.userLogin,
        this.fetchingOptionsForLoginAndSignUp(body)
      );
      result = await result.json();
      //console.log(result);
      if (!result.status) {
        this.error = result.error;
      } else {
        const response = await result;
        this.accessToken = response.accessToken;
      }
    } catch (e) {
      alert(networkError);
    }
  }

  fetchingOptionsForLoginAndSignUp = body => {
    const options = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    };
    return options;
  };

  @action userSignUp = body => {
    fetch(apiUrls.userSignUp, this.fetchingOptionsForLoginAndSignUp(body))
      .then(res => res.json())
      .then(res =>
        res.error ? (this.error = res.error) : (this.error = res.status)
      );
  };

  @computed get orderByFilteredProducts() {
    let productsWithselectedSizes = [];
    for (let i = 0; i < this.selectedSizes.length; i++) {
      this.productList.forEach(product => {
        if (product.availableSizes.includes(this.selectedSizes[i])) {
          if (!productsWithselectedSizes.includes(product))
            productsWithselectedSizes.push(product);
        }
      });
    }
    if (this.orderBy === orderByOptions.select) {
      return this.selectedSizes.length === 0
        ? this.productList
        : productsWithselectedSizes;
    } else if (this.orderBy === orderByOptions.highToLow) {
      return this.selectedSizes.length === 0
        ? this.productList.sort(function(a, b) {
            return b.price - a.price;
          })
        : productsWithselectedSizes.sort(function(a, b) {
            return b.price - a.price;
          });
    } else {
      return this.selectedSizes.length === 0
        ? this.productList.sort(function(a, b) {
            return a.price - b.price;
          })
        : productsWithselectedSizes.sort(function(a, b) {
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

export const appStore = new AppStore();
export default AppStore;
