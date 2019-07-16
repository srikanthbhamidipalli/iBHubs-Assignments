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
    console.log(this.state.todoItemEditable)
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
      <div className="todo-row" onDoubleClick={this.handleUpdateButton}>
        <span className="checkbox-msg-container">
          <input
            type="checkbox"
            id={this.props.toDoItem.id}
            onClick={this.handleClick}
            style={checkBoxStyle}
            className="check-box"
          />
          <span style={style}>{this.props.toDoItem.msg}</span>
        </span>
        <div className="update-delete-div">
          <span>
            <img
              className="delete-button"
              id={this.props.toDoItem.id}
              onClick={this.handleDeleteButton}
              src={"/assets/images/delete-button.png"}
            />
          </span>
        </div>
      </div>
    );
    const editableTodoItem = (
      <AddTodo
        value={this.props.toDoItem.msg}
        takeTodo={this.updateTodoItemCallBack}
      />
    );
    return (
      <div className="todo-list">
        {this.state.todoItemEditable ? editableTodoItem : todoItem}
      </div>
    );
  }
}
