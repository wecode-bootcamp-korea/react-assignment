import React, { useEffect, useState } from 'react';
import './Product.scss';
import Color from './components/Color/Color';
import ColorButton from './components/ColorButton/ColorButton';
import Count from './components/Count/Count';
import Review from './components/Review/Review';

const Product = () => {
  const [product, setProduct] = useState([]);
  console.log(product);
  useEffect(() => {
    fetch('/data/productList.json')
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  console.log(product);
  const [color, setColor] = useState('white');
  const [state, setState] = useState(1);
  if (state < 1) {
    setState(1);
  }
  const [isOpen, setIsOpen] = useState(false);
  const price = product.price;
  const totalPrice = price * state;

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`${product.image}${color}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          />
          {/* ColorButton 컴포넌트 위치 */}
          <ColorButton color={color} setColor={setColor} />
        </div>
        <div className="productDetailInfo">
          <span className="title">{product.title}</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price} 원</span>
          {/* Color 컴포넌트 위치 */}
          <Color color={color} setColor={setColor} />
          <div className="quantity">
            <span> 수량 : </span>
            {/* Count 컴포넌트 위치 */}
            <Count stock={product.stock} state={state} setState={setState} />
          </div>
          <span>최종 가격 : {totalPrice.toLocaleString()} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        {/* Review 컴포넌트 위치 */}
        <Review
          titleReview={product.titleReview}
          segmentReview={product.segmentReview}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </div>
  );
};

export default Product;
