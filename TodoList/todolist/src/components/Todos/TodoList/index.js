import React, { Component } from "react";

import EachTodo from "./EachTodo";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  callBackToParent = id => {
    this.props.callBackFromTodoList(id);
  };
  callBackForClearButton = id => {
    this.props.callBackForClearButton(id);
  };

  displayTodos = () => {
    var todoMsgContent = [];
    this.props.todoObjects.forEach(element => {
      todoMsgContent.push(
        <EachTodo
          key={element.id}
          callBackFromTodoList={this.callBackToParent}
          toDoItem={element}
          callBackForClearButton={this.callBackForClearButton}
        />
      );
    });
    return todoMsgContent;
  };
  render() {
    return <div>{this.displayTodos()}</div>;
  }
}
