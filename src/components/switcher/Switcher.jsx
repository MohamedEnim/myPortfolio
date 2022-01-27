import React from "react";
import "./Switcher.css";
import IconButton from "@mui/material/IconButton";

const Switcher = ({
  switcherStatus,
  modeToggle,
  selectLight,
  setActiveStyle,
  switcherToggle,
  toggleMenu,
}) => {
  return (
    <div
      className={`switcher ${switcherStatus ? "switcher--open" : ""}
     ${toggleMenu ? "switcher--hide" : " "}`}
    >
      <div className="switcher__styleSitcherToggler switcher__icon">
        <IconButton onClick={switcherToggle}>
          <i className="fas fa-cog fa-spin"></i>
        </IconButton>
      </div>
      <div className="switcher__day-night switcher__icon">
        <IconButton onClick={modeToggle}>
          {selectLight ? (
            <i className="fas fa-moon"></i>
          ) : (
            <i className="fas fa-sun"></i>
          )}
        </IconButton>
      </div>
      <h4>Theme Colors</h4>
      <div className="switcher__colors">
        <IconButton onClick={() => setActiveStyle("color-1")}>
          <span className="switcher__color-1"></span>
        </IconButton>
        <IconButton onClick={() => setActiveStyle("color-2")}>
          <span className="switcher__color-2"></span>
        </IconButton>
        <IconButton onClick={() => setActiveStyle("color-3")}>
          <span className="switcher__color-3"></span>
        </IconButton>
        <IconButton onClick={() => setActiveStyle("color-4")}>
          <span className="switcher__color-4"></span>
        </IconButton>
        <IconButton onClick={() => setActiveStyle("color-5")}>
          <span className="switcher__color-5"></span>
        </IconButton>
      </div>
    </div>
  );
};

export default Switcher;
