import TodoStore from "./index";

describe("TodoStore test cases", () => {
  let eachTodo;
  beforeEach(() => {
    eachTodo = new TodoStore();
  });
  it("should test for todoslist length for zero", () => {
    expect(eachTodo.todoList.length).toEqual(0);
  });
  it("should test for addTodo functionality", () => {
    const description = "Hello world";

    eachTodo.addTodo(description);
    expect(eachTodo.todoList.length).toBe(1);
    expect(eachTodo.todoList[0].description).toBe(description);
  });
  it("should test for remove todo from todolist", () => {
    const description = "Hello world";
    eachTodo.removeTodo(description);
  });
});
