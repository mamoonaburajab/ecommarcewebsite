import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import Header from "../../component/Header/Header";
import Category from "../../component/Category/Category";
import SaleProducts from "../../component/Sale-Products/Sale-Products";
import NewProduct from "../../component/New-product/NewProduct";
import cover from "../../assets/images/iPhoneApple.jpg";
import playstation from "../../assets/images/Live-from-PS5.jpg";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Header />
      </div>
      <div>
        <Category />
      </div>
      <div>
        <SaleProducts />
      </div>
      <div>
        <NewProduct />
      </div>
      <div className="img-contaner">
        <img className="img-home-iphone" src={cover} alt="" />
        <img className="img-home-playstation" src={playstation} alt="" />
      </div>
      <div></div>
    </div>
  );
};

export default Home;
