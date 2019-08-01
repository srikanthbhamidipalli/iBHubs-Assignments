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
    const todoItem = {
      id: Date.now(),
      description: "Hello world",
      isCompleted: false
    };
    eachTodo.addTodo(todoItem);
    expect(eachTodo.todoList.length).toBe(1);
    expect(eachTodo.todoList[0].description).toBe("Hello world");
  });
});
