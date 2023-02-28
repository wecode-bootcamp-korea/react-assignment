import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Profile from "./img/KakaoTalk_20230213_204309040.jpg";
import "./Introduce.scss";


const Introduction = () => {
  const navigate = useNavigate();

  const handleInput = () => {
    console.log("input 태그 동작");
  };

  const moveButton = () => {
    navigate("/product ");
  };

  return (
    <session>
      <div className="introduce">
        <div className="wrap">
          <img src={Profile} alt="" />
          <p>
            신정호
            <br />
            43기
          </p>
          <input onChange={handleInput} type="text" />
          <button onClick={moveButton}>클릭</button>
          <Link to="/product">product페이지로 이동</Link>
        </div>
        <div className="constantData">
          {PROFILE_LIST.map((list) => (
            <ul>
              <li className={list.name}></li>
              <li>색상:{list.name}</li>
              <li>rgb:{list.rgb}</li>
            </ul>
          ))}
        </div>
      </div>
    </session>
  );
};
export default Introduction;

const PROFILE_LIST = [
  { id: 1, name: "red", rgb: "255, 0, 0" },
  { id: 2, name: "yellow", rgb: "255, 255, 0" },
  { id: 3, name: "green", rgb: "0, 128, 0" },
  { id: 4, name: "blue", rgb: "0, 0, 255" },
];
