import React from "react";
import "./Navbar.css";
import QC from "../assets/Log.png"
import { Link ,NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={QC} alt="logo" className="logo" />

      {/* <div className="nav-links">
        <span>Home</span>
        <span>Sale</span>
        <span>Accessories</span>
        <span>All Products</span>
        <span>Contact Us</span>
        <span>FAQs</span>
      </div> */}

        <div className="nav-links">
        <NavLink to="/home" className={({isActive}) => isActive ? "active" : ""} >Home</NavLink>
        <NavLink to="/sale">Sale</NavLink>
        <NavLink to="/accessories">Accessories</NavLink>
        <NavLink to="/products">All Products</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/faqs">FAQs</NavLink>
      </div>

      <Link to="/login"><button className="login-btn">Login</button></Link>
    </div>
  );
};

export default Navbar;



