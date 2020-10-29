import React, { Component } from "react";
// import { Route } from "react-router-dom";
import {connect} from 'react-redux';
import Input from "../Input/Input";
// import axios from "../../axioslogin/axioslogin";
import { Mainbody } from "./Style";
import { MainbodyContent } from "./Style";
import { Login } from "./Style";
import { Userlogin } from "./Style";
import history from "../../History/history";
import * as actions from '../../store/actions/index'

class login extends Component {
  state = {
    controls: {
      email: {
        elementtype: "input",
        elementconfig: {
          type: "email",
          placeholder: "Username",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
          
        },
        valid: false,
        touched: false,
      },
      password: {
        elementtype: "input",
        elementconfig: {
          type: "password",
          placeholder: "Password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
          maxLength: 7,
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
    isSignup: true    
  };
  checkValidity(value, rules) {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    if (rules.isEmail) {
      const pattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      isValid = pattern.test(value) && isValid
    }
    if(rules.isNumeric) {
        const pattern = /\S+@\S+/;
        isValid = pattern.test(value) && isValid
    }
    return isValid;
  };
  loginHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.controls) {
      formData[formElementIdentifier] = this.state.controls[
        formElementIdentifier
      ].value;
    }
  };
  switchAuthHandler = () => {
    this.setState(prevState => {
      return {isSignup: !prevState.isSignup}
    })
  }
  inputChangedHandler = (event, controlName) => {
    console.log(event, controlName);
      const updatedControls = {
          ...this.state.controls,
          [controlName]: {
              ...this.state.controls[controlName],
              value: event.target.value,
              valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
              touched: true
          }
      };
      this.setState({controls: updatedControls});
  };
  
  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.controls.isSignup);
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key],
      });
    }
    const form = formElementsArray.map(formElement => {
  console.log(formElement);
      return (
            <Input
              key={formElement.id}
              elementtype={formElement.config.elementtype}
              elementconfig={formElement.config.elementconfig}
              valuetype={formElement.config.elementconfig.placeholder}
              value={formElement.config.value}
              invalid={!formElement.config.valid}
              touched={formElement.config.touched}
              loading={this.state.loading}
              changed={(event) => this.inputChangedHandler(event, formElement.id)}
            />
      )
      });
  
    return (
      <Mainbody>
        <MainbodyContent>
          <Login>
            <h2>User Login</h2>
            <Userlogin>
              <form onSubmit={this.submitHandler}>
              {form}
              <button onClick={(this.loginHandler, () => history.push("Home"))}> Log in</button>
              <button onClick={(this.switchAuthHandler, ()=> history.push("SignUp"))}>Sign Up</button>
              </form>
             
            </Userlogin>
          </Login>
        </MainbodyContent>
      </Mainbody>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup))
  };
};

export default connect(null,mapDispatchToProps) (login);
