import React from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = (props) => {
  const { color, setColor } = props;

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${color}`} />
        {color}
      </span>
      <div className="color-button-box">
        <ColorButton color={"white"} setColor={setColor} />
        <ColorButton color={"red"} setColor={setColor} />
        <ColorButton color={"yellow"} setColor={setColor} />
      </div>
    </div>
  );
};

export default Color;
