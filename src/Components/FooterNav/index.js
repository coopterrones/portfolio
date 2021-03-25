import React from "react";
import { Link } from "react-router-dom";
import "./FooterNav.scss";

const FooterNav = () => {
  return (
    <div className="footer-nav-container">
      <Link to="https://github.com/coopterrones">projects</Link>
      <Link to="/film">film</Link>
      <Link to="/sandbox">sandbox</Link>
    </div>
  );
};

export default FooterNav;
