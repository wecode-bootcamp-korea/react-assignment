import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Introduce.scss";

const Introduce = () => {
  const navigate = useNavigate();
  const handleChange = () => {};

  const handleClick = () => {
    navigate("/product");
  };

  return (
    <div className="introduce">
      <div className="introContainer">
        <section className="main">
          <div className="content">＞wecode</div>
        </section>
        <section className="userInfo">
          <div className="user">
            <b className="userName">김진평</b>
            <br />
            43기
            <br />
            <input type="text" className="inputText" onChange={handleChange} />
            <button className="button" onClick={handleClick}>
              클릭
            </button>
            <Link to="/product" className="linkToProduct">
              product 페이지로 이동
            </Link>
          </div>
        </section>
      </div>
      {COLOR_LIST.map((color) => (
        <div className="introContainer color">
          <section className={`main ${color.name}`}>
            <div className="content"></div>
          </section>
          <section className="userInfo">
            <div className="user">
              <b className="userName">이름 : {color.name}</b>
              <br />
              <b>rgb : {color.rgb}</b>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Introduce;

const COLOR_LIST = [
  { id: 2, rgb: "255, 0, 0", name: "red" },
  { id: 3, rgb: "255, 255, 0", name: "yellow" },
  { id: 4, rgb: "0, 128, 0", name: "green" },
  { id: 5, rgb: "0, 0, 255", name: "blue" },
];
