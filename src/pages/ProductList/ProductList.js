import React, { useState, useEffect } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [productListData, setProductListData] = useState([]);

  useEffect(() => {
    fetch("/data/productListData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setProductListData(data);
      });
  });

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {productListData.map((productList) => {
          return (
            <list className="listBox">
              <img
                className="listImage"
                src={`${productList.image_url}`}
                alt="cat"
              />
              <span className="listTitle">{productList.name}</span>
              <span>나이 : {productList.age}</span>
              <span>성별 : {productList.gender}</span>
              <span>거주지 : {productList.address}</span>
            </list>
          );
        })}
      </div>

      {/* <div className="listContainer">
        <div className="listBox">
          <img className="listImage" src="/images/cat.jpeg" alt="cat" />
          <span className="listTitle">고양이</span>
          <span>나이 : 4살</span>
          <span>성별 : male</span>
          <span>거주지 : 춘천</span>
        </div>
        <div className="listBox">
          <img className="listImage" src="/images/cat.jpeg" alt="cat" />
          <span className="listTitle">고냥이</span>
          <span>나이 : 14살</span>
          <span>성별 : female</span>
          <span>거주지 : 양평</span>
        </div>
        <div className="listBox">
          <img className="listImage" src="/images/cat.jpeg" alt="cat" />
          <span className="listTitle">고용이</span>
          <span>나이 : 7살</span>
          <span>성별 : male</span>
          <span>거주지 : 천안</span>
        </div>
        <div className="listBox">
          <img className="listImage" src="/images/cat.jpeg" alt="cat" />
          <span className="listTitle">모울이</span>
          <span>나이 : 1살</span>
          <span>성별 : female</span>
          <span>거주지 : 부산</span>
        </div>
        <div className="listBox">
          <img className="listImage" src="/images/cat.jpeg" alt="cat" />
          <span className="listTitle">곰율이</span>
          <span>나이 : 3살</span>
          <span>성별 : male</span>
          <span>거주지 : 노원</span>
        </div>
        <div className="listBox">
          <img className="listImage" src="/images/cat.jpeg" alt="cat" />
          <span className="listTitle">고울이</span>
          <span>나이 : 11살</span>
          <span>성별 : male</span>
          <span>거주지 : 평양</span>
        </div>
        <div className="listBox">
          <img className="listImage" src="/images/cat.jpeg" alt="cat" />
          <span className="listTitle">고물이</span>
          <span>나이 : 9살</span>
          <span>성별 : male</span>
          <span>거주지 : 전주</span>
        </div>
        <div className="listBox">
          <img className="listImage" src="/images/cat.jpeg" alt="cat" />
          <span className="listTitle">기양이</span>
          <span>나이 : 2살</span>
          <span>성별 : male</span>
          <span>거주지 : 충청</span>
        </div>
      </div> */}
    </div>
  );
};

export default ProductList;
