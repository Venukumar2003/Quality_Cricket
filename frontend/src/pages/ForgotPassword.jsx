import React from "react";
import "./Auth.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {

    const navigate = useNavigate();
  return (
    <div className="auth-page">
        <Navbar />
      <div className="overlay">
        <div className="auth-card">

          <h2>Forget Password</h2>

          <p className="small-text">
            Enter the email address associated with your account
          </p>

          <input placeholder="Email" />

          <button className="main-btn" onClick={()=>navigate("/verify-otp")}>Continue</button>

        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;