import React, {useState} from "react";
import "./Product.scss";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
import Color from "./components/Color/Color";
import ColorButton from "./components/ColorButton/ColorButton";

const Product = () => {
  const[count, setCount] = useState(1);
  const[review, setreview] = useState(false);
  const[color, setColor] = useState("white");
  
  const price = 300 * count;
  const totalPrice = price;

  
  const minusCount = () => {
    if(count > 1){
    setCount(count-1);
    }
  }
  const plusCount = () => {
    setCount(count+1);
  }
  const resetCount = () => {
    setCount(1);
  }

  const togglereview = () => {
    setreview(review => !review);
  };

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`/images/golf-ball-${color}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          />
          <ColorButton color={color} setColor={setColor}/>
        </div>
        <div className="productDetailInfo">
          <span className="title">골프공</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price.toLocaleString()} 원</span>
          <Color color={color} setColor={setColor}/>
          <div className="quantity">
            <span> 수량 : </span>
            <Count count={count} setCount={setCount} minusCount={minusCount} plusCount={plusCount} resetCount={resetCount}/>
          </div>
          <span>최종 가격 : {totalPrice.toLocaleString()} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        <Review review={review} setreview={setreview} togglereview={togglereview} />
      </div>
    </div>
  );
};

export default Product;
