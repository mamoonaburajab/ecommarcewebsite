import React from "react";
import Accessories from "../../assets/images/41kIfVTLICL._SL500_._AC_SL500_.jpg";
import camera from "../../assets/images/CNY_PR34666_mini11_PURPLE_FRONT_sRGB_V1b_for-web.png";
import laptop from "../../assets/images/61Qe0euJJZL.jpg";
import phone from "../../assets/images/15723463.jpg";
import Gamming from "../../assets/images/Controller-XL@2x.webp";
import smartWatch from "../../assets/images/images.jpeg";
import './Category.css';
const Category = () => {
  return (
    <div className="category">
      <div>
        <img src={Accessories} alt="" />
        <h1>Accessories</h1>
      </div>
      <div>
        <img src={camera} alt="" />
        <h1>Camera</h1>
      </div>
      <div>
        <img src={laptop} alt="" />
        <h1>Laptop</h1>
      </div>
      <div>
        <img src={phone} alt="" />
        <h1>Smart Phone</h1>
      </div>
      <div>
        <img src={Gamming} alt="" />
        <h1>Gaming</h1>
      </div>
      <div>
        <img src={smartWatch} alt="" />
        <h1>Smart Watch</h1>
      </div>
    </div>
  );
};

export default Category;
