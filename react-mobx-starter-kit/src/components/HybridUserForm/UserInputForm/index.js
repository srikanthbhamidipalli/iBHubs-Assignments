import React, { Component } from "react";

import {
  InputForm,
  LabelText,
  TextBox,
  SubmitButton,
  ErrorMessage
} from "./styledComponents";
class UserInputForm extends Component {
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
