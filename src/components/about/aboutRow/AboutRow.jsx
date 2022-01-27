import React from "react";
import "./AboutRow.css";

const AboutRow = ({ title, content }) => {
  return (
    <tr className="info__itemRow  padd-15">
      <td> {title}:</td>
      <td>
        <span>{content}</span>
      </td>
    </tr>
  );
};

export default AboutRow;
