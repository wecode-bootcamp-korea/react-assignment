import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./Introduce.scss";

const Introduce = () => {

    const navigate = useNavigate();

    const goToProduct = () => {
        navigate('/product');
    };

    const handleInput = () => {
        console.log("input 태그 동작")
    }

    return (
    <div className = "introduce">  
        <div className = "wecodebox">
            <div className="wecodeboxColor">
            <h1>>wecode</h1>
            </div>
            <h2>유정인</h2>
            <h3>43기</h3>
        <div className="wecodeboxInputButton">
            <input type="text" onChange={handleInput}/>
            <button onClick={goToProduct}>button</button>
        </div>
            <Link to="/product">product 페이지로 이동</Link>
        </div>
        <div className="miniBoxContainer">
            {COLOR_CARD_LIST.map((info) => (
                <div key={info.id} className="miniBox">
                    <div className="miniBoxColor" style={{backgroundColor:`${info.color}`}}>
                    </div>
                    <h2>이름 : {info.name}</h2>
                    <h3>rgb : {info.rgb}</h3> 
                </div> 
            ))}
        </div>
    </div>
);};
 export default Introduce;

const COLOR_CARD_LIST = [
    {id : 1, color: 'red', name : 'red', rgb : '255, 0, 0'},
    {id : 2, color: 'blue',name : 'blue', rgb : '255, 255, 0'},    
    {id : 3, color: 'yellow',name : 'yellow', rgb : '255, 0, 255'},    
    {id : 4, color: 'green',name : 'green', rgb : '0, 255, 0'}
]