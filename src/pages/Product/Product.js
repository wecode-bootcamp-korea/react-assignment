import React, {useState, useEffect} from "react";
import "./Product.scss";
import ColorButton from "./components/ColorButton/ColorButton";
import Color from "./components/Color/Color";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
const Product = () => {
  const [ProductList, setProductList] = useState([]);
  const [review, setReview] = useState(false);
  const [color, setColor] = useState("white");
  const [count, setCount] = useState(1);


useEffect(( ) => {
  fetch('/data/mockData.json',{
    method : 'GET'
  })
  .then(res => res.json())
  .then(data => {
    setProductList(data);
  });
},[]);


  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          {ProductList.map((info, idx) => {
            return ProductList[idx].color === color ? (
            <img
              key ={info.id}
              src={`${info.img}`}
              alt={`golf-ball`}
            />
            ) : null;
          })}
        <ColorButton color={color} setColor={setColor}/>
        </div>
        <div className="productDetailInfo">
        {ProductList.map((info, idx) => {
          return ProductList[idx].color === color ? (
          <span className="title">{info.name}</span>
          ) : null ;
        })}
          <span>비거리를 비약적으로 늘려줍니다</span>
          {ProductList.map((info, idx) => {
            return ProductList[idx].color === color ? (
            <span>가격 : {info.price.toLocaleString()} 원</span>
            ) : null ;
          })}
          <Color color={color} setColor={setColor}/>
          <div className="quantity">
            <span> 수량 : </span>
            <Count count={count} setCount={setCount} />
          </div>
          {ProductList.map((info, idx) => {
            return ProductList[idx].color === color ? (
            <span>최종 가격 : {count * info.price.toLocaleString()} 원</span>
            ) : null ;
            })}
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        <Review  review={review} setReview={setReview} />
      </div>
    </div>
  );
};

export default Product;
