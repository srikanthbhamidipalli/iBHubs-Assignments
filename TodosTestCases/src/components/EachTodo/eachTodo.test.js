import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EachTodo from "./index";
import TodoStore from "../../Stores/TodoStore";

describe("EnterTodo component testcases", () => {
  const todoStore = new TodoStore();
  it("should Take a todo description from InputTextBox", () => {
    todoStore.addTodo = jest.fn();
    const { getByPlaceholderText } = render(<EachTodo />);
    const inputTextBox = getByPlaceholderText("What needs to be done");
    expect(inputTextBox).toBeDefined();
    const changeEvent = { target: { value: "Learn Todos App" } };
    fireEvent.change(inputTextBox, changeEvent);
    const keyDownEvent = {
      key: "Enter",
      keyCode: 13,
      code: 13
    };
    fireEvent.keyDown(inputTextBox, keyDownEvent);
    expect();
  });
});
