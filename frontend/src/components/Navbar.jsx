import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="/logo.png" alt="logo" className="logo" />

      <div className="nav-links">
        <span>Home</span>
        <span>Sale</span>
        <span>Accessories</span>
        <span>All Products</span>
        <span>Contact Us</span>
        <span>FAQs</span>
      </div>

      <button className="login-btn">Login</button>
    </div>
  );
};

export default Navbar;



