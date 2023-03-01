import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Introduce.scss";
import "../../style/variables.scss";
import "../../style/mixin.scss";

const Introduce = () => {
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate("/product");
  };

  const handleInput = () => {
    console.log("input 태그 동작");
  };

  return (
    <div className="introduce">
      <div className="introduce-box">
        <div className="introduce-wecode">&gt;wecode</div>
        <div className="introduce-detail">
          <h2>장지아</h2>
          <h2>43기</h2>
          <div className="input-box">
            <input onChange={handleInput} />
            <button onClick={goToProduct}>클릭</button>
          </div>
          <Link to="/product">product 페이지로 이동</Link>
        </div>
      </div>
      <div className="colorList">
        {COLOR_LIST.map((info) => (
          <div key={info.id} className="colorListBox">
            <div
              className="colorListColor"
              style={{ backgroundColor: `${info.name}` }}
            ></div>
            <div className="colorListName">이름: {info.name}</div>
            <div>rgb: {info.rgb}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduce;

const COLOR_LIST = [
  { id: 1, name: "red", rgb: "255, 0, 0" },
  { id: 2, name: "yellow", rgb: "255, 255, 0" },
  { id: 3, name: "green", rgb: "0, 128, 0" },
  { id: 4, name: "blue", rgb: "0, 0, 255" },
];
