import EachTodo from ".";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoModel from "../../../Models/TodoModel";
import TodoStore from "../../../Stores/TodoStore";
describe("EachTodo component test cases", () => {
  it("should update the todo isCompleted status", () => {
    const todoItem = new TodoModel("hello");
    jest.spyOn(todoItem, "toggleCompletedStatus");
    const { getByTestId } = render(<EachTodo todoItem={todoItem} />);
    const inputBox = getByTestId("inputBox");
    fireEvent.click(inputBox);
    expect(todoItem.toggleCompletedStatus).toBeCalled();
  });
  it("should check if the todo is removing from todolist when click on cross mark", () => {
    const todoStore = new TodoStore();
    const todoItem = new TodoModel("hello");
    jest.spyOn(todoStore, "removeTodo");
    const { getByTestId } = render(<EachTodo todoItem={todoItem} />);
    const crossmark = getByTestId("crossmark");
    fireEvent.click(crossmark);
    expect(todoStore.removeTodo).toBeCalled();
  });
});
