import React, { useState, useEffect } from 'react';
import './ProductList.scss';

const ProductList = () => {
  const [mockDataCats, setMockDataCats] = useState([]);

  useEffect(() => {
    fetch('/data/mockDataCats.json', { method: 'GET' })
      .then(response => response.json())
      .then(data => setMockDataCats(data));
  }, []);

  return (
    <div className="catBoxList">
      <h2>고양이 리스트</h2>
      <ul>
        {mockDataCats.map(info => {
          return (
            // eslint-disable-next-line react/jsx-key
            <list className="boxList">
              <img src={info.image} alt="고양이사진" />
              <span className="catName">{info.title}</span>
              <span>나이: {info.age}</span>
              <span>성별: {info.gender}</span>
              <span>거주지: {info.home}</span>
            </list>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
