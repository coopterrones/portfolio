import React from "react";
import "./NarrativeCard.scss";
import narrativeCardBorder from "../../Assets/narrative-border.png";

const NarrativeCard = () => {
  return (
    <div className="narrative-card-wrapper">
      <p className="narrative-text">
        <div>YO! I'm Coop. Thanks for coming through.</div>
        <br />
        <div>
          I am a front-end dev who just graduted from the Turing School for
          Software and Design.
        </div>
        <br />
        <div>
          I work daily sharpening my skills working with React, JavaScript, and
          Cypress for TDD. I have a Media Design degree from the University of
          Colorado at Boulder and continously want to keep my hands on the
          project over at Canoe Club -- a brick and mortar / online culture hub
          for clothing.
        </div>
        <br />
        <div>Check out my resume here!</div>
      </p>
    </div>
  );
};

export default NarrativeCard;
