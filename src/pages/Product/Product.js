import React, { useState, useEffect } from "react";
import Color from "./components/Color/Color";
import ColorButton from "./components/ColorButton/ColorButton";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
import "./Product.scss";

const Product = () => {
  const [productImg, setProductImg] = useState("/images/golf-ball-white.jpg");
  const [colorChip, setColorChip] = useState("colorButton white");
  const [colorName, setColorName] = useState("white");
  //const price = 300;
  const [totalPrice, setTotalPrice] = useState(300);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("/data/productList.json")
      .then((response) => response.json())
      .then((result) => setProductList(result));
  }, []);

  return (
    <div>
      {productList.map((data) => {
        return (
          <div className="product" key={data.id}>
            <div className="productDetail">
              <div className="productDetailImg">
                <img
                  src={`${data.img}${colorName}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
                  alt="골프공"
                />
                <ColorButton className={colorChip} />
              </div>
              <div className="productDetailInfo">
                <span className="title">{data.title}</span>
                <span>비거리를 비약적으로 늘려줍니다</span>
                <span>가격 : {data.price.toLocaleString()} 원</span>
                <Color
                  setProductImg={setProductImg}
                  setColorChip={setColorChip}
                  setColorName={setColorName}
                />
                <div className="quantity">
                  <span> 수량 : </span>
                  <Count setTotalPrice={setTotalPrice} />
                </div>
                <span>최종 가격 : {totalPrice.toLocaleString()} 원</span>
                <button className="buyBtn">구매하기</button>
              </div>
            </div>
            <div className="reviewList">
              <div className="reviewListHeader">
                <span>상품평</span>
              </div>
              <Review review={data.review} />
            </div>
          </div>
        );
      })}

      {/* <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={productImg} // color 이름에 따라 다른 이미지 경로 넣기
            alt={productImg}
          />
          <ColorButton className={colorChip} />
        </div>
        <div className="productDetailInfo">
          <span className="title">골프공</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price.toLocaleString()} 원</span>
          <Color setProductImg={setProductImg} setColorChip={setColorChip} />
          <div className="quantity">
            <span> 수량 : </span>
            <Count setTotalPrice={setTotalPrice} />
          </div>
          <span>최종 가격 : {totalPrice.toLocaleString()} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        <Review />
      </div> */}
    </div>
  );
};

export default Product;
