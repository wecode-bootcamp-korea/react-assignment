import React from "react";
import "./ColorButton.scss";

const ColorButton = (props) => {
  const {
    color,
    imgUrl,
    setColor,
    setPrice,
    price,
    setImgUrl,
    title,
    setTitle,
  } = props;
  return (
    <div className="colorButton">
      <button
        className={`color ${color}`}
        onClick={() => {
          setColor(color);
          setPrice(price);
          setImgUrl(imgUrl);
          setTitle(title);
        }}
      />
    </div>
  );
};

export default ColorButton;
