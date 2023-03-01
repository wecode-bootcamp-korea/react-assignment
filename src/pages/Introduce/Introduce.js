import React from "react";
import "../Introduce/Introduce.scss";
import { Link, useNavigate } from "react-router-dom";

const Introduce = () => {
  const navigate = useNavigate();
  function handleInput() {
    console.log("input 태그동작");
  }

  function handleButton() {
    console.log("button 태그동작");
    navigate("/product");
  }

  return (
    <>
      <div className="introduce">
        <div className="boxWwrap">
          <div className="weCodeBox">
            <h2>{">"}wecode</h2>
          </div>
        </div>
        <strong className="info">홍태훈</strong>
        <div className="info">43기</div>
        <div className="inputBox">
          <input className="input" onChange={handleInput}></input>

          <button className="button" onClick={handleButton}>
            클릭
          </button>
        </div>
        <div>
          <Link to="/product" className="link">
            product페이지로 이동
          </Link>
        </div>
      </div>
      <div className="flexBox">
        {COLOR_CARD.map((info) => {
          return (
            <div key={info.id} className="colorBox">
              <div className="boxWwrap ">
                <div className={`weCodeBox ${info.color} `} />
              </div>
              <strong className="info">{info.name}</strong>
              <div className="info">{info.colorValue}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Introduce;

const COLOR_CARD = [
  { id: 1, color: "red", name: "이름 : red", colorValue: "rgb : 255, 0, 0" },
  {
    id: 2,
    color: "yellow",
    name: "이름 : yellow",
    colorValue: "rgb : 255, 255, 0",
  },
  {
    id: 3,
    color: "green",
    name: "이름 : green",
    colorValue: "rgb : 0, 128, 0",
  },
  { id: 4, color: "blue", name: "이름 : blue", colorValue: "rgb : 0, 0, 255" },
];
