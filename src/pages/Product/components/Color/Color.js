import React from 'react';
import ColorButton from '../ColorButton/ColorButton';
import './Color.scss';

const Color = props => {
  const { color, setColor } = props;

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${color}`} />
        {color}
      </span>
      <div className="colorHandler">
        <ColorButton color={'white'} setColor={setColor} />
        <ColorButton color={'red'} setColor={setColor} />
        <ColorButton color={'yellow'} setColor={setColor} />
      </div>
    </div>
  );
};

export default Color;

//  템블릿 리터럴?
//  백틱사용하는 이유
//  스테이트가 변하면 다시 렌더링이 된다
