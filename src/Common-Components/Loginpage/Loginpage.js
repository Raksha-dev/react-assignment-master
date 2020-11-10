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

class login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      loginError: "",
    };
  }
  ValidateEmail(email) {
    console.log(email);
    let emailError = "";
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      this.setState({ emailError: "Please Enter the valid username" });
      console.log("hy");
      return true;
    } else {
      console.log("hey");
      this.setState({ emailError: "" });
      return false;
    }
  }
  ValidatePassword(password) {
    console.log(password);
    let passwordError = "";
    if (
      !password.match(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+-]).{6}/)
    ) {
      this.setState({ passwordError: "Please Enter the valid password" });
      console.log("oye");
      return true;
    } else {
      console.log("lalal");
      this.setState({ passwordError: "" });
      return false;
    }
  }
  login(e) {
    e.preventDefault();
    const { location, history } = this.props;
    console.log("logging in....");
    if (this.state.email == "" && this.state.password == "") {
      this.setState({
        loginError: "Please Enter the valid username and password",
      });
    }
    else {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
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
  signup(e) {
    e.preventDefault();
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
                    type="email"
                    id="email"
                    name="email"
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
                  <ErrorMessage>{this.state.loginError}</ErrorMessage>
                  <button onClick={this.login}>Login</button>
                  <button
                    onClick={(this.signup, () => history.push("/Signup"))}
                  >
                    Signup
                  </button>
                </form>
              </Userlogin>
            </Login>
          </MainbodyContent>
        </Mainbody>
      </div>
    );
  }
}
export default withRouter(login);
