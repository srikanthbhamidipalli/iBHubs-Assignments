import React from "react";

import { mount } from "enzyme";
import SizeChart from "./index";
import AppStore from "../../../AppStore";
import { EachSizeItem } from "./styledComponents";
import "jest-styled-components";

describe("<SizeChart/>", () => {
  const storeObj = new AppStore();
  it("Is it rendering EachItemSize component?", () => {
    const component = mount(
      <SizeChart
        appStore={storeObj}
        sizesChart={{ xs: "XS", s: "S", m: "M" }}
      />
    );
    expect(component.find(EachSizeItem)).toHaveLength(3);
    component.unmount();
  });
  it("Is it handling onClick event", () => {
    const component = mount(
      <SizeChart
        appStore={storeObj}
        sizesChart={{ xs: "XS", s: "S", m: "M" }}
      />
    );
    // expect(component.find(EachSizeItem).at(1)).toHaveStyleRule(
    //   "background-color",
    //   "lightgrey"
    // );
    component
      .find(EachSizeItem)
      .at(1)
      .simulate("click");
    expect(storeObj.selectedSizes.length).toEqual(1);
    component.unmount();
  });
  it("Is the styles are applying for Sizes.", () => {
    const component = mount(
      <SizeChart
        appStore={storeObj}
        sizesChart={{ xs: "XS", s: "S", m: "M" }}
      />
    );
    expect(component.find(EachSizeItem).at(0)).toHaveStyleRule(
      "background-color",
      "lightgrey"
    );
    expect(
      component
        .find(EachSizeItem)
        .at(1)
        .simulate("click")
    ).toHaveStyleRule("background-color", "black");
  });
});
