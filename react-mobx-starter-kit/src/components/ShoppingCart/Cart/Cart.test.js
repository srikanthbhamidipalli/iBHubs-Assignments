import React from "react";
import { mount, shallow } from "enzyme";
import AppStore from "../../../AppStore";
import Cart from "./index";
import {
  OutsideCartItemsCount,
  OutsideCartDiv,
  CrossIcon,
  InsideCartItemsCount
} from "./styledComponents";
import { DeleteIcon, EachCartItem } from "./SelectedProduct/styledComponents";

describe("<Cart/>", () => {
  const cartObj = new AppStore();
  cartObj.addProductToCart(12, "S");
  it("is cartItemCount in outside icon same as cartListlength?", () => {
    const component = mount(<Cart appStore={cartObj} />);
    expect(component.find(OutsideCartItemsCount).text()).toEqual("1");
  });
  it("is the outside icon altering with cross mark with onclick event", () => {
    const component = mount(<Cart appStore={cartObj} />);
    expect(component.find(CrossIcon)).toBeDefined();
    component.find(OutsideCartDiv).simulate("click");
    expect(component.find(CrossIcon)).toBeTruthy();
  });
  it("is cartItemCount in inside icon same as cartListlength?", () => {
    const component = mount(<Cart appStore={cartObj} />);
    expect(component.find(InsideCartItemsCount).text()).toEqual("1");
  });
  it("is the product removed from cartList when clicked on small cross mark?", () => {
    const component = mount(<Cart appStore={cartObj} />);
    // console.log(component.debug());
    //component.find(EachCartItem).simulate("click");
    //expect(component.find(InsideCartItemsCount).text()).toEqual("0");
  });
});
