import React from "react";
import { Link } from "react-router-dom";
import "./Introduce.scss";

const Introduce = () => {
    return (
      <div className="introduce">
        <div className="introduceBox">
          <div><img className="introduceImg" src="https://www.edology.com/uploads/media/sulu-700x450/00/1720-blog-why-coding-is-so-important-for-IT-jobs-s.jpg?v=2-0" alt="introduceImg"/></div>
          <div className="introduceAccount">
            <h1>신건록</h1>
            <h1>43기</h1>
            <input onChange={function handleInput() {
                console.log("input 동작 ㅇㅈ");
              }}
            />
            <button className="Product" onClick={function handleButton() {
                console.log("button 동작 ㅇㅈ");
              }}
            >클릭</button>
            <br/>
            <Link to="/product">product로 이동</Link>
          </div>
        </div>
      </div>
      )
};

export default Introduce;