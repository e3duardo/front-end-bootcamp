import 'babel-polyfill';
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

const root = document.getElementById("root");

ReactDOM.render(<App />, root);

module.hot
  ? module.hot.accept()
  : null
