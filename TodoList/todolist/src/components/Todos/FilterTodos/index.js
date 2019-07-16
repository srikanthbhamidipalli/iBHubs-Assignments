import React, { Component } from "react";

import "./styles.css";

export default class FilterTodos extends Component {
  constructor(props) {
    super(props);

    this.borderStyleForFilters = {};
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
    // this.props.userSelected !== null
    //   ? (document.getElementById(this.props.userSelected).style.border =
    //       "1px solid black")
    //   : null;
    return (
      <div className="filter-list">
        <div>{this.props.activeTodos + " items Left"}</div>
        <div className={this.props.userSelected=="all"?"user-selection":null}>
          <div onClick={this.handleAllClick}>All</div>
        </div>
        <div className={this.props.userSelected=="active"?"user-selection":null}>
          <div onClick={this.handleActiveClick}>Active</div>
        </div>
        <div className={this.props.userSelected=="completed"?"user-selection":null}>
          <div
            onClick={this.handleCompletedClick}
          >
            Completed
          </div>
        </div>
        {this.props.completedTodos ? (
          <div>
            <div
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
