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
          {NAV_LIST.map(menu => (
          <Link to={menu.Link}>{menu.text}</Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Nav;

const NAV_LIST = [
  {text: '메인으로 가기', Link: '/'},
  {text: '리뷰 컴포넌트 가기', Link: '/review'},
  {text: '카운트 컴포넌트 가기', Link: '/count'},
  {text: '컬러 컴포넌트 가기', Link: '/color'},
];
