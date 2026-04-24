// import React from "react";
// import "../styles/Home.css"

// const About = () => {
//   return (
//     <div className="section">
//       <h2>About Us</h2>
//       <p>
//         We provide high quality cricket products at affordable prices.
//       </p>
//     </div>
//   );
// };

// export default About;




import React from "react";
// import "../styles/Home.css";
import "./About.css"

import aboutImg from "../assets/about.svg"

const About = () => {
  return (
    <div className="about-section">

      {/* LEFT IMAGE */}
      <div className="about-left">
        <img
          src={aboutImg}
          alt="about"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="about-right">

        <h2>About Us</h2>

        <p className="about-desc">
          Select your Bat from our collection of 100’s of actual pictures with weights.
        </p>

        <p>
          Every Bat that arrives in the UAE is weighed, catalogued and uploaded with on Cricketarabla 
          their actual weight and pictures. All items listed online are in stock in the UAE and 
          will be packed & delivered within 48 hours
        </p>

        <h4>Who Are We?</h4>
        <p>
          We are the authorised dealers of MRF Sports Equipment & SS Sports (Sareen Sports Industries)
          in the UAE.We Provide cricketers an easy-to-shop, safe and secure experience with fast deliveries
          at their doorstep
        </p>

        <h4>Why you should buy from us?</h4>
        <p>
          Being a 100 % Dubai bassed e-commerce business and sourcing
           our products direct from the manufacturer,
          We keep our overheads low and pass on savings to customers.
        </p>

      </div>
    </div>
  );
};

export default About;