import React, { Component } from "react";

export default class FilterTodos extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  handleAllClick = () => {
    this.props.takeUserSelection("all");
  };

  handleActiveClick = () => {
    this.props.takeUserSelection("active");
  };
  handleCompletedClick = () => {
    this.props.takeUserSelection("completed");
  };
  handleClearAllClick = () => {
    this.props.userClearFilter();
  };

  render() {
    return (
      <div>
        {this.props.activeTodos + "Left"}
        <span>
          <button onClick={this.handleAllClick}>All</button>
        </span>
        <span>
          <button onClick={this.handleActiveClick}>Active</button>
        </span>
        <span>
          <button onClick={this.handleCompletedClick}>Completed</button>
        </span>
        <span>
          <button onClick={this.handleClearAllClick}>Clear Completed</button>
        </span>
      </div>
    );
  }
}
