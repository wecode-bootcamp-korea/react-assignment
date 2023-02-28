import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Introduce.scss";

const Introduce = () => {
  const navigate = useNavigate();

  const handleInput = () => {
    console.log("input 태그 동작");
  };

  const handleButton = () => {
    navigate("/product");
  };

  return (
    <>
      <div className="introduce">
        <div className="mainBox">
          <div className="logoBox">
            <h1>&gt; wecode</h1>
          </div>
          <div className="nameBox">
            <h2>김개발</h2>
            <p>00기</p>
          </div>
          <form>
            <input type="text" onChange={handleInput}></input>
            <button type="button" onClick={handleButton}>
              클릭
            </button>
          </form>
          <Link to="/product">Product 페이지로 이동</Link>
        </div>
        <div className="colorBoxContainter">
          {COLOR_INFO_LIST.map((info) => (
            <div className="colorBox">
              <div
                className="logoBox"
                style={{ backgroundColor: `${info.color}` }}
              ></div>
              <div className="nameBox">
                <h2>이름 : {info.color}</h2>
                <p>rgb : {info.rgb}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Introduce;

const COLOR_INFO_LIST = [
  { id: 1, color: "red", rgb: "255, 0, 0" },
  { id: 2, color: "yellow", rgb: "255, 255, 0" },
  { id: 3, color: "green", rgb: "0, 128, 0" },
  { id: 4, color: "blue", rgb: "0, 0, 255" },
];
