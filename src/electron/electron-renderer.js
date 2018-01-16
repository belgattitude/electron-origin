import React from "react";
import { render } from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from "../js/store/index";
import App from "../js/containers/App";
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap-material-design/dist/css/bootstrap-material-design.css'

let binariesPath = require('electron').remote.getGlobal('binariesPath');
console.log('SSSSSSSSSSSSSSSSS', binariesPath);
render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById('app')
)

