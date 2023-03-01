import React from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = (props) => {
  const { color, setColor, fetchData, setTitle, setPrice, setProductImg } =
    props;

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${color}`} />
        {color}
      </span>
      <div className="colorHandler">
        {fetchData &&
          fetchData.map((product) => {
            return (
              <ColorButton
                key={product.id}
                color={product.color}
                price={product.price}
                title={product.title}
                productImg={product.productImg}
                setColor={setColor}
                setTitle={setTitle}
                setPrice={setPrice}
                setProductImg={setProductImg}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Color;
