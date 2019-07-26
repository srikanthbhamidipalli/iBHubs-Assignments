import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import {
  InputForm,
  LabelText,
  TextBox,
  SubmitButton,
  ErrorMessage
} from "./styledComponents";
import {
  userLoginCredentials,
  signUpSuccessMessage,
  userVisitedForm
} from "../constants";

@observer
class UserInputForm extends Component {
  @observable inputText = "";
  @observable passwordText = "";

  handleUsernameChange = e => {
    this.inputText = e.target.value;
  };
  handlePasswordChange = e => {
    this.passwordText = e.target.value;
  };
  handleSubmit = e => {
    e.preventDefault();
    userLoginCredentials["username"] = this.inputText;
    userLoginCredentials["password"] = this.passwordText;
    if (this.props.type === userVisitedForm) {
      this.props.store.userLogin(userLoginCredentials);
    } else {
      this.props.store.userSignUp(userLoginCredentials);
    }
    this.inputText = "";
    this.passwordText = "";
  };
  componentDidMount() {
    this.props.store.error = "";
  }

  render() {
    return (
      <InputForm onSubmit={this.handleSubmit}>
        <ErrorMessage>
          {this.props.store.error === "ok"
            ? signUpSuccessMessage
            : this.props.store.error}
        </ErrorMessage>
        <LabelText>Username</LabelText>
        <TextBox
          type="text"
          value={this.inputText}
          onChange={this.handleUsernameChange}
          required
        />
        <br />
        <LabelText>Password</LabelText>
        <TextBox
          type="password"
          value={this.passwordText}
          onChange={this.handlePasswordChange}
          required
        />
        <br />
        <SubmitButton type="submit">Submit</SubmitButton>
      </InputForm>
    );
  }
}

export default UserInputForm;
