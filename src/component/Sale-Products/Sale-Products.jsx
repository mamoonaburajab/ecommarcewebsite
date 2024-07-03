import React from "react";
import "./Sale-Products.css";

const products = [
  {
    id: 1,
    name: "Logitech G502 Gaming Mouse",
    originalPrice: "$38.00",
    salePrice: "$19.00",
    discount: "-50%",
    imgSrc: "https://m.media-amazon.com/images/I/61QY3V6A-NL.jpg",
  },
  {
    id: 2,
    name: "NPET K10 Wired Gaming Keyboard",
    originalPrice: "$49.00",
    salePrice: "$34.30",
    discount: "-30%",
    imgSrc:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/keyboard/desktop-keyboard/w/l/6/gaming-keyboard-with-87-keys-rgb-backlit-with-suspension-keys-original-imagzcgwtrabgjna.jpeg?q=90&crop=false",
  },
  {
    id: 3,
    name: "Apple Watch Series 7 (GPS, 41MM)",
    originalPrice: "$288.00",
    salePrice: "$231.20",
    discount: "-20%",
    imgSrc:
      "https://www.paklap.pk/media/catalog/product/cache/2cc443e44e97595ea39006016c876eaa/c/o/copy-15-czone.com.pk-1540-13499-090822075111.jpg.webp",
  },
  {
    id: 4,
    name: "Apple 2022 MacBook Air M2 Chip",
    originalPrice: "$950.22",
    salePrice: "$712.66",
    discount: "-25%",
    imgSrc:
      "https://cdn11.bigcommerce.com/s-utiov5b794/images/stencil/608x608/products/2128/14093/refurbished-apple-macbook-pro-14-2021-space-gray-retina-touch-front__59760.1715704552.jpg?c=2",
  },
  {
    id: 5,
    name: "Samsung Titan",
    originalPrice: "$120.00",
    salePrice: "$99.60",
    discount: "-17%",
    imgSrc:
      "https://www.filmtools.com/media/catalog/product/s/a/samsung_500gb_t7_usb_3_2_portable_ssd_titan_gray_5_2.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=521&width=521&canvas=521:521",
  },
];

const SaleProducts = () => {
  return (
    <div className="carousel">
      <div className="header">
        <h2>Products On Sale</h2>
        <a href="#" className="viewAll">
          View all
        </a>
      </div>
      <div className="productContainer">
        {products.map((product) => (
          <div key={product.id} className="product">
            <span className="discount">{product.discount}</span>
            <img
              src={product.imgSrc}
              alt={product.name}
              className="productImage"
            />
            <div className="productInfo">
              <h3 className="productName">{product.name}</h3>
              <div className="price">
                <span className="originalPrice">{product.originalPrice}</span>
                <span className="salePrice">{product.salePrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="navigation">
        <button className="navButton">{"<"}</button>
        <button className="navButton">{">"}</button>
      </div>
    </div>
  );
};

export default SaleProducts;
