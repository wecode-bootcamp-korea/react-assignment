import React from "react";
import "./ColorButton.scss";

const ColorButton = (props) => {
  const { color, setColor } = props;
  return (
    <button
      className={`colorButton ${color}`}
      onClick={() => {
        setColor(color);
      }}
    />
  );
};

export default ColorButton;
