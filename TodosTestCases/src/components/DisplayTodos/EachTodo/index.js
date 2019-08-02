import React, { Component } from "react";
import { observer } from "mobx-react";
import { TodoDescription } from "./styledComponents";

@observer
class EachTodo extends Component {
  handleCheckBoxChange = () => {
    this.props.todoItem.toggleCompletedStatus();
  };
  handleDeleteIconClick = () => {
    this.props.todoItem.removeTodo(this.props.todoItem.id);
  };
  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.props.todoItem.isCompleted}
          onChange={this.handleCheckBoxChange}
          data-testid="inputBox"
        />
        <TodoDescription isCompleted={this.props.todoItem.isCompleted}>
          {this.props.todoItem.description}
        </TodoDescription>
        <span onClick={this.handleDeleteIconClick}>x</span>
      </div>
    );
  }
}
export default EachTodo;
