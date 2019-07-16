import React, { Component } from "react";

import AddTodo from "../../AddTodo";
import "./styles.css";

export default class EachTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItemEditable: false,
      completed:false,
    };
  }

  handleClick = e => {
    this.setState({
      completed:this.state.completed?false:true,
    })
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
    if (this.props.toDoItem.completed == true) {
      style = { textDecoration: "line-through", color: "#d9d9d9" };
    }
    const todoItem = (
      <div className="todo-row" onDoubleClick={this.handleUpdateButton}>
        <span className="checkbox-msg-container">
          {this.state.completed?<img
            src="/assets/images/tick-img.jpg"
            id={this.props.toDoItem.id}
            onClick={this.handleClick}
            className="untick-img"
          />:<img
          src="/assets/images/index.png"
          id={this.props.toDoItem.id}
          onClick={this.handleClick}
          className="untick-img"
        />}
          <span style={style} className="todo-msg">{this.props.toDoItem.msg}</span>
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
