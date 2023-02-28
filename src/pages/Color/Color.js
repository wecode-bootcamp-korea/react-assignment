import React, { useState } from "react";
import "./Color.scss";

const Color = () => {
  const [color, setColor] = useState("White");

  return (
    <div className="color">
      <b>
        색상 : <div className={`colorResult color${color}`} /> {color}
      </b>
      <div className="selectColor">
        <div
          onClick={() => setColor("White")}
          className={`colorBox colorWhite`}
        />
        <div onClick={() => setColor("Red")} className={`colorBox colorRed`} />
        <div
          onClick={() => setColor("Yellow")}
          className={`colorBox colorYellow`}
        />
      </div>
    </div>
  );
};

export default Color;
