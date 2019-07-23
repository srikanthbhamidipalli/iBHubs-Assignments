import React, { Component } from "react";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import FilterTodos from "./FilterTodos";
import "./styles.css";
import { observer } from "mobx-react";
import { observable } from "mobx";

@observer
class Todos extends Component {
  render() {
    return (
      <div className="todos-container">
        <text
          style={{ color: "lightred", fontSize: "80px" }}
          className="todos-header"
        >
          todos
        </text>
        <AddTodo addTodo={this.props.store.addTodo} />
        <TodoList
          todoObjects={this.props.store.filteredTodos}
          todoStore={this.props.store}
        />
        {this.props.store.todoList.length > 0 ? (
          <FilterTodos
            userSelected={this.props.store.filterText}
            todoStore={this.props.store}
          />
        ) : null}
      </div>
    );
  }
}

export default Todos;
