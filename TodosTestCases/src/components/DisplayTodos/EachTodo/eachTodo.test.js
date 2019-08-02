import EachTodo from ".";
import React from "react";
import { render, fireEvent } from "@testing-library/react";

describe("EachTodo component test cases", () => {
  it("should update the todo isCompleted status", () => {
    EachTodo.handleCheckBoxClick = jest.fn();
    const { getByTestId } = render(<EachTodo />);
    const inputBox = getByTestId("inputBox");
    fireEvent.click(inputBox);
  });
});
