// // import React, { useState } from "react";
// // import "/Auth.css"
// // import Navbar from "../components/Navbar";

// // const Login = () => {
// //   const [isPhone, setIsPhone] = useState(false);

// //   return (
// //     <div className="login-page">
// //       <Navbar />

// //       <div className="overlay">
// //         <div className="login-card">

// //           <h2>Login</h2>

// //           {/* Toggle */}
// //           <div className="toggle">
// //             <button
// //               className={!isPhone ? "active" : ""}
// //               onClick={() => setIsPhone(false)}
// //             >
// //               Email
// //             </button>
// //             <button
// //               className={isPhone ? "active" : ""}
// //               onClick={() => setIsPhone(true)}
// //             >
// //               Phone Number
// //             </button>
// //           </div>

// //           {/* Inputs */}
// //           {!isPhone ? (
// //             <>
// //               <label>Email</label>
// //               <input type="email" placeholder="enter email" />

// //               <label>Password</label>
// //               <input type="password" placeholder="Enter password" />

// //               <p className="forgot">Forgot Password ?</p>

// //               <button className="login-btn-main">Login</button>
// //             </>
// //           ) : (
// //             <>
// //               <label>Phone Number</label>
// //               <input type="text" placeholder="Enter phone number" />

// //               <button className="login-btn-main">Send OTP</button>
// //             </>
// //           )}

// //           <div className="divider">
// //             <span>New to Quality Cricket</span>
// //           </div>

// //           <button className="create-btn">Create account</button>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;






// import React, { useState } from "react";
// import "./Auth.css";
// import {Link, useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import login from "../assets/login.svg"

// const Login = () => {
//   const [isPhone, setIsPhone] = useState(false);
//   const [email,setEmail] = useState("");
//   const [password,setpassword] = useState("");
//   const [phone,setPhone] = useState("")
// const  navigate = useNavigate();


// const handleLogin = ()=>{
//     console.log(email,password);

//     if(!email || !password){
//       alert("please fill the fields")
//       return;
//     }
//     if(password.length < 6){
//       alert("password must be 6 characters")
//       return;
//     }

//     setEmail("");
//     setpassword("");
//     setPhone("");

//     navigate("/home")
// }


//   return (
//     <div className="auth-page">
//         <Navbar />
// <div 
//   className="auth-page"
//   style={{
//     backgroundImage: `url(${login})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center"
//   }}
// ></div>

//       <div className="overlay">
//         <div className="auth-card">

//           <h2>Login</h2>

//           <div style={{display:"flex"}}>
//             <button onClick={()=>setIsPhone(false)} className="login-email">Email</button>
//             <button onClick={()=>setIsPhone(true)} className="login-phone">Phone</button>
//           </div>

//           {!isPhone ? (
//             <>
//               <input type="email"
//               placeholder="Email" 
//               value = {email}
//               onChange={(e)=>setEmail(e.target.value)} />

//               <input type="password"
//               placeholder="Password" 
//               value={password}
//               onChange={(e)=>setpassword(e.target.value)}/>

//              <p className="small-text-p" onClick={()=> navigate("/forgot-password")}>Forgot Password?</p> 

//               <button className="main-btn" type="submit" onClick={handleLogin} >Login</button>
//             </>
//           ) : (
//             <>
//               <input type="number"
//                placeholder="Phone Number" 
//               value={phone} 
//               onChange={(e)=>setPhone(e.target.value)}/>
//               <button className="main-btn" onClick={()=>navigate("/verify-mobile")}>Send OTP</button>
//             </>
//           )}

//           <p className="small-text">New to Quality Cricket</p>
//           <button className="secondary-btn" onClick={()=> navigate("/register")}>Create account</button>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;





import React, { useState } from "react";
// import "./Auth.css";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import loginBg from "../assets/login.svg";

const Login = () => {
  const [isPhone, setIsPhone] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("please fill the fields");
      return;
    }
    if (password.length < 6) {
      alert("password must be 6 characters");
      return;
    }

    navigate("/home");
  };

  return (
    <div
      className="auth-page"
      style={{
        backgroundImage: `url(${loginBg})`,
      }}
    >
      <Navbar />

      <div className="overlay">
        <div className="auth-card">
          <h2>Login</h2>

          {/* Toggle */}
          <div className="toggle">
            <button
              className={!isPhone ? "active" : ""}
              onClick={() => setIsPhone(false)}
            >
              Email
            </button>
            <button
              className={isPhone ? "active" : ""}
              onClick={() => setIsPhone(true)}
            >
              Phone
            </button>
          </div>

          {/* Inputs */}
          {!isPhone ? (
            <>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />

              <p
                className="small-text-p"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot Password?
              </p>

              <button className="main-btn" onClick={handleLogin}>
                Login
              </button>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <button
                className="main-btn"
                onClick={() => navigate("/verify-mobile")}
              >
                Send OTP
              </button>
            </>
          )}

          <p className="small-text">New to Quality Cricket</p>
          <button
            className="secondary-btn"
            onClick={() => navigate("/register")}
          >
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;