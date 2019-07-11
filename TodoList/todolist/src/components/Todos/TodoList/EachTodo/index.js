import React, { Component } from "react";

import AddTodo from "../../AddTodo";

export default class EachTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItemEditable: false
    };
  }

  handleClick = e => {
    this.props.callBackFromTodoList(e.target.id);
  };

  handleDeleteButton = e => {
    this.props.callBackForDeleteButton(e.target.id);
  };
  handleUpdateButton = () => {
    this.setState({
      todoItemEditable: true
    });
  };
  updateTodoItemCallBack = updatedMsg => {
    this.props.callBackToParentForUpdation(updatedMsg, this.props.toDoItem.id);
    this.setState({
      todoItemEditable: false
    });
  };

  render() {
    var style = {};
    if (this.props.toDoItem.completed == true) {
      style = { textDecoration: "line-through" };
    }
    const todoItem = (
      <div>
        <span>
          <input
            type="checkbox"
            id={this.props.toDoItem.id}
            onClick={this.handleClick}
          />
        </span>
        <span style={style}>{this.props.toDoItem.msg}</span>
        <span>
          <button id={this.props.toDoItem.id} onClick={this.handleDeleteButton}>
            Delete
          </button>
          <button id={this.props.toDoItem.id} onClick={this.handleUpdateButton}>
            Update
          </button>
        </span>
      </div>
    );
    const editableTodoItem = (
      <AddTodo
        value={this.props.toDoItem.msg}
        takeTodo={this.updateTodoItemCallBack}
      />
    );
    return (
      <div>{this.state.todoItemEditable ? editableTodoItem : todoItem}</div>
    );
  }
}
