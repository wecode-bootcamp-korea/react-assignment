import React, { useState,useEffect } from "react";
import Color from "./components/Color/Color";
import ColorButton from "./components/ColorButton/ColorButton";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
import "./Product.scss";

const Product = () => {
  const [color, setColor] = useState("white");
  const [number, setNumber] = useState (1);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('/data/product.json', {
    method: 'GET'
  })
    .then(res => res.json())
    .then(data => {
      setProduct(data);
    });
  },[])

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          {product.map((product, key) => 
            product.color === color &&(
              <img
              key={key}
              src={`${product.product_image}`} // color 이름에 따라 다른 이미지 경로 넣기
              alt={`golf_ball`}
            />)
            )
          }
          <ColorButton color={color} setColor={setColor} />
        </div>
        <div className="productDetailInfo">
        {product.map((product, key) => 
            product.color === color &&(
          <span key={key} className="title">{product.title}</span>))}
          <span>비거리를 비약적으로 늘려줍니다</span>
          {product.map((product, key) => 
            product.color === color &&(
              <span key={key}>가격 : {product.price}원</span>))}
          <Color color={color} setColor={setColor}/>
          <div className="quantity">
            <span> 수량 : </span>
            <Count number={number} setNumber={setNumber}/>
          </div>
          {product.map((product, key) => 
            product.color === color &&(
          <span key={key}>최종 가격 : {product.price * number.toLocaleString()} 원</span>))}
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        <Review />
      </div>
    </div>
  );
};

export default Product;
