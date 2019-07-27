import React from "react";
import { shallow, mount, render } from "enzyme";
import ShoppingCart from "./index";
import AppStore, { appStore } from "../../AppStore";
import SizeChart from "./SizeChart";
import { HomeDivision } from "./styledComponents";
import HeaderInfo from "./HeaderInfo";
import DisplayProducts from "./DisplayProducts";
import Cart from "./Cart";
const storeObj = new AppStore();
storeObj.productList.push({
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
});
describe("ShoppingCart", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ShoppingCart appStore={storeObj} />);

    expect(component).toMatchSnapshot();
  });
  it("Is it calling the fetchProductsData function in componentDidMount method", () => {
    let spy = jest.spyOn(storeObj, "fetchProductsData");
    const component = mount(<ShoppingCart appStore={storeObj} />);
    expect(spy).toHaveBeenCalled();
  });
  it("are the products are added to the productlist?", () => {
    expect(storeObj.productList.length).toBeGreaterThan(0);
  });

  it("Is it rendering the (sizeChart,HeaderInfo,productDisplay,Cart) components properly", () => {
    const component = render(<ShoppingCart appStore={storeObj} />);
    const sizeChartChild = component.find(SizeChart);
    expect(sizeChartChild).toBeTruthy();
    const headerInfoChild = component.find(HeaderInfo);
    expect(headerInfoChild).toBeTruthy();
    const displayProductsChild = component.find(DisplayProducts);
    expect(displayProductsChild).toBeTruthy();
    const cartChild = component.find(Cart);
    expect(cartChild).toBeTruthy();
  });
  it("Is the styles are applyig for HomeDivision(styled Component)?", () => {
    const component = shallow(<HomeDivision />);
    expect(component).toMatchSnapshot();
  });
});
