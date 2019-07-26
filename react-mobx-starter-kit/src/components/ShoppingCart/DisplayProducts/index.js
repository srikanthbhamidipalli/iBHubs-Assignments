import React, { Component } from "react";
import { observer } from "mobx-react";

import EachProduct from "./EachProduct";
import { AllProductsContainer, PageStatus } from "./styledComponents";
import {
  fetchingProductsStatus,
  fetchingFailureMessage
} from "../../HybridUserForm/constants";

@observer
class DisplayProducts extends Component {
  render() {
    if (this.props.appStore.failureMessage !== fetchingFailureMessage) {
      return (
        <PageStatus className="page-status">
          <h1>Something Went Wrong!!!!</h1>
        </PageStatus>
      );
    } else if (
      this.props.appStore.productsFetchingStatus === fetchingProductsStatus
    ) {
      return (
        <PageStatus className="page-status">
          <h1>loading....</h1>
        </PageStatus>
      );
    } else if (
      this.props.appStore.productList.length === 0 &&
      this.props.appStore.failureMessage === fetchingFailureMessage
    ) {
      return (
        <PageStatus className="page-status">
          <h1>No products found!!!</h1>
        </PageStatus>
      );
    } else {
      let products = [];
      let productsList = this.props.appStore.orderByFilteredProducts;
      for (let i = 0; i < productsList.length; i++)
        products.push(
          <EachProduct
            key={productsList[i].id}
            appStore={this.props.appStore}
            eachItem={productsList[i]}
            addProductToCart={this.props.appStore.addProductToCart}
          />
        );
      return <AllProductsContainer>{products}</AllProductsContainer>;
    }
  }
}

export default DisplayProducts;
