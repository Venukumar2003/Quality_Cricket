import React, { useState } from "react";
import axios from "axios";
import "./Auth.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

import loginBg from "../assets/login.svg";
const ForgotPassword = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("")


  const handleLogin = async () => {
    try {
     const res =  await axios.post("http://localhost:5000/api/auth/send-otp", { email });
      console.log(res.data);


      if (res.data.success) {
      navigate("/verify-otp", { state: { email } });
    } else {
      alert("Failed to send OTP");
    }


      } catch (error) {
        console.log(error)

      }

    }


  return (
      <div className="auth-page" style={{
        backgroundImage: `url(${loginBg})`,
      }} >

        <Navbar />
        <div className="overlay">
          <div className="auth-card">

            <h2>Forget Password</h2>

            <p className="small-text">
              Enter the email address associated with your account
            </p>

            <input type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)} />

            <button type="button" className="main-btn" onClick={handleLogin}>Continue</button>

          </div>
        </div>
      </div>
    );
  };

  export default ForgotPassword;