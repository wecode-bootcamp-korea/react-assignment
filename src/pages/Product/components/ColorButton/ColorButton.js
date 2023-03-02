import React from "react";
import "./ColorButton.scss";

const ColorButton = (props) => {
  const {
    color,
    setColor,
    productImg,
    setProductImg,
    price,
    setPrice,
    title,
    setTitle,
  } = props; // props.setColor()
  return (
    <button
      className={`colorButton ${color}`}
      onClick={() => {
        setColor(color);
        setPrice(price);
        setProductImg(productImg);
        setTitle(title);
      }}
    />
  );
};

export default ColorButton;
