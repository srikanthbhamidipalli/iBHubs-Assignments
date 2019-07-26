import React, { Component } from "react";
import { observer } from "mobx-react";

import { sizesChart } from "../constants";
import {
  SizesChart,
  SizesAndHeadingText,
  EachSizeItem,
  Division
} from "./styledComponents";

@observer
class SizeChart extends Component {
  handleClick = userselectedSizes => {
    this.props.appStore.addselectedSizes(userselectedSizes);
  };

  render() {
    let sizesList = [];
    Object.values(sizesChart).forEach(eachSize =>
      sizesList.push(
        <EachSizeItem
          key={eachSize}
          value={eachSize}
          isThisselectedSizes={this.props.appStore.selectedSizes.includes(
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
        <Division>{sizesList}</Division>
      </SizesChart>
    );
  }
}

export default SizeChart;
