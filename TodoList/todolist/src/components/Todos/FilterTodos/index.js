import React, { Component } from "react";

export default class FilterTodos extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  handleAllClick = () => {};

  render() {
    return (
      <div>
        {this.props.activeTodos + "Left"}
        <span>
          <button onClick={this.handleAllClick} value="all">
            All
          </button>
        </span>
        <span>
          <button onClick={this.handleActiveClick} value="active">
            Active
          </button>
        </span>
        <span>
          <button onClick={this.handleCompletedClick} value="completed">
            Completed
          </button>
        </span>
        <span>
          <button value="clearAll" onClick={this.handleClearAllClick}>
            ClearAll
          </button>
        </span>
      </div>
    );
  }
}
