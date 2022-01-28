import React from "react";
import "./SelectLang.css";

const SelectLang = ({ language, handleSelectedLang }) => {
  return (
    <div className="selectLng">
      {language === "fr" ? (
        <button
          className="selectLng__btn"
          onClick={() => handleSelectedLang("en")}
        >
          <i className="fas fa-globe"></i>
          <span>FR</span>
        </button>
      ) : (
        <button
          className="selectLng__btn"
          onClick={() => handleSelectedLang("fr")}
        >
          <i className="fas fa-globe"></i>
          <span>EN</span>
        </button>
      )}

      {/*  <select
       
        value={language}
        onChange={handleSelectedLang}
      >
        <option value="en">EN</option>
        <option value="fr">FR</option>
    </select>*/}
    </div>
  );
};

export default SelectLang;
