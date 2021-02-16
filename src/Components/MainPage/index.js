import React from "react";
import Nav from "../Nav/index";
import logo from "../../Assets/logo.png";
import "./MainPage.scss";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="main-page-wrapper">
      <Link to="/">
        <img className="coop-logo" src={logo} height="100px" width="100px" />
      </Link>
      <Nav />
    </div>
  );
};

export default MainPage;
