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
import userLoginCredentials from "../constants";

@observer
class UserInputForm extends Component {
  @observable
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
