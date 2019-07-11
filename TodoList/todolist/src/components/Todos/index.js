import React, { Component } from "react";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import FilterTodos from "./FilterTodos";

class Todos extends Component {
  id = 0;
  constructor(props) {
    super(props);

    this.state = {
      todoObjects: []
    };
  }

  callBackToAddTodo = todoMsg => {
    var todoItem = { msg: todoMsg, completed: false, id: this.id };
    this.setState({
      todoObjects: [todoItem].concat(this.state.todoObjects)
    });
    this.id++;
  };

  callBackFromTodoList = id => {
    var newTodoObjects = this.state.todoObjects;
    newTodoObjects.forEach(element => {
      if (element.id == id) element.completed = true;
    });
    this.setState({
      todoObjects: newTodoObjects
    });
  };
  callBackFromTodoListDeleteButton = id => {
    var newTodoObjects = this.state.todoObjects;

    var filteredTodos = newTodoObjects.filter(
      todoItem => todoItem.id !== parseInt(id, 10)
    );
    this.setState({
      todoObjects: filteredTodos
    });
  };
  updateTodoItemMsg = (msg, id) => {
    var newTodoObjects = this.state.todoObjects;

    newTodoObjects.forEach(element => {
      if (element.id === id) element.msg = msg;
    });
    console.log(newTodoObjects);
    this.setState({
      todoObjects: newTodoObjects
    });
  };
  render() {
    return (
      <div>
        <AddTodo takeTodo={this.callBackToAddTodo} />
        <TodoList
          todoObjects={this.state.todoObjects}
          callBackFromTodoList={this.callBackFromTodoList}
          callBackFromDeleteButton={this.callBackFromTodoListDeleteButton}
          receiveUpdatedMsg={this.updateTodoItemMsg}
        />
        <FilterTodos />
      </div>
    );
  }
}

export default Todos;
