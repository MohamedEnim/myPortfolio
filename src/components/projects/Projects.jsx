import React from "react";
import ProjectItem from "./projectItem/ProjectItem";
import "./Projects.css";

const Projects = ({ data, selected }) => {
  return (
    <div
      className={`projects section ${
        selected === "projects" ? "section--active" : " "
      } `}
      id="projects"
    >
      <div className="container">
        <div className="row">
          <div className="section__title padd-15">
            <h2>{data?.portfolioTitle}</h2>
          </div>
        </div>
        <div className="row">
          <div className="projects-heading padd-15">
            <h2>{data?.portfolioMessage} :</h2>
          </div>
        </div>

        <div className="row">
          <div className="projects__itemWrapper padd-15">
            {data?.projects.map((item, index) => (
              <ProjectItem
                key={index}
                title={item.title}
                imageUrl={item.imageUrl}
                source={item.url}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
