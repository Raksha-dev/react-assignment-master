import React, { Component } from "react";
import { Mainbody, MainbodyContent,Login, Userlogin,ErrorMessage } from "../Login/Style";
import firebase from "../../Pages/Contact-us/firebase";
import history from "../../History/history";
import {withRouter} from 'react-router';

export const historyComponent = withRouter(({ history, location }) => {})

class signup extends Component {
  constructor(props) {
    super(props);
    // this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      fullname: "",
      email: "",
      password: "",
      confirmpassword: "",
      signupError: ""
    };
  }
  ValidateEmail() {
    let signupError= "";
    if(!this.state.email.includes("@")) {
      signupError = "Please Enter the valid user details";
    }
    if (signupError) {
      this.setState({signupError})
      return false;
    }
    return true;
    // var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    // if (inputText.match(mailformat)) {
    //   return true;
    // } else {
    //   return false;
    // }
  }
  login(e) {
      history.push("/");
  }
  signup(e) {
    console.log("signing up....");
    e.preventDefault();
    const { location, history } = this.props
    const isValid = this.ValidateEmail();
    // if(this.ValidateEmail(this.state.email)){
      if(isValid){
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
        history.push("/Home")
      })
      .catch((err) => {
        console.log(err);
      });
    }

  }
  handleChange(e) {
    console.log(e);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    const { location, history } = this.props
    return (
      <div>
         <Mainbody>
        <MainbodyContent>
          <Login>
            <h2>User Login</h2>
            <Userlogin>
        <form>
          <input
            // type="fullname"
            // id="fullname"
            // name="fullname"
            placeholder="FullName"
            onChange={this.handleChange}
            // value={this.state.fullname}
          />
          <input
            name="email"
            type="email"
            onChange={this.handleChange}
            id="email"
            placeholder="UserName"
            // onChange={this.handleChange}
            value={this.state.email}
          />
          <input
            name="password"
            type="password"
            onChange={this.handleChange}
            id="password"
            placeholder="password"
            // onChange={this.handleChange}
            value={this.state.password}
          />
          <input
            name="confirmpassword"
            type="confirmpassword"
            onChange={this.handleChange}
            id="confirmpassword"
            placeholder="Confirm Password"
            // onChange={this.handleChange}
            // value={this.state.password}
          />
          <ErrorMessage>{this.state.signupError}</ErrorMessage>
          <button onClick={this.signup}>Signup</button>
          <button onClick={this.login}>Login</button>
        </form>
        </Userlogin>
          </Login>
        </MainbodyContent>
      </Mainbody>
      </div>
    );
  }
}
export default withRouter(signup);
