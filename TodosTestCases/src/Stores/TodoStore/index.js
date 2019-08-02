import { observable, action } from "mobx";
import TodoModel from "../../Models/TodoModel";
class TodoStore {
  @observable todoList = [];

  @action.bound addTodo(todoItem) {
    this.todoList.push(new TodoModel(todoItem));
  }
}
export default TodoStore;
