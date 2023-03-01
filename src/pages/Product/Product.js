import React, { useEffect, useState } from "react";
import Color from "./components/Color/Color";
import ColorButton from "./components/ColorButton/ColorButton";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
import "./Product.scss";

const Product = () => {
  const [color, setColor] = useState("white");
  const [number, setNumber] = useState(1);
  const [isHidden, setIsHidden] = useState(true);
  const [productData, setProductData] = useState([]);
  // const [price, setPrice] = useState(300);
  const price = 300;
  const totalPrice = price * number;

  useEffect(() => {
    fetch("http://localhost:3000/data/productData.json", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductData(data);
      });
  }, []);

  // console.log(productData);
  // useEffect(() => {
  //   setPrice(productData.price);
  // }, [productData]);

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          {productData.map((info, idx) => {
            return productData[idx].color === color ? (
              <img key={info.id} src={`${info.image}`} alt={`golf-ball`} />
            ) : null;
          })}
          <ColorButton color={color} setColor={setColor} />
        </div>
        <div className="productDetailInfo">
          {/* {productData[ ] */}
          {productData.map((info, idx) => {
            return productData[idx].color === color ? (
              <span key={info.id} className="title">
                {info.name}
              </span>
            ) : null;
          })}
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price}원</span>
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
        {productData &&
          productData.map((info, idx) => {
            return productData[idx].color === color ? (
              <Review
                info={info}
                isHidden={isHidden}
                setIsHidden={setIsHidden}
              />
            ) : null;
          })}
      </div>
    </div>
  );
};

export default Product;
