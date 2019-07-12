import React, { Component } from "react";

import AddTodo from "../../AddTodo";
import "./styles.css";

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
    if (window.confirm("Are you sure"))
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
    var checkBoxStyle = {
      height: "40px",
      width: "40px",
      borderRadius: "20px",
      color: "#f5f5f5"
    };
    if (this.props.toDoItem.completed == true) {
      style = { textDecoration: "line-through", color: "#d9d9d9" };
      checkBoxStyle["color"] = "#2b833c";
    }
    const todoItem = (
      <div className="todo-row">
        <span>
          <input
            type="checkbox"
            id={this.props.toDoItem.id}
            onClick={this.handleClick}
            style={checkBoxStyle}
          />

          <span style={style}>{this.props.toDoItem.msg}</span>
        </span>
        <span>
          <button id={this.props.toDoItem.id} onClick={this.handleDeleteButton}>
            Delete
          </button>
        </span>
        <span>
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
      <div style={{ width: "391px", height: "50px", border: "solid 1px" }}>
        {this.state.todoItemEditable ? editableTodoItem : todoItem}
      </div>
    );
  }
}
