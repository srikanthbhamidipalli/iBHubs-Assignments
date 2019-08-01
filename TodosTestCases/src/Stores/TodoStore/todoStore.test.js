import TodoStore from "./index";

describe("TodoStore test cases", () => {
  it("should test for adding a todo into todoslist", () => {
    const eachTodo = new TodoStore();
    expect(eachTodo.todoList.length).toEqual(0);
  });
});
