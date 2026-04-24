import React from "react";
import "../styles/Home.css"
import bannerImg from "../assets/banner.svg"
const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImg} alt="" />
      {/* <div className="banner-text">
        <h2>PREMIUM</h2>
        <p>Cricket Accessories</p>
        <button>Buy Now</button>
      </div> */}
    </div>
  );
};

export default Banner;