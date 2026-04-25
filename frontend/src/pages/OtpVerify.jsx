// import React from "react";
// import "./Auth.css";
// import Navbar from "../components/Navbar";

// const OtpVerify = () => {
//   return (
//     <div className="auth-page">
//         <Navbar />
//       <div className="overlay">
//         <div className="auth-card">

//           <h2>Login</h2>

//           <p className="small-text">
//             We have send the OTP to your mobile number
//           </p>

//           <div className="otp-container">
//             {[1,2,3,4,5,6].map((_,i)=>(
//               <input key={i} maxLength="1" />
//             ))}
//           </div>

//           <button className="main-btn">Login</button>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default OtpVerify;




import React, { useRef, useState } from "react";
import "./Auth.css";
import axios from "axios";
import Navbar from "../components/Navbar";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import loginBg from "../assets/login.svg";

import { useLocation } from "react-router-dom";



const OtpVerify = () => {


  const {state} = useLocation();
  const email = state ?.email;

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  const navigate = useNavigate();

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return; // only numbers allow

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // move to next input
    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // move back on backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleLogin = async () => {
    try {
      const finalOtp = otp.join("");

      const res =  await axios.post("http://localhost:5000/api/auth/verify-otp", {
        email,
        otp: finalOtp
      });

       if (res.data.success) {
      alert("Verify OTP Successfully");
      navigate("/reset-password", {state : {email}});
    }else{
      aler("Invalid OTP")
    }


    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="auth-page"
      style={{
        backgroundImage: `url(${loginBg})`,
      }}>
      <Navbar />

      <div className="overlay">
        <div className="auth-card">

          <h2>Verify OTP</h2>

          <p className="small-text">
            We have send the OTP to your E-Mail
          </p>

          <div className="otp-container">
            {otp.map((digit, index) => (
              <input
                key={index}
                maxLength="1"
                value={digit}
                ref={(el) => (inputsRef.current[index] = el)}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>

          <button className="main-btn" type="submit" onClick={handleLogin}>Verify</button>

        </div>
      </div>
    </div>
  );
};

export default OtpVerify;