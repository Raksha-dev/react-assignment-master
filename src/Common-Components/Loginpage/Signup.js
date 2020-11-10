import React, { Component } from "react";
import {
  Mainbody,
  MainbodyContent,
  Login,
  Userlogin,
  ErrorMessage,
} from "./Style";
import firebase from "../../Pages/Contact-us/firebase";
import history from "../../History/history";
import { withRouter } from "react-router";

export const historyComponent = withRouter(({ history, location }) => {});

class signup extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      fullname: "",
      email: "",
      password: "",
      confirmpassword: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
      fullnameError: "",
      signupError: "",
    };
  }
  ValidateEmail(email) {
    let emailError = "";
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      this.setState({ emailError: "Please Enter the valid username!" });
      console.log("hy");
      return true;
    } else {
      this.setState({ emailError: "" });
      return false;
    }
  }
  ValidatePassword(password) {
    let passwordError = "";
    if (
      !password.match(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+-]).{6}/)
    ) {
      this.setState({ passwordError: "Please Enter the valid password!" });
      return true;
    } else {
      this.setState({ passwordError: "" });
      return false;
    }
  }
  ValidateconfirmPassword(confirmpassword) {
    let confirmPasswordError = "";
    if (
      !confirmpassword.match(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+-]).{6}/)
    ) {
      this.setState({ confirmPasswordError: "Please enter a valid Confirm Password!" });
      return true;
    } else {
      this.setState({ confirmPasswordError: "" });
      return false;
    }
  }
  ValidateFullname(fullname) {
    let fullnameError = "";
    if (
      !fullname.match(/[a-zA-Z]/)
    ) {
      this.setState({ fullnameError: "Please Enter the valid name!" });
      return true;
    } else {
      this.setState({ fullnameError: "" });
      return false;
    }
  }
  login(e) {
    history.push("/Login");
  }
  signup(e) {
    console.log("signing up....");
    e.preventDefault();
    const { location, history } = this.props;
    if (this.state.email == "" && this.state.password == "") {
      this.setState({
        signupError: "Please Enter the valid use details",
      });
    }
    else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((u) => {
          console.log(u);
          setTimeout(() => {
            history.push(`/Home`);
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  handleChange(value) {
    console.log(value);
    this.setState({
      email: value,
    });
    this.ValidateEmail(value);
    this.setState({ loginError: "" });
  }

  handleChangeclick(value) {
    console.log(value);
    this.setState({
      password: value,
    });
    this.ValidatePassword(value);
    this.setState({ loginError: "" });
  }
  handleChangefullname(value) {
    this.setState({
      fullname: value,
    });
    this.ValidateFullname(value);
    this.setState({ loginError: "" });
  }
  handleConfirm(value) {
    const { password, confirmpassword } = this.state;
    if (password !== confirmpassword) {
      this.setState({
        confirmpassword: value,
      });
      this.ValidateconfirmPassword(value);
      this.setState({ loginError: "" });
  } 
  }
  render() {
    const { location, history } = this.props;
    return (
      <div>
        <Mainbody>
          <MainbodyContent>
            <Login>
              <h2>User Login</h2>
              <Userlogin>
                <form>
                  <input
                  name="fullname"
                  type="fullname"
                  id="fullname"
                    placeholder="FullName"
                    onChange={(e) => this.handleChangefullname(e.target.value)}
                    value={this.state.fullname}
                  />
                  <ErrorMessage>{this.state.fullnameError}</ErrorMessage>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="UserName"
                    onChange={(e) => this.handleChange(e.target.value)}
                    value={this.state.email}
                  />
                  <ErrorMessage>{this.state.emailError}</ErrorMessage>
                  <input
                    name="password"
                    type="password"
                    id="password"
                    placeholder="password"
                    onChange={(e) => this.handleChangeclick(e.target.value)}
                    value={this.state.password}
                  />
                  <ErrorMessage>{this.state.passwordError}</ErrorMessage>
                  <input
                    name="confirmpassword"
                    type="confirmpassword"
                    // onChange={this.handleChange}
                    id="confirmpassword"
                    placeholder="Confirm Password"
                    onChange={(e) => this.handleConfirm(e.target.value)}
                    value={this.state.confirmpassword}
                  />
                  <ErrorMessage>{this.state.confirmPasswordError}</ErrorMessage>
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
