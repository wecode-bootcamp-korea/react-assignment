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
          {LINK_LIST.map((list) => (
            <Link key={list.id} to={list.to}>
              {list.route}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Nav;
const LINK_LIST = [
  { id: 1, to: "/", route: "메인으로 가기"},
  { id: 2, to: "/review", route: "리뷰 컴포넌트 가기" },
  { id: 3, to: "/count", route: "카운트 컴포넌트 가기" },
  { id: 4, to: "/color", route: "컬러 컴포넌트 가기" },
];
