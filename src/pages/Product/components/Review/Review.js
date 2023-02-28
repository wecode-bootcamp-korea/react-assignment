import React from "react";
import "./Review.scss";

const Review = (props) => {
  const { review, isVisible, setIsVisible } = props;
  console.log(review);
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
        {isVisible && <div className="reviewMainContents">{review}</div>}

        <span
          className="reviewMainHandler"
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          {isVisible ? "접기 ▲" : "더보기 ▼"}
        </span>
      </div>
    </div>
  );
};

export default Review;
