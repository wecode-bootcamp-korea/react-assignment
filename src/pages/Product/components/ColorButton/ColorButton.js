import React from "react";
import "./ColorButton.scss";

const ColorButton = (props) => {
    return(
        <div className="colorHandler">
          <button className="colorButton white" onClick={() => {props.setColor("white")}} />
          <button className="colorButton red" onClick={() => {props.setColor("red")}} />
          <button className="colorButton yellow" onClick={() => {props.setColor("yellow")}} />
          </div>
    );
};

export default ColorButton;