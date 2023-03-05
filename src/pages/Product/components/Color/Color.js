import React from "react";
import "./Color.scss";
import ColorButton from "../ColorButton/ColorButton";

const Color = (props) => {
  const { color, setColor } = props;
  const colorName = color;

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${color}`} />
        {colorName}
      </span>
      <div className="colorHandler">
        <ColorButton setColor={setColor} />
      </div>
    </div>
  );
};

export default Color;
