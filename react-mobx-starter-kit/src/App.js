import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { observer } from "mobx-react";
// import Counter from './components/Counter'
// import FilterableProductTable from './components/FilterableProductTable'
// import Todos from './components/Todos'
// import todoStore from "./Todos";
import ShoppingCart from "./components/ShoppingCart";
// import appStore from "./AppStore";
import HybridUserForm from "./components/HybridUserForm";
import { appStore } from "./AppStore";
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter />
       <FilterableProductTable dataModel={[
          {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
          {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
          {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
          {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
          {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
          {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
        ]}/>
        <Todos store={ todoStore }/> */}
        <Router>
          <div>
            {appStore.accessToken.length > 0 ? <Redirect to="/products" /> : ""}
            <Route
              path="/products"
              render={() => <ShoppingCart appStore={appStore} />}
            />
            <Route
              exact
              path="/login"
              render={() => <HybridUserForm type={"LOGIN"} store={appStore} />}
            />
            <Route
              exact
              path="/signup"
              render={() => (
                <HybridUserForm type={"SIGN-UP"} store={appStore} />
              )}
            />
            <Redirect to="/login" />
          </div>
        </Router>
        {/* <HybridUserForm appStore={appStore} /> */}
        {/* <ShoppingCart appStore={appStore} /> */}
      </div>
    );
  }
}

export default App;
