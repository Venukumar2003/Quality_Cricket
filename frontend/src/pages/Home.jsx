// import React, { useEffect, useState } from "react";
// import { getProducts } from "../services/productService";
// import "./Home.css";
// import Navbar from "../components/Navbar";

// const Home = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getProducts()
//       .then(res => setProducts(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div className="home">
//         <Navbar />

//       <h2>Featured Products</h2>

//       <div className="grid">
//         {products.map((item) => (
//           <div className="card" key={item.id}>
//             <img src={item.image} alt="" />
//             <h4>{item.name}</h4>
//             <p>₹ {item.price}</p>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default Home;




import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

import Banner from "../components/Banner";
import TopSellers from "../components/TopSellers";
import FeaturedProducts from "../components/FeaturedProducts";
import About from "../components/About";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <Banner />
      <TopSellers products={products} />
      <FeaturedProducts products={products} />
      <About />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;