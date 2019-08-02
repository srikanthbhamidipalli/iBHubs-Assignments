import EachTodo from ".";
import React from "react";
import { render, fireEvent, cleanup, getByText } from "@testing-library/react";
import TodoModel from "../../../Models/TodoModel";
import TodoStore from "../../../Stores/TodoStore";
describe("EachTodo component test cases", () => {
  let todoItem;
  afterEach(cleanup);
  beforeEach(() => {
    todoItem = new TodoModel("hello");
  });
  it("should update the todo isCompleted status", () => {
    jest.spyOn(todoItem, "toggleCompletedStatus");
    const { getByTestId } = render(<EachTodo todoItem={todoItem} />);
    const inputBox = getByTestId("inputBox");
    fireEvent.click(inputBox);
    expect(todoItem.toggleCompletedStatus).toBeCalled();
  });
  it("should check if the todo is removing from todolist when click on cross mark", () => {
    const todoStore = new TodoStore();
    jest.spyOn(todoStore, "removeTodo");
    const { getByTestId } = render(
      <EachTodo todoItem={todoItem} todoStore={todoStore} />
    );
    const crossmark = getByTestId("crossmark");
    fireEvent.click(crossmark);
    expect(todoStore.removeTodo).toBeCalledWith(todoItem.id);
  });
  it("should check if the todo description is updating or not", () => {
    const todoStore = new TodoStore();
    const { getByTestId } = render(
      <EachTodo todoItem={todoItem} todoStore={todoStore} />
    );
    const enterTodoComponent = getByTestId("enter-todo-component");
    expect(enterTodoComponent).toBeDefined();
  });
});
