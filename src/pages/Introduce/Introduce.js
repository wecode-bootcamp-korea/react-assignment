import React from "react"
import "./Introduce.css"

function Introduce() {
    return (
        <div className="introduce">
            <div className="img">
                <img className="wecodeImg" src="images/wecode.png" alt="wecodeLogo" />
                </div>
            <div className="text">
                <p className="name">이지원</p>
                <p className="num">47기</p>
            </div>
        </div>
    );
}

export default Introduce