import React, { Component } from "react";

import "./styles.css";

export default class FilterTodos extends Component {
  constructor(props) {
    super(props);

    this.borderStyleForFilters = {};
  }
  handleAllClick = () => {
    this.borderStyleForFilters = { border: "1px solid rgba(175, 47, 47, 0.2)" };
    this.props.takeUserSelection("all");
  };

  handleActiveClick = () => {
    this.borderStyleForFilters = { border: "1px solid rgba(175, 47, 47, 0.2)" };
    this.props.takeUserSelection("active");
  };
  handleCompletedClick = () => {
    this.props.takeUserSelection("completed");
  };
  handleClearAllClick = () => {
    this.props.userClearFilter();
  };

  render() {
    // this.props.userSelected !== null
    //   ? (document.getElementById(this.props.userSelected).style.border =
    //       "1px solid black")
    //   : null;
    return (
      <div className="filter-list">
        <div>{this.props.activeTodos + " items Left"}</div>
        <div id="all">
          <div onClick={this.handleAllClick}>All</div>
        </div>
        <div style={this.borderStyleForFilters}>
          <div onClick={this.handleActiveClick}>Active</div>
        </div>
        <div>
          <div
            style={{
              borderColor: "rgba(175, 47, 47, 0.2)"
            }}
            onClick={this.handleCompletedClick}
          >
            Completed
          </div>
        </div>
        {this.props.completedTodos ? (
          <div>
            <div
              style={{
                borderColor: "rgba(175, 47, 47, 0.2)"
              }}
              onClick={this.handleClearAllClick}
            >
              Clear Completed
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
