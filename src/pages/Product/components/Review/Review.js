import React, {useState} from "react";
import "./Review.scss";

const Review = (props) => {
  const [review, setReview] = useState("더보기 ▼");
  const [display, setDisplay] = useState('none');
  const reviewHandling = (e) => {
    if(review === ("더보기 ▼")){
      setReview("접기 ▲");
      setDisplay('block');
    }else{
      setReview("더보기 ▼");
      setDisplay('none');
    }
    
  }
  return (
    <div className="review">
      <div className="user">
        <img src="/images/avatar.jpg" alt="avatar" />
        <div className="userInfo">
          <div className="name">위코드</div>
          <div className="itemName">골프공, white 색상 구매</div>
        </div>
      </div>
      <div className="reviewTitle">{props.review}</div>
      <div className="reviewMain">
        <div className="reviewMainContents" style={{display: display }}>
          주문한지 하루만에 배송이 도착해서 너무 좋았습니다.
          <br />
          다음에도 필요하면 또 여기서 시킬 것 같아요.
        </div>
        <span className="reviewMainHandler" onClick={reviewHandling}>
          {review}
        </span>
      </div>
    </div>
  );
};

export default Review;
