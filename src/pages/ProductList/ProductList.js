import React,{useState,useEffect} from "react";
import "./ProductList.scss";

const ProductList = () => {
  
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch('/data/productListData.json', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  },[]);

  


  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
       {productList.map(list=>(
        <div key={list.id} className="listBox">
          <img className="listImage" src="/images/cat.jpeg" alt="cat" />
          <span className="listTitle">{list.name}</span>
          <span>나이 : {list.age}살</span>
          <span>성별 : {list.sex}</span>
          <span>거주지 : {list.residence}</span>
        </div>)) }
      </div>
    </div>
  );
};

export default ProductList;
