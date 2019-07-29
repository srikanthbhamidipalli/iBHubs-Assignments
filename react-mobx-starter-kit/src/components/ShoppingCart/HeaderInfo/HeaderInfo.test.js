import React from "react";
import { mount } from "enzyme";
import HeaderInfo from "./index";
import AppStore from "../../../AppStore";
import SelectList from "./styledComponents";

describe("<HeaderInfo/>", () => {
  const headerObj = new AppStore();
  const products = [
    {
      availableSizes: ["S", "XS"],
      currencyFormat: "$",
      currencyId: "USD",
      description: "4 MSL",
      id: 12,
      installments: 9,
      isFreeShipping: true,
      price: 10,
      sku: 12064273040195392,
      style: "Black with custom print",
      title: "Cat Tee Black T-Shirt",
      image:
        "https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg"
    },
    {
      availableSizes: ["XS"],
      currencyFormat: "$",
      currencyId: "USD",
      description: "4 MSL",
      id: 11,
      installments: 9,
      isFreeShipping: true,
      price: 0,
      sku: 12064273040195392,
      style: "Black with custom print",
      title: "Cat Tee Black T-Shirt",
      image:
        "https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg"
    },
    {
      availableSizes: ["S", "ML"],
      currencyFormat: "$",
      currencyId: "USD",
      description: "4 MSL",
      id: 10,
      installments: 9,
      isFreeShipping: true,
      price: 2,
      sku: 12064273040195392,
      style: "Black with custom print",
      title: "Cat Tee Black T-Shirt",
      image:
        "https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg"
    }
  ];
  headerObj.buyProductToStore(products);
  it("is it printing the Displaying products count properly.", () => {
    headerObj.selectedSizes = ["XS"];
    const component = mount(<HeaderInfo appStore={headerObj} />);
    expect(component.find("span#products-count").text()).toEqual(
      "2 Product(s) found"
    );
    component.unmount();
  });
  it("is orderBy Value setting or not?", () => {
    const component = mount(<HeaderInfo appStore={headerObj} />);
    component
      .find("select")
      //   .find("option")
      //   .at(1)
      .simulate("click", { target: { value: "Highest-To-Lowest" } });
    expect(headerObj.orderBy).toEqual("Highest-To-Lowest");
  });
});
