import React from "react";
import Nav from "../Nav";
import SocialNav from "../SocialNav";
import FooterNav from "../FooterNav";
import "./Grid.scss";

const Grid = () => {
  return (
    <section className="grid-items-container">
      <Nav />
      <div className="grid-items-container"></div>
      <SocialNav></SocialNav>
      <FooterNav></FooterNav>
    </section>
  );
};

export default Grid;
