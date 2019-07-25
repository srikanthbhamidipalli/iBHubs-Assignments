import React, { Component } from "react";

import { UserFormContainer, HeadingText, FooterText } from "./styledComponents";
import UserInputForm from "./UserInputForm";

class HybridUserForm extends Component {
  render() {
    return (
      <UserFormContainer>
        <HeadingText>
          <h4>LOGIN</h4>
        </HeadingText>
        <UserInputForm />
        <FooterText>
          Not registered!!! {"   "}
          <a href="#">SignUp</a>
        </FooterText>
      </UserFormContainer>
    );
  }
}

export default HybridUserForm;
