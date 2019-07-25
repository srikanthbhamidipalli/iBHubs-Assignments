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
import { userLoginCredentials } from "../constants";

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
  handleSubmit = () => {
    userLoginCredentials["username"] = this.inputText;
    userLoginCredentials["password"] = this.passwordText;
    this.props.store.userLogin(userLoginCredentials);
  };

  render() {
    return (
      <InputForm>
        <ErrorMessage>Error!!!</ErrorMessage>
        <LabelText>Username</LabelText>
        <TextBox
          type="text"
          value={this.inputText}
          onChange={this.handleUsernameChange}
        />
        <br />
        <LabelText>Password</LabelText>
        <TextBox
          type="password"
          value={this.passwordText}
          onChange={this.handlePasswordChange}
        />
        <br />
        <SubmitButton type="submit" onClick={this.handleSubmit}>
          Submit
        </SubmitButton>
      </InputForm>
    );
  }
}

export default UserInputForm;
