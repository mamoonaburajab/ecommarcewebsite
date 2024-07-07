import React from "react";
import laptop from "../../assets/images/MacBook Air 13 (2018-2019) Skins - Custom _ Body + Keyboard Surround.jpeg";
import iphone from "../../assets/images/41kIfVTLICL._SL500_._AC_SL500_.jpg";

import "./NewProduct.css";

const products = [
  {
    id: 1,
    title: "Iphone 14 promax 256 gig",
    price: "$999",
    rating: "Five star",
  },
  { id: 2, title: "MacBook Pro 2021", price: "$1299", rating: "Five star" },
  { id: 3, title: "Samsung Galaxy S21", price: "$799", rating: "Four star" },
  { id: 4, title: "Dell XPS 13", price: "$999", rating: "Four star" },
  { id: 5, title: "HP Spectre x360", price: "$1199", rating: "Five star" },
  { id: 6, title: "Google Pixel 6", price: "$699", rating: "Four star" },
  { id: 7, title: "Sony WH-1000XM4", price: "$349", rating: "Five star" },
  { id: 8, title: "iPad Pro 2021", price: "$999", rating: "Five star" },
  { id: 9, title: "OnePlus 9 Pro", price: "$969", rating: "Four star" },
  { id: 10, title: "Apple Watch Series 7", price: "$399", rating: "Five star" },
];

const NewProduct = () => {
  return (
    <div className="New-products">
      <div className="new-products-header">
        <h1>New Products</h1>
        <p>View all</p>
      </div>
      <div className="products-container">
        {products.slice(0, 4).map((product) => (
          <div key={product.id} className="product-card">
            <div className="img-color">
              <img className="img-product" src={laptop} alt="Product" />
              <div className="color">
                <span className="color-products-red"></span>
                <span className="color-products-blue"></span>
                <span className="color-products-green"></span>
                <span className="color-products-yallow"></span>
              </div>
            </div>
            <p className="product-title">{product.title}</p>
            <div className="price-rate">
              <p>{product.price}</p>
              <span>{product.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProduct;
