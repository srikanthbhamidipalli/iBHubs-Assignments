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
      <div
        style={{
          color: "#777777",
          fontSize: "14px",
          width: "391px",
          height: "50px",
          border: "solid 1px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        {this.props.activeTodos + " items Left"}
        <span>
          <span
            style={{
              color: "#777777",
              fontSize: "14px",
              borderColor: "rgba(175, 47, 47, 0.2)"
            }}
            onClick={this.handleAllClick}
          >
            All
          </span>
        </span>
        <span>
          <span
            style={{
              color: "#777777",
              fontSize: "14px",
              borderColor: "rgba(175, 47, 47, 0.2)"
            }}
            onClick={this.handleActiveClick}
          >
            Active
          </span>
        </span>
        <span>
          <span
            style={{
              color: "#777777",
              fontSize: "14px",
              borderColor: "rgba(175, 47, 47, 0.2)"
            }}
            onClick={this.handleCompletedClick}
          >
            Completed
          </span>
        </span>
        {this.props.completedTodos ? (
          <span>
            <span
              style={{
                color: "#777777",
                fontSize: "14px",
                borderColor: "rgba(175, 47, 47, 0.2)"
              }}
              onClick={this.handleClearAllClick}
            >
              Clear Completed
            </span>
          </span>
        ) : null}
      </div>
    );
  }
}
