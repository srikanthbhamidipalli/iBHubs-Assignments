import React, { Component } from "react";
import { observable } from "mobx";

class EachTodo extends Component {
  @observable inputText = "";
  handleChangeEvent = e => {
    this.inputText = e.target.value;
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="What needs to be done"
          onChange={this.handleChangeEvent}
          onKeyDown={this.handleKeyDownEvent}
        />
      </div>
    );
  }
}
export default EachTodo;
