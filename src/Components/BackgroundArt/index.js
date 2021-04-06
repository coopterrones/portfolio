import React from "react";
import "./BackgroundArt.scss";
import logo from "../../Assets/cooplogobg.png";

const BackgroundArt = () => {
  return (
    <div className="background-container">
      <img src={logo} height="500" />
    </div>
  );
};

export default BackgroundArt;
