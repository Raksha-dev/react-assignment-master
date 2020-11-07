import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Styles/CommonStyles.css";
import { Provider } from "react-redux";
import Routes from "./Routes/Routes";
// import thunk from "redux-thunk";
import store from "./Sagas/Store/store";
import ThemeContextProvider from './Common-Components/context/Theme'
function App ()  {
  
    return (
     
      <Provider store={store}>
        <ThemeContextProvider>
        <Routes />
        </ThemeContextProvider>
      </Provider>
    );
  }


export default App;
