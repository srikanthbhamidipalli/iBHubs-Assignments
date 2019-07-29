import React, { Component } from "react";
import { observer } from "mobx-react";

import { orderByOptions } from "../constants";
import { SelectList, Option, HeaderContent, Span } from "./styledComponents";

@observer
class HeaderInfo extends Component {
  handleClick = e => {
    this.props.appStore.setOrderByValue(e.target.value);
  };
  render() {
    let optionsList = [];
    Object.values(orderByOptions).forEach(eachOption =>
      optionsList.push(
        <Option key={eachOption} value={eachOption}>
          {eachOption}
        </Option>
      )
    );
    const orderByOptionsList = (
      <SelectList onClick={this.handleClick}>{optionsList}</SelectList>
    );
    return (
      <HeaderContent>
        <Span id="products-count">
          {this.props.appStore.orderByFilteredProducts.length} Product(s) found
        </Span>
        <Span>Order By {orderByOptionsList}</Span>
      </HeaderContent>
    );
  }
}

export default HeaderInfo;
