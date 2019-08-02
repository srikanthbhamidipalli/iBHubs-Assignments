class TodoModel {
  constructor(desc) {
    this.description = desc;
    this.id = Date.now();
    this.isCompleted = false;
  }
  updateTodo = newDescription => {
    this.description = newDescription;
  };
  toggleCompleted = () => {
    this.isCompleted = !this.isCompleted;
  };
}

export default TodoModel;
