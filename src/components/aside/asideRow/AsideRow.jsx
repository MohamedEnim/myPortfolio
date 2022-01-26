import React from "react";
import PropTypes from "prop-types";
import "./AsideRow.css";

const AsideRow = ({ title, icon: Icon, id, selected, onSelected }) => {
  if (id) {
    return (
      <li onClick={() => onSelected(id)} className="asideRow">
        <a
          href={`#${id}`}
          className={` ${selected === id ? "asideRow--active" : ""}`}
        >
          <Icon />
          <span> {title}</span>
        </a>
      </li>
    );
  }
};

AsideRow.propTypes = {
  Icon: PropTypes.element,
};

export default AsideRow;
