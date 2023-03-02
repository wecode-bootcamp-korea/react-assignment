import React from 'react';
import './Review.scss';
// import { useState } from 'react';

const Review = props => {
  const { review, setReview } = props;
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
        {review ? (
          <div className="reviewMainContents">
            주문한지 하루만에 배송이 도착해서 너무 좋았습니다.
            <br />
            다음에도 필요하면 또 여기서 시킬 것 같아요.
          </div>
        ) : (
          ''
        )}

        <span
          className="reviewMainHandler"
          onClick={() => {
            setReview(!review);
          }}
        >
          {review ? '접기 ▲' : '더보기 ▼'}
        </span>
      </div>
    </div>
  );
};

export default Review;

// !는 not 연산자
// 값 앞에 붙이면 정반대의 상태를 만들어준다.
// 항상 console.log찍어서 확인해주기

// 삼항연산자(이거 아니면 이거 트루 폴스 값이 명확하게 있을때 사용)
// 조건문처럼 쓸 수 있는 개념
// 기본주고
// (조건) ? 동작 : 동작

// &&연산자
// 트루일때만 사용하는 연산자
