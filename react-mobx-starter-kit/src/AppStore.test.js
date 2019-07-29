import AppStore from "./AppStore";

describe("AppStore testCases", () => {
  const appObj = new AppStore();
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
  it("is all the observables initialised with the given values?", () => {
    expect(appObj.orderBy).toEqual("select");
    expect(appObj.productList).toEqual([]);
    expect(appObj.cartItemList).toEqual([]);
    expect(appObj.selectedSizes).toEqual([]);
    expect(appObj.failureMessage).toEqual("");
    expect(appObj.initialProductsFetchingStatus).toEqual("");
    expect(appObj.error).toEqual("");
    expect(appObj.accessToken).toEqual("");
  });
  it("Are the products adding to the product list?", () => {
    appObj.buyProductToStore(products);
    expect(appObj.productList.length).toEqual(3);
  });
  it("is the user selected sizes are adding to the sizes list?", () => {
    appObj.addselectedSizes("S");
    expect(appObj.selectedSizes).toEqual(["S"]);
  });
  it("is already selected size is removing from the sizesList?", () => {
    appObj.addselectedSizes("S");
    expect(appObj.selectedSizes.length).toEqual(0);
  });
  it("is the new product is adding to cartList?", () => {
    appObj.addProductToCart(12, "S");
    expect(appObj.cartItemList.length).toEqual(1);
  });
  it("is the quantity increased when old product is added again(product with same size and same id)?", () => {
    appObj.addProductToCart(12, "S");
    expect(appObj.cartItemList.length).toEqual(1);
  });
  it("is the product with same Id and different size must be a new product?", () => {
    appObj.addProductToCart(12, "XS");
    expect(appObj.cartItemList.length).toEqual(2);
  });
  //   it("product with new ID and Size must be a new product", () => {
  //     appObj.addProductToCart(13, "ML");
  //     expect(appObj.cartItemList.length).toEqual(3);
  //   });
  it(" Are the cartListLength and subTotalAmount updated?", () => {
    expect(appObj.cartListLength).toEqual(3);
    expect(appObj.subTotalAmount).toEqual(30);
  });
  it("is it removing the product with same ID and size  from cart", () => {
    appObj.deleteCartItem(12, "XS");
    expect(appObj.cartListLength).toEqual(2);
  });
  it("is it setting up the orderBy Value and return productslist when orderBy=select,selectedSizes=empty[]", () => {
    appObj.orderBy = "select";
    appObj.selectedSizes = [];
    expect(appObj.orderByFilteredProducts).toEqual(appObj.productList);
  });
  it("selectedSizes(empty)-OrderByValue(high-to-low) then it should return products in ascending order", () => {
    appObj.orderBy = "Highest-To-Lowest";
    expect(appObj.orderByFilteredProducts[0].price).toEqual(10);
  });
  it("selectedSizes(empty)-OrderByValue(low-to-high) then it should return products in descending order", () => {
    appObj.orderBy = "Lowest-To-Highest";
    expect(appObj.orderByFilteredProducts[0].price).toEqual(0);
  });
  it("selectedSizes( not empty)-OrderByValue(high-to-low) then it must return filtered products", () => {
    appObj.selectedSizes = ["S"];
    appObj.orderBy = "Highest-To-Lowest";
    expect(appObj.orderByFilteredProducts[0].price).toEqual(10);
  });
  it("selectedSizes(not empty)-OrderByValue(low-to-high) then it must return filtered products", () => {
    appObj.orderBy = "Lowest-To-Highest";
    expect(appObj.orderByFilteredProducts[0].price).toEqual(2);
  });
  it("Products should displayed according to the selected sizes ", () => {
    expect(appObj.orderByFilteredProducts.length).toEqual(2);
  });
  it("should display zero products for the size M", () => {
    appObj.selectedSizes = ["M"];
    expect(appObj.orderByFilteredProducts.length).toEqual(0);
  });
});
