import React from "react";
import { Link } from "react-router-dom";
import "./FooterNav.scss";

const FooterNav = () => {
  return (
    <div className="footer-nav-container">
      <Link to="https://github.com/coopterrones">work.</Link>
      <Link to="/sandbox">sandbox.</Link>
      <Link to="/film">film photo.</Link>
      <Link to="/current-projects">currently working on.</Link>
    </div>
  );
};

export default FooterNav;
