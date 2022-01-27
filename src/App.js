import React, { useEffect, useState } from "react";
import "./App.css";
import About from "./components/about/About";
import Aside from "./components/aside/Aside";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Switcher from "./components/switcher/Switcher";
import SelectLang from "./components/selectLang/SelectLang";

import useLocalStorage from "use-local-storage";
import { useTranslation } from "react-i18next";
import IconButton from "@mui/material/IconButton";

function App() {
  const { i18n } = useTranslation();
  const [resumeData, setResumeData] = useState({});
  const [selectLight, setSelectLight] = useState(true);
  const [switcherStatus, setSwitcherStatus] = useState(false);
  const [language, setLanguage] = useState(i18n.language);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [style, setStyle] = useLocalStorage("style", "color-1");
  const [selected, setSelected] = useState("home");

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const styleColor = window.matchMedia(
    "(prefers-color-scheme: color-1)"
  ).matches;

  console.log(styleColor);

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const selectOption = (id) => {
    setSelected(id);
    if (window.innerWidth < 1200) {
      setToggleMenu(false);
    }
  };

  window.addEventListener("scroll", () => {
    if (switcherStatus === true) {
      setSwitcherStatus(false);
    }
  });

  useEffect(() => {
    let url;
    if (i18n.language === "en") {
      url = "/local/resumeDataEN.json";
    } else {
      url = "/local/resumeDataFR.json";
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, [i18n.language]);

  const setActiveStyle = async (color) => {
    setStyle(color);
  };

  const switcherToggle = () => {
    setSwitcherStatus(!switcherStatus);
  };

  const modeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setSelectLight(!selectLight);
    setTheme(newTheme);
  };

  const handleSelectedLang = ({ target }) => {
    i18n.changeLanguage(language === "en" ? "fr" : "en");
    setLanguage(target.value);
  };

  const handelToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="app" data-theme={theme} style-color={style}>
      <Aside
        data={resumeData.aside}
        selectOption={selectOption}
        selected={selected}
        toggleMenu={toggleMenu}
      />
      <div className="app__container">
        <div
          className={`app__toggleMenu s-icontoggle ${
            toggleMenu ? "togglerMenu--open" : " "
          }`}
        >
          <IconButton onClick={handelToggleMenu}>
            {!toggleMenu ? (
              <i className="fas fa-bars"></i>
            ) : (
              <i className="fas fa-times m-l"></i>
            )}
          </IconButton>
        </div>
        <SelectLang
          language={language}
          handleSelectedLang={handleSelectedLang}
        />

        <Switcher
          switcherStatus={switcherStatus}
          modeToggle={modeToggle}
          selectLight={selectLight}
          setActiveStyle={setActiveStyle}
          switcherToggle={switcherToggle}
          toggleMenu={toggleMenu}
        />

        <Home
          data={resumeData.home}
          selected={selected}
          setSelected={setSelected}
        />
        <About
          data={resumeData.aboutMe}
          selected={selected}
          setSelected={setSelected}
        />
        <Resume data={resumeData.resume} selected={selected} />
        <Projects data={resumeData.portfolio} selected={selected} />
        <Contact data={resumeData.contact} selected={selected} />
      </div>
    </div>
  );
}

export default App;
