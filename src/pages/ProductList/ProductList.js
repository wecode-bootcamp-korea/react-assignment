import React, { useEffect, useState } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("/data/animalMockupData.json", { method: "GET" })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {data &&
          data.map((animal, index) => (
            <div className="listBox" key={index}>
              <img className="listImage" src={`${animal.image}`} alt="cat" />
              <span className="listTitle">{animal.title}</span>
              <span>나이 : {animal.age}</span>
              <span>성별 : {animal.gender}</span>
              <span>거주지 : {animal.home}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
