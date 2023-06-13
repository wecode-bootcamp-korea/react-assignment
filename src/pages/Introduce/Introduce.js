import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Introduce.scss";

function Introduce() {
  const navigate = useNavigate();

  function HandleInput() {
    console.log("input 태그 동작");
  }

  function HandleButton() {
    navigate("/Product");
  }
  return (
    <div className="introduce">
      <img className="photo" alt="hambbang" src="images/IMG_7632.JPG" />
      <div className="letters">
        <p className="name">양회진</p>
        <p className="number">47기</p>
      </div>
      <div className="inputButton">
        <input id="input" onChange={HandleInput}></input>
        <button id="button" onClick={HandleButton}>
          클릭
        </button>
        <br />
        <Link to="./Product">move to Product page</Link>
      </div>
    </div>
  );
}

export default Introduce;
