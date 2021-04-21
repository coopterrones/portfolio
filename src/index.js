import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./Components/App/index.js";
import { BrowserRouter } from "react-router-dom";
import Favicon from "react-favicon";
import coopLogo from "./Assets/cooplogobg.png";

ReactDOM.render(
  <BrowserRouter basename="/portfolio">
    <App />
    <Favicon url={coopLogo} />
  </BrowserRouter>,
  document.getElementById("root")
);
