import React, { useState } from "react";
import Color from "./components/Color/Color";
import ColorButton from "./components/ColorButton/ColorButton";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
import "./Product.scss";

const Product = () => {
  const [color, setColor] = useState("white");
  const [number, setNumber] = useState(1);
  const [isHidden, setIsHidden] = useState(true);

  const price = 300;
  const totalPrice = price * number;

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img src={`/images/golf-ball-${color}.jpg`} alt={`golf-ball`} />
          <ColorButton color={color} setColor={setColor} />
        </div>
        <div className="productDetailInfo">
          <span className="title">골프공</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price.toLocaleString()} 원</span>
          <Color color={color} setColor={setColor} />
          <div className="quantity">
            <span> 수량 : </span>
            <Count number={number} setNumber={setNumber} />
          </div>
          <span>최종 가격 : {totalPrice.toLocaleString()} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        <Review isHidden={isHidden} setIsHidden={setIsHidden} />
      </div>
    </div>
  );
};

export default Product;
