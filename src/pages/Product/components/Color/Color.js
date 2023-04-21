import React from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = (props) => {
  return (
    <div className="color">
      <span className="colorText">
        색상 :{/* <div className="selected" style={{ background: color }} /> */}
        {/* <div className={"selected " + color} /> */}
        <div className={`selected ${props.color}`} />
        {props.color}
      </span>
      <div className="colorHandler">
        <ColorButton setColor={props.setColor} color="white" />
        <ColorButton setColor={props.setColor} color="red" />
        <ColorButton setColor={props.setColor} color="yellow" />
      </div>
    </div>
  );
};

export default Color;
