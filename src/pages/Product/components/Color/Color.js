import React, { useState } from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";
import Nav from './../../../components/Nav/Nav';

const Color = () => {
  const [color, setColor] = useState("white");
    
  return (
    <div className="color">      
    <Nav />
      <span className="colorText">
        색상 :
        <div className={`selected ${color}`}/>
        {color}
      </span>
      <div className="colorHandler">
        <ColorButton color="white" setColor={setColor} />
        <ColorButton color="red" setColor={setColor} />
        <ColorButton color="yellow" setColor={setColor} />
      </div>
    </div>
  );
};

export default Color;