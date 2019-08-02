import React, { Component } from "react";
import EachTodo from "./EachTodo";

class DisplayTodos extends Component {
  render() {
    return (
      <div data-testid="eachTodo">
        <EachTodo />
      </div>
    );
  }
}
export default DisplayTodos;
