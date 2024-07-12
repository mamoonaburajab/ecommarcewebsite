import React from "react";
import apple from "../../assets/images/apple-logo.png";
import sony from "../../assets/images/Sony-logo-500x281.png";
import samsung from "../../assets/images/samsong-logo.avif";
import huawei from "../../assets/images/wuawei-logo.png";
import canon from "../../assets/images/Canon-Logo-700x394.png";
import lenovo from "../../assets/images/lenovo_logo_icon_145112.webp";
import "./Top-Brands.css"; // Import your CSS file for styling

const TopBrands = () => {
  return (
    <div className="top-brands-container">
      <h1 className="top-brands-header">Top Brands</h1>

      <div className="brands-list">
        <img className="brand-logo" src={apple} alt="Apple" />
        <img className="brand-logo" src={sony} alt="Sony" />
        <img className="brand-logo" src={samsung} alt="Samsung" />
        <img className="brand-logo" src={huawei} alt="Huawei" />
        <img className="brand-logo" src={canon} alt="Canon" />
        <img className="brand-logo" src={lenovo} alt="Lenovo" />
      </div>
    </div>
  );
};

export default TopBrands;
