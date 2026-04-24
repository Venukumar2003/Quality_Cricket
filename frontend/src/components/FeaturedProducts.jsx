import React from "react";
import "../styles/Home.css"

import { useState } from "react";

const FeaturedProducts = ({ products }) => {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? products
      : products.filter(p => p.category === filter);

  return (
    <div className="section">
      <h2>Featured Products</h2>

      <div className="filters">
        {["All Products", "Cricket Bats", "Accessories", "MRF" , "SS TON"].map((f) => (
          <button key={f} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.map((item) => (
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

export default FeaturedProducts;