import React from "react";
import "../styles/Home.css"

const Banner = () => {
  return (
    <div className="banner">
      <img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2" alt="" />
      <div className="banner-text">
        <h2>PREMIUM</h2>
        <p>Cricket Accessories</p>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default Banner;