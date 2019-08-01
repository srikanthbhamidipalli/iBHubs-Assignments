import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EachTodo from "./index";
describe("EnterTodo component testcases", () => {
  it("should Take a todo description from InputTextBox", () => {
    const { getByPlaceholderText } = render(<EachTodo />);
    const inputTextBox = getByPlaceholderText("What needs to be done");
    expect(inputTextBox).toBeDefined();
    const changeEvent = { target: { value: "Learn Todos App" } };
    fireEvent.change(inputTextBox, changeEvent);
  });
});
