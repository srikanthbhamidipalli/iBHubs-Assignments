import React from "react";
import { render } from "@testing-library/react";
import EachTodo from "./index";
describe("EnterTodo component testcases", () => {
  it("should Take a todo description from InputTextBox", () => {
    const { getByPlaceholderText } = render(<EachTodo />);
    expect(getByPlaceholderText("What needs to be done")).toBeDefined();
  });
});
