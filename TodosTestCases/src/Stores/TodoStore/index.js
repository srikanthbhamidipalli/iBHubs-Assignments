import { observable, action } from "mobx";
import TodoModel from "../../Models/TodoModel";
class TodoStore {
  @observable todoList = [];

  @action.bound addTodo(todoItemDescription) {
    const todoInstance = new TodoModel(todoItemDescription);
    this.todoList.push(todoInstance);
    return todoInstance.id;
  }

  @action.bound removeTodo(id) {
    this.todoList = this.todoList.filter(todoItem => todoItem.id !== id);
  }
}
export default TodoStore;
