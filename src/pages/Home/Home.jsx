import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import Header from "../../component/Header/Header";
import Category from "../../component/Category/Category";
import SaleProducts from "../../component/Sale-Products/Sale-Products";

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
      <div></div>
    </div>
  );
};

export default Home;
