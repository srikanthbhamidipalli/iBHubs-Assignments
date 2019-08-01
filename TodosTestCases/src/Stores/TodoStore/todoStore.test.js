import TodoStore from "./index";

describe("TodoStore test cases", () => {
  let eachTodo;
  beforeEach(() => {
    eachTodo = new TodoStore();
  });
  it("should test for todoslist length for zero", () => {
    expect(eachTodo.todoList.length).toEqual(0);
  });
});
