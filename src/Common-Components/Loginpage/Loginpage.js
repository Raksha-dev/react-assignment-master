import React, { Component } from "react";
import { Mainbody, MainbodyContent,Login, Userlogin } from "../Login/Style";
import firebase from "../../Pages/Contact-us/firebase";
import history from "../../History/history";
class login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }
  ValidateEmail(inputText) {
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (inputText.match(mailformat)) {
      return true;
    } else {
      alert("You have entered an invalid email address!");
      return false;
    }
  }
  login(e) {
    console.log("logging in....");
    e.preventDefault();
    if(this.ValidateEmail(this.state.email)){
        firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((u) => {
          console.log(u);
          history.push("/Home")
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  signup() {
    history.push("/Signup")
}
  handleChange(e) {
    console.log(e);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
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
            onChange={this.handleChange}
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
          <button onClick={this.login}>Login</button>
          <button onClick={this.signup}>Signup</button>
        </form>
        </Userlogin>
          </Login>
        </MainbodyContent>
      </Mainbody>
      </div>
    );
  }
}
export default login;
