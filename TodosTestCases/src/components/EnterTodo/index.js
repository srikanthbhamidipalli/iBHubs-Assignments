import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
class EnterTodo extends Component {
  @observable inputText = "";

  handleChangeEvent = e => {
    this.inputText = e.target.value;
  };
  handleKeyDownEvent = e => {
    if (e.keyCode === 13) {
      this.props.todoStore.addTodo(this.inputText);
    }
    this.inputText = "";
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="What needs to be done"
          onChange={this.handleChangeEvent}
          onKeyDown={this.handleKeyDownEvent}
          value={this.inputText}
        />
      </div>
    );
  }
}
export default EnterTodo;
