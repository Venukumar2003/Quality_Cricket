import React from "react";
import "../styles/Home.css"


const TopSellers = ({ products }) => {
  return (
    <div className="section">
      <h2>Top Sellers</h2>

      <div className="top-sellers">
        {products.slice(0, 5).map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt="" />
            <p>{item.name}</p>
            <span>₹ {item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellers;