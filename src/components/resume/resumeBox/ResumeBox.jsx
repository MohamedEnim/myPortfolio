import React from "react";
import "./ResumeBox.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

const ResumeBox = ({ startDate, endDate, title, description, education }) => {
  return (
    <div className="timeline-item">
      { education ? <SchoolIcon className="resume__icon" />: <WorkIcon className="resume__icon" />}
      <h3 className="timeline-date">
        <CalendarTodayIcon />{" "}
        <span>
          {startDate} - {endDate}
        </span>
      </h3>
      <h4 className="timeline-title">{title}</h4>
      <p className="timeline-text">{description}</p>
    </div>
  );
};

export default ResumeBox;
