import React, { useState } from "react";
import "./Review.scss";

const Review = (props) => {
  const { productData, color } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [toggleText, setToggleText] = useState("더보기 ▼");

  return (
    <div className="review">
      <div className="user">
        <img src="/images/avatar.jpg" alt="avatar" />
        <div className="userInfo">
          <div className="name">위코드</div>
          <div className="itemName">골프공, white 색상 구매</div>
        </div>
      </div>
      <div className="reviewTitle">배송도 빠르고 정말 좋아요.</div>
      <div className="reviewMain">
        {productData.map((info, idx) => {
          return productData[idx].color === color ? (
            <div
              key={info.id}
              className={`reviewMainContents ${isOpen ? "open" : "hidden"}`}
            >
              주문한지 하루만에 배송이 도착해서 너무 좋았습니다.
              <br />
              다음에도 필요하면 또 여기서 시킬 것 같아요.
            </div>
          ) : null;
        })}
        <span
          className="reviewMainHandler"
          onClick={() => {
            setIsOpen(!isOpen);
            isOpen ? setToggleText("더보기 ▼") : setToggleText("접기 ▲");
          }}
        >
          {toggleText}
        </span>
      </div>
    </div>
  );
};

export default Review;
