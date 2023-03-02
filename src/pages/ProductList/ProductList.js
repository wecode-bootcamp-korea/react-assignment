import React, { useState, useEffect } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("/data/productListData.json", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setProductList(data);
      });
  }, []);
  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {productList.map((list) => (
          <div key={list.id} className="catList">
            <img className="catImage" src="/images/cat.jpeg" alt="고양이사진" />
            <span className="catTitle">이름 : {list.name}</span>
            <span className="catAge">나이 : {list.age}</span>
            <span className="catGender">성별 : {list.gender}</span>
            <span className="catAddress">거주지 : {list.address}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
