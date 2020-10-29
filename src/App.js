import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Styles/CommonStyles.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./store/reducer/reducer";
import Routes from "./Routes/Routes";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import firebase from "./Pages/Contact-us/firebase";
// import Login from "./Common-Components/Loginpage/Loginpage";
// import Signup from "./Common-Components/Loginpage/Loginpage";
// import Home from "./Pages/Home/Home";
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from  "./Pages/Home/Home";
import Login from "./Common-Components/Loginpage/Loginpage";
import Contactus from './Pages/Contact-us/ContactUs'
import View from './Pages/View/View'

class App extends Component {
  
  render() {
    const store = createStore(reducer, applyMiddleware(thunk));
    //   return (
    //     <Router>
    //     <Switch>
    //            <Route
    //              exact
    //              path="/"
    //              render={() => {
    //                  return (
    //                    this.state.user ?
                      
    //                    <Redirect to="/login" /> :
    //                    <Redirect to="/home" /> 
    //                  )
    //              }}
    //            />
    //             <Route exact path="/login" component={Login} />
    //             <Route exact path="/home" component={Home} />
    //            <Route exact path="/view" component={View} />
    //            <Route exact path="/contactus" component={Contactus} />
    //            {/* <Route exact path="/test3" component={Test3} /> */}
    //          </Switch>
    //  </Router>

    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
