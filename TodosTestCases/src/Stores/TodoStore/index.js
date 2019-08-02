import { observable, action } from "mobx";

class TodoStore {
  @observable todoList = [];

  @action.bound addTodo(todoItem) {
    this.todoList.push(todoItem);
  }
}
export const todoStore = new TodoStore();

export default TodoStore;
