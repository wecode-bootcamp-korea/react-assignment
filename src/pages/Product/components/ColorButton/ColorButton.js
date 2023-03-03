import React from 'react';
import './ColorButton.scss';

const ColorButton = (props) => {
  console.log(props);

  return (
    <button
      className={`colorButton ${props.color}`}
      onClick={() => {
        props.setColor(props.color);
      }}
    />
   
  );
};

export default ColorButton;
