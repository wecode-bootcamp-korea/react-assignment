import React, { useEffect, useState } from "react";
import "./Product.scss";
import Color from "./components/Color/Color";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
import ColorButton from "./components/ColorButton/ColorButton";

const Product = () => {
  const [color, setColor] = useState("white");
  const [count, setCount] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [fetchData, setFetchData] = useState();
  const [price, setPrice] = useState(0);
  const [imgUrl, setImgUrl] = useState("/images/golf-ball-white.jpg");
  const [title, setTitle] = useState("골프공(흰)");
  const [review, setReview] = useState(
    "주문한지 하루만에 배송이 도착해서 너무 좋았습니다.  <br />  다음에도 필요하면 또 여기서 시킬 것 같아요.(화이트)"
  );

  useEffect(() => {
    fetch("/data/mockupData.json", { method: "GET" })
      .then((response) => response.json())
      .then((data) => setFetchData(data));
  }, []);

  const totalPrice = price;

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`${imgUrl}`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          />
          <ColorButton color={color} setColor={setColor} />
        </div>
        <div className="productDetailInfo">
          <span className="title">{title}</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price.toLocaleString()} 원</span>
          <Color
            fetchData={fetchData}
            color={color}
            setColor={setColor}
            setPrice={setPrice}
            setImgUrl={setImgUrl}
            setTitle={setTitle}
          />
          <div className="quantity">
            <span> 수량 : </span>
            <Count fetchData={fetchData} count={count} setCount={setCount} />
          </div>
          <span>최종 가격 : {totalPrice * count.toLocaleString()} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        {fetchData &&
          fetchData.map(
            (product, key) =>
              product.color === color && (
                <Review
                  key={key}
                  review={product.contents}
                  isVisible={isVisible}
                  setIsVisible={setIsVisible}
                />
              )
          )}
      </div>
    </div>
  );
};

export default Product;
