import React from "react";
import "./BackgroundArt.scss";
import logo from "../../Assets/logo.png";

const BackgroundArt = () => {
  return (
    <div className="background-container">
      <img src={logo} height="500px" width="500px" />
    </div>
  );
};

export default BackgroundArt;
