import React, { useEffect, useState } from 'react';
import './ProductList.scss';

const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/catData.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {data.map((info) => {
          return (
            <div key={info.id} className="listBox">
              <img className="listImage" src="/images/cat.jpeg" alt="cat" />
              <span className="listTitle">{info.title}</span>
              <span>나이 : {info.age}살</span>
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
