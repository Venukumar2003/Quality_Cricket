import React from "react";
import "../styles/Home.css"
import img1 from "../assets/topseller1.png"
import img2 from "../assets/topseller2.png"
import img3 from "../assets/topseller3.png"
import img4 from "../assets/topseller4.png"
import img5 from "../assets/topseller5.png"



const TopSellers = ({ products }) => {

  const images = [img1,img2,img3,img4,img5]



  return (

    <div className="section">
      <h2>Top Sellers</h2>

      <div className="top-sellers">
        {images.map((img,index) => (
          <div className="card" key={index}>
            <img src={img} alt="" />
            {/* <p>{item.name}</p>
            <span>₹ {item.price}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellers;