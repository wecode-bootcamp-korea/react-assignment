import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpenMenu(false);
  }, [location.pathname]);

  return (
    <div className="nav">
      <div
        className="icon"
        onClick={() => {
          setIsOpenMenu((prev) => !prev);
        }}
      >
        메뉴
      </div>
      {isOpenMenu && (
        <div className="menuBox">
          {MENU.map((menulist) => (
            <li key={menulist.id}>
              <Link to={menulist.link}>{menulist.title}</Link>
            </li>
          ))}
          {/* <Link to="/">메인으로 가기</Link>
          <Link to="/review">리뷰 컴포넌트 가기</Link>
          <Link to="/count">카운트 컴포넌트 가기</Link>
          <Link to="/color">컬러 컴포넌트 가기</Link> */}
        </div>
      )}
    </div>
  );
};

export default Nav;

const MENU = [
  { id: 1, link: "/", title: "메인으로 가기" },
  { id: 2, link: "/review", title: "리뷰 컴포넌트 가기" },
  { id: 3, link: "/count", title: "카운트 컴포넌트 가기" },
  { id: 4, link: "/color", title: "컬러 컴포넌트 가기" },
];
