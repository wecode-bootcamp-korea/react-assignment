import React from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = (props) => {
  const {
    fetchData,
    color,
    setColor,
    setPrice,
    setImgUrl,
    setTitle,
    setReview,
  } = props;
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${color}`} />
        {color}
      </span>
      <div className="colorHandler">
        {fetchData &&
          fetchData.map((product, index) => (
            <ColorButton
              key={index}
              color={product.color}
              price={product.price}
              imgUrl={product.image}
              title={product.title}
              setColor={setColor}
              setPrice={setPrice}
              setImgUrl={setImgUrl}
              setTitle={setTitle}
            />
          ))}
      </div>
    </div>
  );
};

export default Color;
