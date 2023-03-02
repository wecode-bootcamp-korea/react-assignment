import React, {useState, useEffect} from "react";
import "./ProductList.scss";
import Cat from "./components/Cat/Cat";

const ProductList = () => {
  const [data, setData] = useState();

  useEffect(( ) => {
    fetch('/data/mockDataCat.json',{
      method : 'GET'
    })
    .then(res => res.json())
    .then(data => {
      setData(data);
    });
},[]);


  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
      {data &&
          data.map((animal, index) => (
            <div className="listBox" key={index}>
              <img className="listImage" src={`${animal.img}`} alt="cat" />
              <span className="listTitle">{animal.name}</span>
              <span>나이 : {animal.age}</span>
              <span>성별 : {animal.gender}</span>
              <span>거주지 : {animal.area}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
