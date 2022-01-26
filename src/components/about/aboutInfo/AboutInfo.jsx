import React from "react";
import "./AboutInfo.css";

const AboutInfo = ({ description }) => {
  return (
    <div className="about__text padd-15">
      <p>{description}</p>
    </div>
  );
};

export default AboutInfo;
