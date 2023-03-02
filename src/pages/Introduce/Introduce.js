import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './introduce.scss';

const Introduce = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate('/product');
  };

  return (
    <>
      <div className="introduce">
        <img alt="myPicture" src="img/비니비니.jpg" />
        <div className="information">
          <p className="myName">문은빈</p>
          <p>43기</p>
          <date className="inputInfo">
            <input type={Text} />
            <button onClick={handleButton}>클릭</button>
          </date>
          <Link to="/product">Product 페이지로 이동!</Link>
        </div>
      </div>

      <div className="colorBoxContainter">
        {INTRODUCE_COLOR_TYPE.map(info => (
          <div className="colorBox">
            <div
              className="logoBox"
              style={{ backgroundColor: `${info.name}` }}
            ></div>
            <div className="nameBox">
              <h2>이름 : {info.name}</h2>
              <p>rgb : {info.rgb}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Introduce;

const INTRODUCE_COLOR_TYPE = [
  { id: 1, name: 'red', rgb: '255, 0, 0' },
  { id: 2, name: 'yellow', rgb: '255, 255, 0' },
  { id: 3, name: 'green', rgb: '0, 128, 0' },
  { id: 4, name: 'blue', rgb: '0, 0, 255' },
];
