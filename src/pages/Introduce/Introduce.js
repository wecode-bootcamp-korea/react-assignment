import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Introduce.scss";
import "../../style/mixin.scss";

const Introduce = () => {
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate('/product');
  };
  return (
    <div className="wrap_introduce">
      <div className="box_introduce">
        <span className="thumb_introduce">&#62; wecode</span>
        <strong className="tit_name">김개발</strong>
        <span className="txt_introduce">오잉</span>
        <input type="text" className="inp_search" /><button className="btn_click" onClick={goToProduct}>클릭</button>
        <Link to="/product" className="link_product">product 페이지로 이동</Link>
      </div>
        <div className="group_introduce">
          {CARD_LIST.map((color) => (
          <div className="box_introduce">
            <span className={`thumb_introduce ${color.name}`}></span>
            <strong className="tit_name">{color.name}</strong>
            <span className="txt_introduce">{color.rgb}</span>
          </div>
          ))}
        </div>
    </div>
  );
};

const CARD_LIST = [
  {id :1, name : "red", rgb: "255.0.0"},
  {id :2, name : "yellow", rgb: "255.255.0"},
  {id :3, name : "green", rgb: "0.128.0"},
  {id :4, name : "blue", rgb: "0.0.255"}
]
export default Introduce;
