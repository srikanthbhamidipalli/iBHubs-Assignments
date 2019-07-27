import React from "react";
import { mount, shallow, render } from "enzyme";

import { appStore } from "../../../../AppStore";
import EachProduct from "./index";
import { FreeShippingLabel, AddToCart } from "./styledComponents";

const product = {
  availableSizes: ["S", "XS"],
  currencyFormat: "$",
  currencyId: "USD",
  description: "4 MSL",
  id: 12,
  installments: 9,
  isFreeShipping: true,
  price: 10.9,
  sku: 12064273040195392,
  style: "Black with custom print",
  title: "Cat Tee Black T-Shirt",
  image:
    "https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg"
};
describe("<EachProduct/>", () => {
  it("component Exists?", () => {
    const callBack = jest.fn();
    const wrapper = mount(
      <EachProduct
        key="2"
        appStore={appStore}
        eachItem={product}
        addProductToCart={callBack}
      />
    );
    // wrapper.find(AddToCart).simulate("click");
    // expect(callBack).toHaveBeenCalled();
    const price = wrapper.find("div#price").text();
    expect(price).toEqual("$10.9");
    expect(wrapper.find(FreeShippingLabel).exists()).toBeTruthy();
    expect();
  });
});

it("Select your Size dropdown is working or not?", () => {
  let callBack = jest.fn();
  const spy = jest.spyOn(appStore, "addProductToCart");
  const wrapper = mount(
    <EachProduct
      key="2"
      appStore={appStore}
      eachItem={product}
      addProductToCart={appStore.addProductToCart}
    />
  );
  wrapper
    .find("select#select-list")
    .simulate("click", { target: { value: "S" } });
  //AddtoCart handle click is working or not
  wrapper.find(AddToCart).simulate("click");
  // expect(callBack).toHaveBeenCalled();
  expect(spy).toHaveBeenCalled();
});
it("is cartCount updated?", () => {
  expect(appStore.cartItemList.length).toBe(1);
});
it("snapshot testing ", () => {
  const wrapper = shallow(
    <EachProduct key="2" appStore={appStore} eachItem={product} />
  );
  expect(wrapper).toMatchSnapshot();
});
