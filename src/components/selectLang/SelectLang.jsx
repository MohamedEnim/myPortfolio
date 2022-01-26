import React from "react";
import "./SelectLang.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LanguageIcon from "@mui/icons-material/Language";

const SelectLang = ({ language, handleSelectedLang }) => {
  return (
    <div className="selectLng">
      <FormControl fullWidth className="selectLng__form">
        <LanguageIcon />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          label="Age"
          onChange={handleSelectedLang}
        >
          <MenuItem value="en"> EN</MenuItem>
          <MenuItem value="fr"> FR</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectLang;
