import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Introduce.scss";

const Introduce = () => {
  const navigate = useNavigate();

  const handleInput = () => {
    console.log("input 태그 동작");
  };

  const goToProduct = () => {
    navigate("/product");
    console.log("button 태그 동작");
  };

  return (
    <nav className="introduce">
      <div className="wecodeWrap">
        <h1 className="wecode">> wecode</h1>
        <p className="name">권유정</p>
        <p className="class">43기</p>
        <input onChange={handleInput} />
        <button onClick={goToProduct}>클릭</button>
        <Link to="/product">
          <p className="moveToProduct">product 페이지로 이동</p>
        </Link>
      </div>
      <div className="colorCardWrap">
        {CARD_LIST.map((cardInfo) => {
          return (
            <div key={cardInfo.id} className="wecodeWrap">
              <h1 className={`wecode ${cardInfo.name}`}></h1>
              <p className="name">{`이름 : ${cardInfo.name}`}</p>
              <p className="class">{`rgb: ${cardInfo.rgb}`}</p>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Introduce;

const CARD_LIST = [
  { id: 1, name: "red", rgb: "255,0,0" },
  { id: 2, name: "yellow", rgb: "255,255,0" },
  { id: 3, name: "green", rgb: "0,128,0" },
  { id: 4, name: "blue", rgb: "0,0,255" },
];
