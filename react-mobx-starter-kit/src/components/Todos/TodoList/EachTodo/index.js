import React, { Component } from "react";

import AddTodo from "../../AddTodo";
import "./styles.css";
import { observer } from "mobx-react";
import { observable } from "mobx";

@observer
class EachTodo extends Component {
  @observable todoItemEditable= false;

  handleClick = e => {
  this.props.toDoItem.completeTodo();
  };

  handleDeleteButton = e => {
    if (window.confirm("Are you sure"))
      this.props.todoStore.removeTodo(e.target.id)
  };

  handleUpdateButton = () => {
      this.todoItemEditable=true
  };

  updateTodoItemCallBack = updatedMsg => {
    this.props.toDoItem.updateTodo(updatedMsg);
    
      this.todoItemEditable= false
    
  };

  render() {
    var style = {};
    if (this.props.toDoItem.completed == true) {
      style = { textDecoration: "line-through", color: "#d9d9d9" };
    }
    const todoItem = (
      <div className="todo-row" onDoubleClick={this.handleUpdateButton}>
        <span className="checkbox-msg-container">
          {this.props.toDoItem.completed?<img
            src="/assets/images/tick-img.jpg"
            id={this.props.toDoItem.id}
            onClick={this.handleClick}
            className="untick-img"
            alt=""/>:<img
          src="/assets/images/index.png"
          id={this.props.toDoItem.id}
          onClick={this.handleClick}
          className="untick-img"
          alt=""/>}
          <span style={style} className="todo-msg">{this.props.toDoItem.inputText}</span>
        </span>
        <div className="update-delete-div">
          <span>
            <img
              className="delete-button"
              id={this.props.toDoItem.id}
              onClick={this.handleDeleteButton}
              src={"/assets/images/delete-button.png"}
            alt=""/>
          </span>
        </div>
      </div>
    );
    const editableTodoItem = (
      <AddTodo
        value={this.props.toDoItem.inputText}
        addTodo={this.updateTodoItemCallBack}
      />
    );
    return (
      <div className="todo-list">
        {this.todoItemEditable ? editableTodoItem : todoItem}
      </div>
    );
  }
}

export default EachTodo