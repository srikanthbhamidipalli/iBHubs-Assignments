import React, { Component } from "react";
class Sample extends Component {
  state = {};
  showMessage = () => {
    this.props.showMessage();
  };
  render() {
    return <div onClick={this.showMessage} />;
  }
}

export default Sample;
