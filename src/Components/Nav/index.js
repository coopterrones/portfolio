import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-bar">
      <Link className="link" to="/skills">
        <h2 className="nav-element">skills</h2>
      </Link>
      <Link className="link" to="/projects">
        <h2 className="nav-element">projects</h2>
      </Link>
      <Link className="link" to="/contact">
        <h2 className="nav-element">contact</h2>
      </Link>
    </div>
  );
};

export default Nav;
