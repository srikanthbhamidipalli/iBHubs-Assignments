import { observable } from "mobx";

class TodoStore {
  @observable todoList = [];
}

export default TodoStore;
