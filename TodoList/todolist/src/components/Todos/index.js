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
    newTodoObjects[id].completed = true;
    this.setState({
      todoObjects: newTodoObjects
    });
  };
  callBackFromTodoListClearButton = () => {};
  render() {
    console.log(this.state.todoObjects);
    return (
      <div>
        <AddTodo takeTodo={this.callBackToAddTodo} />
        <TodoList
          todoObjects={this.state.todoObjects}
          callBackFromTodoList={this.callBackFromTodoList}
          callBackFromClearButton={this.callBackFromTodoListClearButton}
        />
        <FilterTodos />
      </div>
    );
  }
}

export default Todos;
