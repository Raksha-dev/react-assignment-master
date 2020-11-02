import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware} from "redux";
import reducer from "./store/reducer/reducer";
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ThemeProvider from './Common-Components/context//Theme'
const store = createStore(reducer, applyMiddleware(thunk)); 

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
    
    <ThemeProvider>
     <App />
    </ThemeProvider>
    
    </BrowserRouter>
 
  </Provider>
   
  // </React.StrictMode>
   ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
