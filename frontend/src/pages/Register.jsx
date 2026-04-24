import React, { useState } from "react";
import "./Auth.css";
import Navbar from "../components/Navbar";
import {useNavigate } from "react-router-dom";
import loginBg from "../assets/login.svg";


const Register = () => {

  const [name,setName] = useState("");
  const [mobile,setMobile] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");


    const navigate = useNavigate();


    const handleSave =async()=>{
      console.log(name,mobile,email,password);

      if(!name || !email || !mobile || !password){
        alert("Please fill all fields")
        return;
      }
      if(mobile.length !==10){
        alert("Enter valid phone number");
        return;
      }
       if (password.length < 6) {
    alert("Password must be 6 characters");
    return;
  }


   try {
    const res = await axios.post("http://localhost:5000/register", {
      name,
      email,
      mobile,
      password,
    });

    if (res.data.success) {
      alert("Registered Successfully");
      navigate("/login");
    }

  } catch (err) {
    console.log(err);
  }


      setName("")
      setEmail("")
      setMobile("")
      setPassword("")

navigate("/login");

    }

  return (
    <div className="auth-page"
    style={{
        backgroundImage: `url(${loginBg})`,
      }}>
        <Navbar />
      <div className="overlay">
        <div className="auth-card">

          <h2>Create Account</h2>

          <input type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}  />
          
          <input type="number"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e)=>setMobile(e.target.value)}  />

          <input type="email"
          placeholder="Email" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)} />

          <input type="password"
           placeholder="Password"
           value={password}
           onChange={(e)=>setPassword(e.target.value)} />

          <button className="main-btn" onClick={handleSave}>Continue</button>

        </div>
      </div>
    </div>
  );
};

export default Register;