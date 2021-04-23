import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./Components/App/index.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
