import React, { useEffect, useState } from 'react';
import './Product.scss';
import ColorButton from './components/ColorButton/ColorButton';
import Color from './components/Color/Color';
import Count from './components/Count/Count';
import Review from './components/Review/Review';
import './Product.scss';

const Product = () => {
  const [color, setColor] = useState('white');
  const [counter, setCount] = useState(1);
  const [review, setReview] = useState(false);
  const [productData, setProductData] = useState([]);
  const price = 300;
  const totalPrice = price * counter;
  if (counter <= 0) {
    setCount(1);
  }

  useEffect(() => {
    fetch('/data/productData.json', { method: 'GET' })
      .then(response => response.json())
      .then(data => setProductData(data));
  }, []);

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          {productData.map((info, index) => {
            return productData[index].color === color ? (
              <img
                key={info.id}
                src={`${info.image}`}
                alt={`golf-ball-${color}`}
              />
            ) : null;
          })}

          <ColorButton color={color} setColor={setColor} />
        </div>
        <div className="productDetailInfo">
          <span className="title">{productData.title}</span>
          {productData.map((info, index) => {
            return productData[index].color === color ? (
              <span key={info.id} className="title">
                {info.title}
              </span>
            ) : null;
          })}
          <span>비거리를 비약적으로 늘려줍니다</span>
          {productData.map((info, index) => {
            return productData[index].color === color ? (
              <span key={info.id} className="price">
                가격: {info.price} 원
              </span>
            ) : null;
          })}

          <Color setColor={setColor} color={color} />
          <div className="quantity">
            <span> 수량 : </span>
            <Count counter={counter} setCount={setCount} />
          </div>
          <span>최종 가격 : {counter * price} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        <Review review={review} setReview={setReview} />
      </div>
    </div>
  );
};

export default Product;
