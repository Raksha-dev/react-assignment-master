import React, { Component } from "react";
// import { Router, Switch, Route } from "react-router-dom";
import history from "../History/history";
import Login from "../Common-Components/Loginpage/Loginpage";
import Signup from "../Common-Components/Loginpage/Signup";
import Home from "../Pages/Home/Home";
import Contactus from "../Pages/Contact-us/ContactUs";
import View from "../Pages/View/View";
import { BrowserRouter} from "react-router-dom";
import firebase from "../Pages/Contact-us/firebase";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    this.authListener();
    console.log(this.state.user);
  }
  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: user});
      } else {
        this.setState({ user: null });
      }
    });
  console.log(this.state.user);
  }
  render() {
    return (
      <Router history={history}>
       
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Signup" component={Signup} />
          {this.state.user != null ? (
            <Switch>
              <Route path="/Home" component={Home} />
              <Route path="/Contactus" component={Contactus} />
              <Route path="/View" component={View} />
            </Switch>
         ) : ( 
            <Redirect to="/" />
           )}
        </Switch>
        </BrowserRouter>
      </Router>
    );
  }
}
