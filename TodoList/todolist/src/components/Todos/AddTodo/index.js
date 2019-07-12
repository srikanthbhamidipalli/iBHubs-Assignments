import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: this.props.value
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
      <div
        style={{
          width: "391px",
          height: "50px",
          border: "solid 1px",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.inputText}
          placeholder="What needs to be done?"
          style={{
            borderColor: "#e1e1e1",
            borderRadius: "2px",
            color: "#4d4d4d",
            fontSize: "24px"
          }}
        />
        <button onClick={this.handleClick}>submit</button>
      </div>
    );
  }
}

AddTodo.defaultProps = {
  value: ""
};
export default AddTodo;
