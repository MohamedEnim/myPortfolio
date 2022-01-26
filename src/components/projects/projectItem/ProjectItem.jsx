import React from "react";
import "./ProjectItem.css";

const ProjectItem = ({ title, source, imageUrl, description }) => {
  return (
    <div className="portfolio-item padd-15">
      <div className="portfolio-item-inner">
        <div className="portfolio-item-thumbnail">
          <img src={imageUrl} alt="" />
          <div className="mask"></div>
        </div>
        <h3 className="portfolio-item-title">{title}</h3>
        <p className="portfolio__description">{description}</p>
        <span className="more-button">
          <a href={source} target="_blank" rel="noreferrer">
            Source code
          </a>
        </span>
      </div>
    </div>
  );
};

export default ProjectItem;
