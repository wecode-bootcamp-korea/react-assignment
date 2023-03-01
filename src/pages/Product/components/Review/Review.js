import React from "react";
import "./Review.scss";

const Review = (props) => {
  const { comment, isReviewOpen, setIsReviewOpen } = props;

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
        {isReviewOpen && <div className="reviewMainContents">{comment}</div>}
        <span
          className="reviewMainHandler"
          onClick={() => {
            setIsReviewOpen(!isReviewOpen); // 어떠한 값 앞에 !(not 연산자) 붙이면 그 값의 정반대 값을 도출시킨다. => isReviewOpen의 초기값이 false이므로 클릭하면 true 도출 => 클릭 할때마다 왔다갔다
          }}
        >
          {isReviewOpen ? "접기 ▲" : "더보기 ▼"}
        </span>
      </div>
    </div>
  );
};

export default Review;
