import React, { useState } from "react";
import "./OnSaleCard.css";

const OnSaleCard = ({ product }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="on-sale-card">
      <span className="on-sale-discount">{product.discount}</span>
      {!imageError ? (
        <img
          src={product.image}
          className="img-on-sale"
          alt={product.title}
          onError={handleImageError}
        />
      ) : (
        <div className="placeholder-image">Image Not Available</div>
      )}
      <h1 className="on-sale-title">{product.title}</h1>
      <div className="on-sale-price">
        <p className="on-sale-old-price">{product.oldPrice}</p>
        <p className="on-sale-new-price">{product.newPrice}</p>
      </div>
    </div>
  );
};

export default OnSaleCard;
