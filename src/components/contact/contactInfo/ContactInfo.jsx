import React from "react";
import "./ContactInfo.css";

const ContactInfo = ({ title, content, icon }) => {
  return (
    <div className="contact__infoItem ">
      <div className="contact__icon">
        <i className={icon}></i>
      </div>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
};

export default ContactInfo;
