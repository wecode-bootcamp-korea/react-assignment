import React from "react";
import "../Introduce/Introduce.scss";
import {Link, useNavigate} from "react-router-dom";



const Introduce = ()=> {
    
    const navigate = useNavigate();
    const goToProduct = () => {
        navigate("/Product");
    }

    return(
        <nav className="introduce">
            <div className="logobox">
                <h1 className="mainbox">wecode</h1>
            </div>
            <h2 className="namebox">오지수</h2>
            <h5>43기</h5>
            <form>
                <input type="text" onChange={handleInput}></input>
                <button type="button" onClick={goToProduct}>버튼</button>
                <br/>
                <Link to ="/Product">Product 페이지로 이동</Link>
            </form>
        </nav>
    ) ;
};

const handleInput = ()=> {
    console.log("input 태그 동작");
}

// const handleButton = ()=> {
//     console.log("button 태그 동작");

// }


export default Introduce;