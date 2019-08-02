import React from "react";
import { render } from "@testing-library/react";
import DisplayTodos from ".";

describe("Display todos Component test cases", () => {
  it("should test for finding eachTodo component", () => {
    const { getByTestId } = render(<DisplayTodos />);
    const eachTodo = getByTestId("eachTodo");
    expect(eachTodo).toBeDefined();
  });
});
