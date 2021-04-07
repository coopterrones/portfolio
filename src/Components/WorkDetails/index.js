import React from "react";
import Nav from "../Nav";
import SocialNav from "../SocialNav";
import FooterNav from "../FooterNav";
import "./WorkDetails.scss";

const WorkDetails = () => {
  return (
    <section className="work-details-wrapper">
      <Nav />
      <div className="work-details-container"></div>
      <SocialNav></SocialNav>
      <FooterNav></FooterNav>
    </section>
  );
};

export default WorkDetails;
