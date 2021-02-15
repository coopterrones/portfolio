import React from "react";
import Nav from "../Nav/index";
import logo from "../../Assets/logo.png";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <div>
      <img className="coop-logo" src={logo} height="100px" width="100px" />
      <Nav />
    </div>
  );
};

export default MainPage;
