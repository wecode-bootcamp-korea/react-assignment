import React, { useEffect, useState } from "react";
import ColorButton from "./components/ColorButton/ColorButton";
import Color from "./components/Color/Color";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
import "./Product.scss";
import ProductList from "../ProductList/ProductList";

const Product = () => {
  const [color, setColor] = useState("white");
  const [count, setCount] = useState(1);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [product, setProduct] = useState([]);
  const [price, setPrice] = useState(400);

  const totalPrice = price * count;
  // const totalPrice = price * count;
  // const counts = count * product.count;

  useEffect(() => {
    fetch("/data/productInfo.json", { method: "GET" })
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img src={`/images/golf-ball-${color}.jpg`} alt={`golf-ball`} />
          <ColorButton color={color} setColor={setColor} />
        </div>
        <div className="productDetailInfo">
          <span className="title">{product.title}</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price} 원</span>
          <Color color={color} setColor={setColor} />
          <div className="quantity">
            <span> 수량 : </span>
            <Count count={count} setCount={setCount} />
          </div>
          <span>최종 가격 : {totalPrice.toLocaleString()} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        <Review
          title={product.title}
          evaluation={product.evaluation}
          review={product.review}
          isReviewOpen={isReviewOpen}
          setIsReviewOpen={setIsReviewOpen}
        />
        {/* <Review isReviewOpen={isReviewOpen} setIsReviewOpen={setIsReviewOpen} /> */}
      </div>
    </div>
  );
};

export default Product;
