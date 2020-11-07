import React from "react";
import "./Styles/CommonStyles.css";
import { Provider } from "react-redux";
import Routes from "./Routes/Routes";
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
