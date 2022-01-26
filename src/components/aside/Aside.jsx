import React from "react";
import "./Aside.css";

import AsideRow from "./asideRow/AsideRow";
import { KeysToComponentMap } from "../../utils/mapTocomponent";

const Aside = ({ data, selectOption, selected, toggleMenu }) => {
  return (
    <div className={`aside ${toggleMenu ? "aside--open" : " "}`}>
      <div className="aside__logo" onClick={() => selectOption("home")}>
        <a href="#home">Portfolio</a>
      </div>
      <div className="aside__nav">
        <ul>
          {data?.row.map((item) => (
            <AsideRow
              key={item.title}
              title={item.title}
              icon={KeysToComponentMap[item.icon]}
              id={item.id}
              onSelected={selectOption}
              selected={selected}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Aside;
