import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Styles/CommonStyles.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./store/reducer/reducer";
import Routes from "./Routes/Routes";
import thunk from "redux-thunk";
import ThemeContextProvider from './Common-Components/context/Theme'
import ScrolltoTop from './Common-Components/BacktoTop/Scroll'
function App ()  {
  
 
    const store = createStore(reducer, applyMiddleware(thunk));
    return (
     
      <Provider store={store}>
         {/* <ScrolltoTop /> */}
        <ThemeContextProvider>
        <Routes />
        </ThemeContextProvider>
      </Provider>
    );
  }


export default App;
