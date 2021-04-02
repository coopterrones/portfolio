import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-bar">
      <Link to="/" className="scroll-link">
        placeholderLogo
        <div className="active-dot-1 hidden"></div>
      </Link>
      <a href="mailto:cooper.terrones@outlook.com?Subject=Hi Coop!">
        get in touch.
      </a>
    </div>
  );
};

export default Nav;
