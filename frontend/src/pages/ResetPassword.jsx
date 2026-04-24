import React,{useState} from "react";
import "./Auth.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import loginBg from "../assets/login.svg";


const ResetPassword = () => {

    const navigate = useNavigate();

    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")

    const handleSave = ()=>{
      if(!password || !confirmPassword){
        alert("Please enter all fields")
        return;
      }
      if(password !== confirmPassword){
        alert ("Passwords do not match")
        return;
      }

      if(password.length < 6){
        alert("Password must be 6 characters")
        return;
      }
      console.log("Valid Password")

      setPassword("")
      setConfirmPassword("")

      navigate("/login")


    };

  return (
    <div className="auth-page"
    style={{
        backgroundImage: `url(${loginBg})`,
      }}>
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

          <input type = "password"
          placeholder="New Password" 
          value={password}
          onChange={(e)=> setPassword(e.target.value)}/>
          
          <input type="password"
           placeholder="Confirm Password" 
           value={confirmPassword}
          onChange={(e)=> setConfirmPassword(e.target.value)}
          />

          <button className="main-btn" onClick={handleSave}>Save</button>

        </div>
      </div>
    </div>
  );
};

export default ResetPassword;