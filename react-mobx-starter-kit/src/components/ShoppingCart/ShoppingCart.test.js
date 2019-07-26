import React from "react";
import { shallow } from "enzyme";
import ShoppingCart from "./index";
import appStore from "../../AppStore";
describe("ShoppingCart", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ShoppingCart debug appStore={appStore} />);

    expect(component).toMatchSnapshot();
  });
});
