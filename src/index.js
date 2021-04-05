// NPM Packages
import React from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase";

import "./index.css";
import App from "./App";

const config = {
  
}

firebase.initializeApp(config);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
