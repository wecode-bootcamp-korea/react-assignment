import React, {useEffect} from "react";
const Cat = (props) => {
  const {name, setCat, cat} =props;
  return (
            <div className="listBox">
            <img className="listImage" src="/images/cat.jpeg" alt="cat" />
            <span className="listTitle">{name}</span>
            <span></span>
            <span>성별 : male</span>
            <span>거주지 : 춘천</span>
            </div>
  );
};

export default Cat;