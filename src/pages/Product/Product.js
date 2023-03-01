import React, { useEffect, useState } from "react";
import Color from "./components/Color/Color";
import ColorButton from "./components/ColorButton/ColorButton";
import Review from "./components/Review/Review";
import Count from "./components/Count/Count";
import "./Product.scss";

const Product = () => {
  const [color, setColor] = useState("white");
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [number, setNumber] = useState(1);
  const [fetchData, setFetchData] = useState();
  const [prductImg, setProductImg] = useState("/images/golf-ball-white.jpg");
  const [title, setTitle] = useState("골프공(W)");
  const [price, setPrice] = useState(300);

  const totalPrice = price * number;

  useEffect(() => {
    fetch("/data/ProductData.json", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setFetchData(data));
  }, []);

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img src={`${prductImg}`} alt="golf-ball" />
          <ColorButton color={color} setColor={setColor} />
        </div>
        <div className="productDetailInfo">
          <span className="title">{title}</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price.toLocaleString()} 원</span>
          <Color
            color={color}
            setColor={setColor}
            fetchData={fetchData}
            setTitle={setTitle}
            setPrice={setPrice}
            setProductImg={setProductImg}
          />
          <div className="quantity">
            <span> 수량 : </span>
            <Count
              number={number}
              setNumber={setNumber}
              fetchData={fetchData}
            />
          </div>
          <span>최종 가격 : {totalPrice.toLocaleString()} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        {fetchData &&
          fetchData.map((product) => {
            if (product.color === color) {
              return (
                <Review
                  key={product.id}
                  comment={product.comment}
                  isReviewOpen={isReviewOpen}
                  setIsReviewOpen={setIsReviewOpen}
                />
              );
            }
          })}
      </div>
    </div>
  );
};

export default Product;
