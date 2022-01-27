import React from "react";
import "./SelectLang.css";

const SelectLang = ({ language, handleSelectedLang }) => {
  return (
    <div className="selectLng">
      <i className="fas fa-globe"></i>
      <select
        className="selectLng__select"
        value={language}
        onChange={handleSelectedLang}
      >
        <option value="en">EN</option>
        <option value="fr">FR</option>
      </select>
    </div>
  );
};

export default SelectLang;
