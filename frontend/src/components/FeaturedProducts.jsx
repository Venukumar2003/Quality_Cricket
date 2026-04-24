// import React from "react";
// // import "../styles/Home.css"
// import "./FeaturedProducts.css"

// // import img1 from "../assets/all1.png"
// // import img2 from "../assets/all2.png"
// // import img3 from "../assets/all3.png"
// // import img4 from "../assets/all4.png"
// // import img5 from "../assets/all5.png"
// // import img6 from "../assets/all6.png"

// // import img7 from "../assets/all7.png"
// // import img8 from "../assets/all8.png"
// // import img9 from "../assets/all9.png"
// // import img10 from "../assets/all10.png"
// // import img12 from "../assets/all12.png"
// // import img13 from "../assets/all13.png"
// // import img14 from "../assets/all14.png"
// // import img15 from "../assets/all15.png"
// // import img16 from "../assets/all16.png"





// import { useState } from "react";


// // const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img12,img12,img13,img14,img15,img16]



// const FeaturedProducts = ({products}) => {
//   const [filter, setFilter] = useState("all");


  
//   const filtered =
//     filter === "all"
//           ? products
//       : products.filter(
//         (p) => p.category === filter || p.brand === filter
//       );

//   return (
//     <div className="section">
//       <h2>Featured Products</h2>

//       {/* <div className="filters">
//         {["All Products", "Cricket Bats", "Accessories", "MRF" , "SS TON"].map((f) => (
//           <button key={f} onClick={() => setFilter(f)}>
//             {f}
//           </button>
//         ))}
//       </div> */}

//        <div className="filters">
//         <button className={filter === "all" ?"active" : ""}
//         onClick={() => setFilter("all")}>All Products</button>

//         <button className={filter === "bat" ?"active" : ""}
//         onClick={() => setFilter("bat")}>Cricket Bats</button>
//         <button className={filter === "gear" ?"active" : ""}
//         onClick={() => setFilter("gear")}>Accessories</button>
//         <button className={filter === "MRF" ?"active" : ""}
//          onClick={() => setFilter("MRF")}>MRF</button>
//         <button className={filter === "SS TON" ?"active" : ""}
//         onClick={() => setFilter("SS TON")}>SS TON</button>
//       </div>

//       <div className="grid">
//         {filtered.map((item) => (
//           <div className="card" key={item.id}>
//             <img src={`/assets/${item.img}`} alt={item.name} />
//             <p>{item.name}</p>
//             <span>$ {item.price}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedProducts;




import React, { useEffect, useState } from "react";
import "./FeaturedProducts.css";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");

  // 🔥 Fetch products from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  // 🔥 Filter logic
  const filtered =
    filter === "all"
      ? products
      : products.filter(
          (p) => p.category === filter || p.brand === filter
        );

  return (
    <div className="section">
      <h2>Featured Products</h2>

      {/* 🔥 FILTER BUTTONS */}
      <div className="filters">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All Products
        </button>

        <button
          className={filter === "bat" ? "active" : ""}
          onClick={() => setFilter("bat")}
        >
          Cricket Bats
        </button>

        <button
          className={filter === "gear" ? "active" : ""}
          onClick={() => setFilter("gear")}
        >
          Accessories
        </button>

        <button
          className={filter === "MRF" ? "active" : ""}
          onClick={() => setFilter("MRF")}
        >
          MRF
        </button>

        <button
          className={filter === "SS TON" ? "active" : ""}
          onClick={() => setFilter("SS TON")}
        >
          SS TON
        </button>
      </div>

      {/* 🔥 PRODUCTS GRID */}
      <div className="grid">
        {filtered.map((item) => (
          <div className="card" key={item.id}>
            <img
              src={`/assets/${item.image}`}
              alt={item.name}
            />

            <p>{item.name}</p>

            <div className="price">
              <span className="new">${item.price}</span>
              <span className="old">${item.oldPrice}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 BUTTON */}
      <button className="view-btn">View All</button>
    </div>
  );
};

export default FeaturedProducts;