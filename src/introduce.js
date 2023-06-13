import { Link } from "react-router-dom";
import "./styles/introduce.css";
const Introduce = () => {
  const handleButton = () => {};
  const changeInput = () => {
    console.log("input value 변동");
  };
  return (
    <div className="introduce">
      <div className="profile">
        <div className="profile-box">
          <img
            className="profile-image"
            alt="catPhoto"
            src="images/profile.png"
          />
          <h3 className="user-name">김수정</h3>
          <h4 className="class-number">47기</h4>
          <div>
            <input className="write-input" onChange={changeInput} />
            <Link to="/Product">
              <button className="click-button" onClick={handleButton}>
                클릭
              </button>
            </Link>
          </div>
          <a href="/Product">product 페이지로 이동</a>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
