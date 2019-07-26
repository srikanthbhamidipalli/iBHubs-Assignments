import React from "react";
import { mount } from "enzyme";

import appStore from "../../../../AppStore";
import EachProduct from "./index";
import { FreeShippingLabel } from "./styledComponents";

describe("<EachProduct/>", () => {
  it("component Exists?", () => {
    const wrapper = mount(
      <EachProduct
        key="2"
        appStore={appStore}
        eachItem={{
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
        }}
        addProductToCart={appStore.addProductToCart}
      />
    );
    const price = wrapper.find("div#price").text();
    expect(price).toEqual("$10.9");
    expect(wrapper.find(FreeShippingLabel).exists()).toBeTruthy();
  });
});
