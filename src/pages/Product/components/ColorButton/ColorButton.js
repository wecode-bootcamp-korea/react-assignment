import "../Color/Color.scss";

const ColorButton = (props) => {
  const {color, setColor, productImage} = props
  console.log(props);
  const handleClick = () => {
    setColor(color);
    console.log(productImage)
  }
  return (
    <>
    <button className={`colorButton ${color}`} onClick={handleClick} />
    </>
  );
};

export default ColorButton;
