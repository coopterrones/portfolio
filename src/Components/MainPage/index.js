import React from "react";
import Nav from "../Nav/index";
import logo from "../../Assets/logo.png";
import "./MainPage.scss";
import NarrativeCard from "../NarrativeCard/index";
import BackgroundArt from "../BackgroundArt/index";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const MainPage = () => {
  return (
    <Element name="main" className="main-page-wrapper">
      <Link
        to="main"
        spy={true}
        smooth={true}
        duration={500}
        className="logo-scroll-link"
        activeClass="active-scroll-link"
        delay={1000}>
        <img className="coop-logo" src={logo} height="150px" width="150px" />
      </Link>
      <Nav />
      <BackgroundArt />
      <NarrativeCard />
    </Element>
  );
};

export default MainPage;
