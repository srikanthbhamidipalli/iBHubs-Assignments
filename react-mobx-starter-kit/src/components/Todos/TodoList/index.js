import React, { Component } from "react";

import EachTodo from "./EachTodo";
import "./styles.css";
import { observer } from "mobx-react";

@observer
class TodoList extends Component {
 
  displayTodos = () => {
    var todoMsgContent = [];
    this.props.todoObjects.forEach(element => {
      todoMsgContent.push(
        <EachTodo
          key={element.id}
          toDoItem={element}
          todoStore={this.props.todoStore}
        />
      );
    });
    return todoMsgContent;
  };
  render() {
    return <div>{this.displayTodos()}</div>;
  }
}

export default TodoList