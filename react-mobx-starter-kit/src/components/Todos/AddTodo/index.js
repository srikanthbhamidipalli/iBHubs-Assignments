import React, { Component } from "react";

import "./styles.css";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
@observer
class AddTodo extends Component {
  @observable inputText=this.props.value

  @action handleClick = e => {
    e.preventDefault();
    if (this.inputText.length > 0)
      this.props.addTodo(this.inputText);
    this.inputText=""
  };

  @action handleChange = e => {
    this.inputText=e.target.value;
  };

  render() {
    return (
      <form className="input-todo-form" onSubmit={this.handleClick}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.inputText}
          placeholder="What needs to be done?"
          className="input-text-box"
        />
      </form>
    );
  }
}

export default AddTodo;
