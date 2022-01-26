import React from "react";
import "./Resume.css";
import ResumeBox from "./resumeBox/ResumeBox";
import Skills from "./skills/Skills";

const Resume = ({ data, selected }) => {
  return (
    <div
      className={`resume section ${
        selected === "resume" ? "section--active" : " "
      } `}
      id="resume"
    >
      <div className="container">
        <div className="row">
          <div className="resume__title padd-15">
            <h2>{data?.title}</h2>
          </div>
        </div>

        <div className="row">
          <div className="resume__education padd-15">
            <h3 className="title">{data?.education.educationTitle}</h3>

            <div className="row">
              <div className="timeline-box padd-15">
                <div className="timeline">
                  {data?.education.educationDetails.map((item, index) => (
                    <ResumeBox
                      key={index}
                      startDate={item.startDate}
                      endDate={item.endDate}
                      title={item.school}
                      description={item.description}
                      education
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="resume__experience padd-15">
            <h3 className="title">{data?.work.workTitle}</h3>

            <div className="row">
              <div className="timeline-box padd-15">
                <div className="timeline">
                  {data?.work.workDetails.map((item, index) => (
                    <ResumeBox
                      key={index}
                      startDate={item.startDate}
                      endDate={item.endDate}
                      title={item.title}
                      description={item.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="resume__skills padd-15">
            <h3 className="title">{data?.skills.skillsTitle}</h3>

            <div className="row">
              <div className="timeline-box padd-15">
                <div className="timeline">
                  {data?.skills.skillsDetails.map((item, index) => (
                    <Skills
                      key={index}
                      skillName={item.name}
                      skillPercent={item.level}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
