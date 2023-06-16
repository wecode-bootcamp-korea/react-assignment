import React, { useState } from "react";
import "./Review.scss";

const Review = () => {
  const [review, setReview] = useState(true);

  const more = () => {
    setReview(!review);
  };
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
        {review && (
          <div className="reviewMainContents">
            주문한지 하루만에 배송이 도착해서 너무 좋았습니다.
            <br />
            다음에도 필요하면 또 여기서 시킬 것 같아요.
          </div>
        )}
        {/* <div
          className="reviewMainContents"
          style={{ display: `${review ? "block" : "none"}` }}
        >
          주문한지 하루만에 배송이 도착해서 너무 좋았습니다.
          <br />
          다음에도 필요하면 또 여기서 시킬 것 같아요.
        </div> */}
        <span
          className="reviewMainHandler"
          onClick={() => {
            more();
          }}
        >
          {review ? "접기 ▲" : "더보기 ▼"}
        </span>
      </div>
    </div>
  );
};

export default Review;
