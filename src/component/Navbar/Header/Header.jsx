import React from "react";
import laptop from "../../../assets/images/MacBook Air 13 (2018-2019) Skins - Custom _ Body + Keyboard Surround.jpeg";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-text">
        <div>
          <h1 className="h-text">Tech Heim</h1>
          <p className="paragraph-text">
            "Join the <span className="span-text">digital revolution</span>"
          </p>
        </div>
        <input type="submit" value="Explore More" className="btn-header" />
      </div>
      <div>
        <img src={laptop} alt="" className="laptop-img" />
      </div>
    </div>
  );
};

export default Header;
