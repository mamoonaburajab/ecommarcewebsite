import React from "react";
import Slider from "react-slick";
import OnSaleCard from "../OnSaleCard/OnSaleCard";
import laptop from "../../assets/images/MacBook Air 13 (2018-2019) Skins - Custom _ Body + Keyboard Surround.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Sale-Products.css";

const productsOnSale = [
  {
    id: 1,
    discount: "-50%",
    image: laptop, // Replace with actual image import
    title: "Logitech G502 Gaming Mouse",
    oldPrice: "$38.00",
    newPrice: "$19.00",
  },
  {
    id: 2,
    discount: "-30%",
    image: laptop, // Replace with actual image import
    title: "Apple MacBook Pro",
    oldPrice: "$1200.00",
    newPrice: "$840.00",
  },
  {
    id: 3,
    discount: "-20%",
    image: laptop, // Replace with actual image import
    title: "Samsung Galaxy S21",
    oldPrice: "$999.00",
    newPrice: "$799.00",
  },
  {
    id: 4,
    discount: "-40%",
    image: laptop, // Replace with actual image import
    title: "Sony WH-1000XM4 Headphones",
    oldPrice: "$350.00",
    newPrice: "$210.00",
  },
  {
    id: 5,
    discount: "-25%",
    image: laptop, // Replace with actual image import
    title: "Dell XPS 13",
    oldPrice: "$1000.00",
    newPrice: "$750.00",
  },
  {
    id: 6,
    discount: "-15%",
    image: laptop, // Replace with actual image import
    title: "Amazon Echo Dot",
    oldPrice: "$50.00",
    newPrice: "$42.50",
  },
  {
    id: 7,
    discount: "-10%",
    image: laptop, // Replace with actual image import
    title: "Fitbit Charge 4",
    oldPrice: "$150.00",
    newPrice: "$135.00",
  },
  // Add more products as needed
];

const SaleProducts = () => {
    const settings = {
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          settings: {
            infinite: true,
            dots: true,
          },
        },
        {
          settings: {
            slidesToScroll: 1,
          },
        },
      ],
    };
  return (
    <div className="sale-slider">
      <div className="sale-header">
        <h1 className="sale-title">Products On Sale</h1>
        <p className="sale-subtitle">Shop Now!</p>
        <button className="view-all-button">View all</button>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {productsOnSale.map((product) => (
            <OnSaleCard key={product.id} product={product} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SaleProducts;
