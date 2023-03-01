import React, { useState, useEffect } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("/data/ProductListData.json", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setProductList(data));
  }, []);

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {productList.map((product) => {
          return (
            <div key={product.id} className="listBox">
              <img className="listImage" src={product.img} alt="cat" />
              <span className="listTitle">고양이</span>
              <span>나이 : {product.age}살</span>
              <span>성별 : {product.gender}</span>
              <span>거주지 : {product.address}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
