import { observable, action } from "mobx";
import TodoModel from "../../Models/TodoModel";
class TodoStore {
  @observable todoList = [];

  @action.bound addTodo(todoItem) {
    this.todoList.push(new TodoModel(todoItem));
  }

  @action.bound removeTodo(description) {
    this.todoList = this.todoList.filter(
      todoItem => todoItem.description !== description
    );
  }
}
export default TodoStore;
