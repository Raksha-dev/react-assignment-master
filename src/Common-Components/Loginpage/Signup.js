import React, { Component } from "react";
import { Mainbody, MainbodyContent,Login, Userlogin } from "../Login/Style";
import firebase from "../../Pages/Contact-us/firebase";
import history from "../../History/history";
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
    };
  }
  ValidateEmail(inputText) {
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (inputText.match(mailformat)) {
      return true;
    } else {
      alert("Please enter username and password!");
      return false;
    }
  }
  login(e) {
    console.log("logging up....");
    e.preventDefault();
    if(this.ValidateEmail(this.state.email)){
        firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((u) => {
          console.log(u);
        })
        .catch((err) => {
          console.log(err);
        });
    }else {
      history.push("/SignUp");
    }
  }
  signup(e) {
    console.log("signing up....");
    if(this.ValidateEmail(this.state.email)){
    e.preventDefault();
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
export default signup;
