import React, { Component } from "react";

import "./styles.css";
import { observer } from "mobx-react";

@observer
class FilterTodos extends Component {
  constructor(props) {
    super(props);

    this.borderStyleForFilters = {};
  }
  handleAllClick = () => {
    this.props.todoStore.filterText="all"
  };

  handleActiveClick = () => {
    this.props.todoStore.filterText="active"
  };
  handleCompletedClick = () => {
    this.props.todoStore.filterText="completed";
  };
  handleClearAllClick = () => {
    this.props.todoStore.clearAllCompletedTodos();
  };

  render() {
    return (
      <div className="filter-list">
        <div>{this.props.todoStore.activeTodoCount + " items Left"}</div>
        <div className={this.props.userSelected=="all"?"user-selection":"user-unselected"}>
          <div onClick={this.handleAllClick}>All</div>
        </div>
        <div className={this.props.userSelected=="active"?"user-selection":"user-unselected"}>
          <div onClick={this.handleActiveClick}>Active</div>
        </div>
        <div className={this.props.userSelected=="completed"?"user-selection":"user-unselected"}>
          <div
            onClick={this.handleCompletedClick}
          >
            Completed
          </div>
        </div>
        {this.props.todoStore.isAnyOneCompleted ? (
          <div className="clear-completed">
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

export default FilterTodos