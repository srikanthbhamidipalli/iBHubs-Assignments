import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class EachTodo extends Component {
  handleCheckBoxClick = () => {
    this.props.todoItem.toggleCompletedStatus();
  };
  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.props.todoItem.isCompleted}
          onChange={this.handleCheckBoxClick}
        />
        <span>{this.props.todoItem.description}</span>
        <span>x</span>
      </div>
    );
  }
}
export default EachTodo;
