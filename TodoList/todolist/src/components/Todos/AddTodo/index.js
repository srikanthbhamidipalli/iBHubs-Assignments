import React, { Component } from "react";

import "./styles.css";

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: this.props.value
    };
  }

  handleClick = e => {
    e.preventDefault();
    if (this.state.inputText.length > 0)
      this.props.takeTodo(this.state.inputText);
    this.setState({
      inputText: ""
    });
  };

  handleChange = e => {
    this.setState({
      inputText: e.target.value
    });
  };
  render() {
    return (
      <form className="input-todo-form" onSubmit={this.handleClick}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.inputText}
          placeholder="What needs to be done?"
          className="input-text-box"
        />
      </form>
    );
  }
}

AddTodo.defaultProps = {
  value: ""
};
export default AddTodo;
