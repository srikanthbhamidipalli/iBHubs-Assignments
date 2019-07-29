import React from "react";
import { mount } from "enzyme";
import DisplayProducts from "./index";
import AppStore from "../../../AppStore";
import EachProduct from "./EachProduct";

const newObj = new AppStore();
describe("<DisplayProducts/>", () => {
  it("Is it rendering EachProduct component.", () => {
    const component = mount(<DisplayProducts appStore={newObj} />);
    expect(component.find(EachProduct)).toBeTruthy();
  });
  it("should show Loading message", () => {
    const component = mount(<DisplayProducts appStore={newObj} />);
    newObj.initialProductsFetchingStatus = "loading";
    const newWrapper = component.findWhere(n => {
      return n.text() === "loading....";
    });
    expect(newWrapper.find("h1").text()).toEqual("loading....");
  });

  it("should show something went wrong on page error", () => {
    const component = mount(<DisplayProducts appStore={newObj} />);
    newObj.failureMessage = "Something Went Wrong!!!!";
    expect(component.find("h1").text()).toEqual("Something Went Wrong!!!!");
  });

  it("should show products empty message if no products found", () => {
    //newObj.initialProductsFetchingStatus = "";
    const component = mount(<DisplayProducts appStore={newObj} />);
    newObj.productList = [];
    newObj.failureMessage = "";
    newObj.initialProductsFetchingStatus = "";
    // console.log("length of products", newObj.productList.length);
    // console.log("failure", storeObj.failureMessage);
    // console.log("initial", storeObj.initialProductsFetchingStatus);

    expect(component.find("h1").text()).toEqual("No products found!!!");
  });
});
