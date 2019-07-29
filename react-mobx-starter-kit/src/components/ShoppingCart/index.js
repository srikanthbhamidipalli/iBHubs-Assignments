import React from "react";
import { observer } from "mobx-react";

import SizeChart from "./SizeChart";
import HeaderInfo from "./HeaderInfo";
import DisplayProducts from "./DisplayProducts";
import Cart from "./Cart";
import { HomeDivision, Division } from "./styledComponents";
import { sizesChart } from "./constants";

@observer
class ShoppingCart extends React.Component {
  componentDidMount() {
    this.props.appStore.fetchProductsData();
  }
  render() {
    return (
      <HomeDivision>
        <Division>
          <SizeChart appStore={this.props.appStore} sizesChart={sizesChart} />
        </Division>
        <Division>
          <HeaderInfo appStore={this.props.appStore} />
          <DisplayProducts appStore={this.props.appStore} />
        </Division>
        <Cart appStore={this.props.appStore} />
      </HomeDivision>
    );
  }
}

export default ShoppingCart;
