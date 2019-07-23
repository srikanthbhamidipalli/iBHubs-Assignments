import React, { Component } from "react";
import { observer } from "mobx-react";

import { sizesList } from "../constants";
import {
  SizesChart,
  SizesAndHeadingText,
  EachSizeItem,
  Division
} from "./styledComponents";

@observer
class SizeChart extends Component {
  handleClick = userSelectedSize => {
    this.props.appStore.addSelectedSize(userSelectedSize);
  };

  render() {
    let sizeList = [];
    sizesList.forEach(eachSize =>
      sizeList.push(
        <EachSizeItem
          key={eachSize}
          value={eachSize}
          isThisSelectedSize={this.props.appStore.selectedSize.includes(
            eachSize
          )}
          onClick={() => this.handleClick(eachSize)}
        >
          {eachSize}
        </EachSizeItem>
      )
    );
    return (
      <SizesChart>
        <Division>
          <SizesAndHeadingText>Sizes:</SizesAndHeadingText>
        </Division>
        <Division>{sizeList}</Division>
      </SizesChart>
    );
  }
}

export default SizeChart;
