import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-bar">
      <Link to="/skills" className="scroll-link">
        placeholderLogo
        <div className="active-dot-1 hidden"></div>
      </Link>
      <Link to="/contact" className="scroll-link">
        contact
        <div className="active-dot-3 hidden"></div>
      </Link>
    </div>
  );
};

export default Nav;
