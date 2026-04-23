import React from "react";
import "./Auth.css";
import Navbar from "../components/Navbar";
import {useNavigate } from "react-router-dom";

const Register = () => {


    const navigate = useNavigate();

  return (
    <div className="auth-page">
        <Navbar />
      <div className="overlay">
        <div className="auth-card">

          <h2>Create Account</h2>

          <input placeholder="Full Name" />
          <input placeholder="Mobile Number" />
          <input placeholder="Email" />
          <input placeholder="Password" />

          <button className="main-btn" onClick={()=>navigate("/login")}>Continue</button>

        </div>
      </div>
    </div>
  );
};

export default Register;