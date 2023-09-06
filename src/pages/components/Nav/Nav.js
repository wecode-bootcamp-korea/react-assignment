import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpenMenu(false);
  }, [location.pathname]);

  const navList = [
    { id: 1, path:"/", text: "메인으로 가기"},
    { id: 2, path:"/review", text: "리뷰 컴포넌트 가기"},
    { id: 3, path:"/count", text: "카운트 컴포넌트 가기"},
    { id: 4, path:"/color", text: "컬러 컴포넌트 가기"}
  ];
  
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
          {navList.map((list) => (
            <Link key={list.key} to={list.link}>
              {list.text}
            </Link>

          ))}
        </div>
      )}
    </div>
  );
};

export default Nav;
