import React,{ useEffect, useState } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch('/data/catList.json', {
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
      setData(data);
    })
  },[])

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {data && data.map((list, key) => (
          <div key={key} className="listBox">
            <img className="listImage" src="/images/cat.jpeg" alt="cat" />
            <span className="listTitle">{list.title}</span>
            <span>나이 : {list.age}살</span>
            <span>성별 : {list.gender}</span>
            <span>거주지 : {list.address}</span>
          </div>  )
        )}
      </div>
    </div>
  );
};

export default ProductList;
