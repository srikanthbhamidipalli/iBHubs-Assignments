import React, { Component } from "react";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import FilterTodos from "./FilterTodos";
import './styles.css'

class Todos extends Component {
  id = 0;
  constructor(props) {
    super(props);

    this.state = {
      todoObjects: [],
      userSelected: "all"
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
      if (element.id == id) {
        element.completed?element.completed=false:element.completed=true;
      }
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

  displayAllTodos = () => {
    if (this.state.userSelected == "all") return this.state.todoObjects;
    else if (this.state.userSelected == "active") {
      return this.state.todoObjects.filter(function(todoItem) {
        return todoItem.completed !== true;
      });
    } else if (this.state.userSelected == "completed") {
      return this.state.todoObjects.filter(function(todoItem) {
        return todoItem.completed == true;
      });
    } else {
      return this.state.todoObjects;
    }
  };

  todosFilters = userSelection => {
    if (userSelection == "all") {
      this.setState({
        userSelected: "all"
      });
    } else if (userSelection == "active") {
      this.setState({
        userSelected: "active"
      });
    } else {
      this.setState({
        userSelected: "completed"
      });
    }
  };

  clearAllCompletedTodos = () => {
    let newTodoObjects = this.state.todoObjects.filter(function(todoItem) {
      return todoItem.completed !== true;
    });
    this.setState({
      todoObjects: newTodoObjects
    });
  };

  render() {
    console.log("in parent",this.state.userSelected)
    let activeTodos = 0,
      completedTodos = 0;
    this.state.todoObjects.forEach(todoItem => {
      if (todoItem.completed === false) activeTodos++;
    });
    this.state.todoObjects.forEach(todoItem => {
      if (todoItem.completed === true) completedTodos++;
    });
    return (
      <div className="todos-container"
      >
        <text style={{ color: "lightred", fontSize: "80px" }} className="todos-header">todos</text>
        <AddTodo takeTodo={this.callBackToAddTodo} />
        <TodoList
          todoObjects={this.displayAllTodos()}
          callBackFromTodoList={this.callBackFromTodoList}
          callBackFromDeleteButton={this.callBackFromTodoListDeleteButton}
          receiveUpdatedMsg={this.updateTodoItemMsg}
        />
        {this.state.todoObjects.length > 0 ? (
          <FilterTodos
            activeTodos={activeTodos}
            userSelected={this.state.userSelected}
            completedTodos={completedTodos}
            takeUserSelection={this.todosFilters}
            userClearFilter={this.clearAllCompletedTodos}
          />
        ) : null}
      </div>
    );
  }
}

export default Todos;
