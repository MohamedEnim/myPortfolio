import React from "react";
import "./ResumeBox.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const ResumeBox = ({ startDate, endDate, title, description, education }) => {
  return (
    <div className="timeline-item">
      {education ? (
        <i className="fas fa-graduation-cap resume__icon"></i>
      ) : (
        <i className="fas fa-briefcase resume__icon"></i>
      )}
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
