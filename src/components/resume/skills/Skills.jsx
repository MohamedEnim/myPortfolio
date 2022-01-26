import React from "react";
import "./Skills.css";

const Skills = ({ skillName, skillPercent }) => {
  return (
    <div className="skill-item padd-15">
      <h5>{skillName}</h5>
      <div className="progress">
        <div className="progress-in" style={{ width: `${skillPercent}` }}></div>
        <div className="skill-percent">{skillPercent}</div>
      </div>
    </div>
  );
};

export default Skills;
