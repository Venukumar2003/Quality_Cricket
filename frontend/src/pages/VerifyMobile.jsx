// import React from "react";
// import "./Auth.css";
// import Navbar from "../components/Navbar";

// const VerifyMobile = () => {
//   return (
//     <div className="auth-page">
//         <Navbar />
//       <div className="overlay">
//         <div className="auth-card">

//           <h2>Verify Mobile Number</h2>

//           <p className="small-text">
//             We have send OTP to your number
//           </p>

//           <div className="otp-container">
//             {[1,2,3,4,5,6].map((_,i)=>(
//               <input key={i} />
//             ))}
//           </div>

//           <button className="main-btn">Verify</button>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerifyMobile;




import React, { useRef, useState } from "react";
import "./Auth.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import loginBg from "../assets/login.svg";

const VerifyMobile = () => {

    const navigate = useNavigate();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  // input change
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return; // numbers only

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // next box ki move
    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  // backspace handling
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="auth-page"
    style={{
        backgroundImage: `url(${loginBg})`,
      }}>
      <Navbar />

      <div className="overlay">
        <div className="auth-card">

          <h2>Verify Mobile Number</h2>

          <p className="small-text">
            We have send OTP to your number
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

          <button className="main-btn" onClick={()=>navigate("/home")}>Verify</button>

        </div>
      </div>
    </div>
  );
};

export default VerifyMobile;