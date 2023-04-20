import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../style/common.scss";
import "./introduce.scss";

const Profile = () => {
  const navigate = useNavigate();
  const ToProduct = () => {
    navigate("/product");
  };
  function handleInput() {
    console.log("input 태그 동작");
  }

  return (
    <div className="container">
      <img alt="myimg" src="/images/me.jpg" />
      <p className="content Lee">이경진</p>
      <p className="content 기수">45기</p>
      <div className="search">
        <input type="text" onChange={handleInput}></input>
        <button onClick={ToProduct}>클릭</button>
      </div>
      <Link to="/product" className="link">
        Product로 이동
      </Link>
    </div>
  );
};

export default Profile;