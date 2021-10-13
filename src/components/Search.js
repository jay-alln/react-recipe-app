import React, { useState } from "react";
import "./Search.css";

const Search = () => {
    const  [active, setactive] = useState(false);

    const togleActive = () => {
        active ? setactive(false) : setactive(true);

        console.log(active)
    }

  return (
    <div>
      <div id="search" className={active ? "" : "active"}>
        <div className="icon" onClick={togleActive}></div>
        <div className="input">
          <input type="text" placeholder="Search" id="mysearchs" />
        </div>
        <span id="clear" onClick={togleActive} className={active ? "active" : ""}></span>
      </div>
    </div>
  );
};

export default Search;
