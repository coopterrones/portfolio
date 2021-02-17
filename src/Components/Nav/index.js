import React from "react";
import "./Nav.scss";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Nav = () => {
  return (
    <div className="nav-bar">
      <Link
        to="skills"
        spy={true}
        smooth={true}
        duration={500}
        className="scroll-link"
        activeClass="active-scroll-link"
        delay={1000}>
        skills
        <div className="active-dot-1 hidden"></div>
      </Link>
      <Link
        to="projects"
        spy={true}
        smooth={true}
        duration={500}
        className="scroll-link"
        activeClass="active-scroll-link">
        projects
        <div className="active-dot-2 hidden"></div>
      </Link>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
        className="scroll-link"
        activeClass="active-scroll-link">
        contact
        <div className="active-dot-3 hidden"></div>
      </Link>
    </div>
  );
};

export default Nav;
