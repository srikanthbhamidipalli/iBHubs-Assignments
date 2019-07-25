import React, { Component } from "react";
import { Link } from "react-router-dom";

import { UserFormContainer, HeadingText, FooterText } from "./styledComponents";
import UserInputForm from "./UserInputForm";
import { observer } from "mobx-react";

@observer
class HybridUserForm extends Component {
  render() {
    return (
      <UserFormContainer>
        <HeadingText>
          <h4>{this.props.type}</h4>
        </HeadingText>
        <UserInputForm store={this.props.store} type={this.props.type} />
        <FooterText>
          Not registered!!!
          {this.props.type === "LOGIN" ? (
            <Link to="/signUp">{"     "} SignUp</Link>
          ) : (
            <Link to="/login"> {"   "}login</Link>
          )}
        </FooterText>
      </UserFormContainer>
    );
  }
}

export default HybridUserForm;
