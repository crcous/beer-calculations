import React, { useState } from "react";
import "./Abv.css";

// (OG-FG) x 131.25 = ABV%

function Abv() {
  const [og, setOg] = useState("");
  const [fg, setfg] = useState("");

  const [updatedOg, setUpdatedOg] = useState(og);
  const [updatedFg, setUpdatedFg] = useState(fg);

  const changeOg = (event) => {
    setOg(event.target.value);
  };

  const changeFg = (event) => {
    setfg(event.target.value);
  };

  const alc = () => {
    let sub = updatedOg - updatedFg;

    let calc = sub * 131.25;
    console.log(calc);

    let roundCalc = Math.round(calc * 100) / 100;

    return roundCalc;
  };

  const handleClick = () => {
    setUpdatedOg(og);
    setUpdatedFg(fg);
  };

  return (
    <div>
      <form className="abv-form">
        <div>
          <input
            className="O-Gravity"
            placeholder="Original Gravity (OG)"
            value={og}
            onChange={(e) => changeOg(e)}
          ></input>
        </div>

        <div>
          <input
            className="F-Gravity"
            placeholder="Finished Gravity (FG)"
            value={fg}
            onChange={(e) => changeFg(e)}
          ></input>
        </div>
      </form>

      <div>
        <button className="button" onClick={handleClick}>
          Calculate
        </button>
      </div>

      <div className="alc-declare">
        The alcohol content for your beer is: {alc()}%
      </div>
    </div>
  );
}

export default Abv;
