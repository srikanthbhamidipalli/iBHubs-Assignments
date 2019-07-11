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
  callBackForDeleteButton = id => {
    this.props.callBackFromDeleteButton(id);
  };
  callBackToParentForUpdation = (updatedMsg, id) => {
    this.props.receiveUpdatedMsg(updatedMsg, id);
  };

  displayTodos = () => {
    var todoMsgContent = [];
    this.props.todoObjects.forEach(element => {
      todoMsgContent.push(
        <EachTodo
          key={element.id}
          callBackFromTodoList={this.callBackToParent}
          toDoItem={element}
          callBackForDeleteButton={this.callBackForDeleteButton}
          callBackToParentForUpdation={this.callBackToParentForUpdation}
        />
      );
    });
    return todoMsgContent;
  };
  render() {
    return <div>{this.displayTodos()}</div>;
  }
}
