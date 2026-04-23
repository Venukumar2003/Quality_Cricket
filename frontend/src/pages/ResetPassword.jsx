import React from "react";
import "./Auth.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {

    const navigate = useNavigate();
  return (
    <div className="auth-page">
        <Navbar />
      <div className="overlay">
        <div className="auth-card">

          <h2>Create Password</h2>
          <h4 className="password">Password must have </h4>
          <ul className="password-list">
            <li> have atleast 8 characters</li>
            <li> have atleast one upper case</li>
            <li> have atleast one speial Character (!,%,@,#,&,* etc.)</li>
          </ul>

          <input placeholder="New Password" />
          <input placeholder="Confirm Password" />

          <button className="main-btn" onClick={()=>navigate("/login")}>Save</button>

        </div>
      </div>
    </div>
  );
};

export default ResetPassword;