import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { INTRODUCE_CARD } from "../../uiData/introduce";
import "./Introduce.scss";

function Introduce() {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/product");
  };

  const handleInput = () => {
    console.log("input 태그 동작");
  };
  return (
    <div className="main">
      <div className="container">
        <div className="container-inner">
          <div className="user-box">
            <img className="user-img" src="images/cat.jpeg" alt="user-img" />
          </div>
          <div className="user-exp">
            <span className="boldStyle">김민지</span>
            <br />
            <span className="smallStyle">46기</span>
            <br />
            <input className="inputs" type="text" onChange={handleInput} />
            <button className="clickBtn" type="button" onClick={handleButton}>
              클릭
            </button>
            <Link to="/product">product페이지로 이동</Link>
          </div>
        </div>
        <div className="container-card-area">
          {INTRODUCE_CARD.map((card) => {
            return (
              <div className="container-color-card">
                <div className="inner">
                  <div
                    className="card-box"
                    style={{ backgroundColor: `rgb(${card.color})` }}
                  ></div>
                  <div className="card-exp">
                    <span className="bold">이름 : {card.name}</span>
                  </div>
                  <div className="card-exp">
                    <span className="bold">rgb : {card.color}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Introduce;
