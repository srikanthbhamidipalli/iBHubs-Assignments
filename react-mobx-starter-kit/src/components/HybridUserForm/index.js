import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

import { UserFormContainer, HeadingText, FooterText } from "./styledComponents";
import UserInputForm from "./UserInputForm";
import { userVisitedForm } from "./constants";
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
          {this.props.type === userVisitedForm ? (
            <div>
              <span>Not registered!!!</span>
              <Link to="/signup"> SignUp</Link>
            </div>
          ) : (
            <div>
              <span>Already registered then Do!!! </span>
              <Link to="/login"> login</Link>
            </div>
          )}
        </FooterText>
      </UserFormContainer>
    );
  }
}

export default HybridUserForm;
