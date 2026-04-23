import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
import OtpVerify from './pages/OtpVerify';
import VerifyMobile from './pages/VerifyMobile';
import ResetPassword from './pages/ResetPassword';


import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<Login />} />
         <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-mobile" element={<VerifyMobile />} />
        <Route path="/verify-otp" element={<OtpVerify />} />
        <Route path="/reset-password" element={<ResetPassword />} />


         <Route path="/home" element={<Home/>} />
        
      </Routes>
    </Router>
  );
}

export default App;