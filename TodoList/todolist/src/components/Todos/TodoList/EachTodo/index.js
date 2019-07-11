import React, { Component } from "react";

export default class EachTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleClick = e => {
    this.props.callBackFromTodoList(e.target.id);
  };

  handleDeleteButton = e => {
    this.props.callBackForDeleteButton(e.target.id);
  };

  render() {
    var style = {};
    var style1 = "";
    if (this.props.toDoItem.completed == true) {
      style = { textDecoration: "line-through" };
      style1 = "checked";
    }
    const todoItem = (
      <div>
        <span>
          <input
            type="checkbox"
            id={this.props.toDoItem.id}
            onClick={this.handleClick}
            style1
          />
        </span>
        <span style={style}>{this.props.toDoItem.msg}</span>
        <span>
          <button id={this.props.toDoItem.id} onClick={this.handleDeleteButton}>
            Delete
          </button>
        </span>
      </div>
    );
    return <div>{todoItem}</div>;
  }
}
