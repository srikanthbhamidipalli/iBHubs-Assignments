import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: ""
    };
  }

  handleClick = () => {
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
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.inputText}
        />
        <button onClick={this.handleClick}>submit</button>
      </div>
    );
  }
}

export default AddTodo;
