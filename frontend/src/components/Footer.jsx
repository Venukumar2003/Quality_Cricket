// import React from "react";
// import "../styles/Home.css"
// import footerImg from "../assets/footer.svg"


// const Footer = () => {
//   return (
//     <footer className="footer">
//       {/* <h3>QUALITY CRICKET</h3>
//       <p>All cricket products available</p> */}
//       <img src={footerImg} alt="Image" />
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import "./Footer.css"
// import "../styles/Home.css";

import map from "../assets/map.png" 

const Footer = () => {
  return (
    <div className="footer">

      {/* 🔥 CONTAINER */}
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-col">
          <h3>QUALITY CRICKET</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p>📞 236526352632</p>

          <img
            src={map}
            className="map"
          />
        </div>

        {/* MIDDLE */}
        <div className="footer-col">
          <h4>RELATED LINKS</h4>
          <ul>
            <li>Home</li>
            <li>Sale</li>
            <li>Accessories</li>
            <li>All Products</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-col">
          <h4>POLICY</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Shipping Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>

      </div>

      {/* 🔥 SUBSCRIBE */}
      <div className="subscribe">
        <p>Get the latest updates via email.</p>

        <div className="subscribe-box">
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

    </div>
  );
};

export default Footer;