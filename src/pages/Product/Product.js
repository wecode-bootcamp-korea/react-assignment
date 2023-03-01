import React, { useEffect, useState } from "react";

import Color from "./components/Color/Color";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
import ColorButton from "./components/ColorButton/ColorButton";

import "./Product.scss";

const Product = () => {
  const [color, setColor] = useState("white");
  const [productData, setProductData] = useState([]);
  const [num, setNum] = useState(1);

  console.log(productData[0]);
  const price = 300;

  useEffect(() => {
    fetch("/data/productData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
      });
  }, []);

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          {productData.map((info, idx) => {
            return productData[idx].color === color ? (
              <img
                key={info.id}
                src={`${info.image_url}`}
                alt={`golf-ball-${color}`}
              />
            ) : null;
          })}
          <ColorButton color={color} setColor={setColor} />
        </div>
        <div className="productDetailInfo">
          {productData.map((info, idx) => {
            return productData[idx].color === color ? (
              <span key={info.id} className="title">
                {info.title}
              </span>
            ) : null;
          })}
          <span>비거리를 비약적으로 늘려줍니다</span>
          {productData.map((info, idx) => {
            return productData[idx].color === color ? (
              <span key={info.id} className="price">
                {info.price} 원
              </span>
            ) : null;
          })}
          <Color color={color} setColor={setColor} />
          <div className="quantity">
            <span> 수량 : </span>
            <Count num={num} setNum={setNum} />
          </div>
          <span>최종 가격 : {num * price} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        <Review productData={productData} color={color} />
      </div>
    </div>
  );
};

export default Product;
