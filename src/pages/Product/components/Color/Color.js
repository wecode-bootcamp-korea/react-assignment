import "../ColorButton/ColorButton.scss";
import ColorButton from "../ColorButton/ColorButton";

const Color = (props) => {
  const {color, setColor} =props
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={ "selected" + (setColor ? ` ${color}` : '') } />
        {color}
      </span>
      <div className="colorHandler">
      <ColorButton color={"white"} setColor={setColor}/>
      <ColorButton color={"red"} setColor={setColor}/>
      <ColorButton color={"yellow"} setColor={setColor}/>
      </div>
    </div>
  );
};

export default Color;
