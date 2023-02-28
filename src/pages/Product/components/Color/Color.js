import "./Color.scss";
import ColorButton from "../ColorButton/ColorButton";

const Color = (props) => {

  return (
    <>
        <div className="color">
        <span className="colorText">
          색상 :
          <div className={`selected ${props.color}`} />
          {props.color}
        </span>
        <ColorButton color={props.color} setColor={props.setColor}/>
      </div>
    </>
  );
};

export default Color;