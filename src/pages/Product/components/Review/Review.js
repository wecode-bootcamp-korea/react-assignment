import React from "react";
import "./Review.scss";

const Review = (props) => {
  const { show, setShow, title, evaluation, review } = props;
  return (
    <div className="review">
      <div className="user">
        <img src="/images/avatar.jpg" alt="avatar" />
        <div className="userInfo">
          <div className="name">위코드</div>
          <div className="itemName">{title}, white 색상 구매</div>
        </div>
      </div>
      <div className="reviewTitle">{evaluation}</div>
      <div className="reviewMain">
        <div className={`reviewMainContents ${show ? "" : "hide"}`}>
        {review}
        </div>
        <span
          className="reviewMainHandler"
          onClick={() => {
            setShow((show) => !show);
          }}
        >
          {show ? "접기 ▲" : "더보기 ▼"}
        </span>
      </div>
    </div>
  );
};

export default Review;
