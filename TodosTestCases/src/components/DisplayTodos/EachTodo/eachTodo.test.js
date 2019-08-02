import EachTodo from ".";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoModel from "../../../Models/TodoModel";
describe("EachTodo component test cases", () => {
  it("should update the todo isCompleted status", () => {
    const todoItem = new TodoModel("hello");
    jest.spyOn(todoItem, "toggleCompletedStatus");
    const { getByTestId } = render(<EachTodo todoItem={todoItem} />);
    const inputBox = getByTestId("inputBox");
    fireEvent.click(inputBox);
    expect(todoItem.toggleCompletedStatus).toBeCalled();
  });
});
