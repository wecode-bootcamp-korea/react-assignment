import React, { useEffect, useState } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [productList, setProductList] = useState();

  useEffect(() => {
    fetch("/data/productList.json", { method: "GET" })
      .then((response) => response.json())
      .then((data) => setProductList(data));
  }, []);

  // console.log(productList);

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {productList &&
          productList.map((info) => {
            return (
              <div className="listBox" key={info.id}>
                <img className="listImage" src={`${info.img}`} alt="cat" />
                <span className="listTitle">{info.name}</span>
                <span>나이 : {info.age}</span>
                <span>성별 : {info.gender}</span>
                <span>거주지 : {info.address}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;
