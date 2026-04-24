// import React from "react";
// import "../styles/Home.css"



// const Reviews = () => {
//   return (
//     <div className="section">
//       <h2>Customer Reviews</h2>

//       <div className="reviews">
//         <div className="review-card">
//           <p>Very good quality</p>
//           <span>⭐⭐⭐⭐⭐</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reviews;




import React from "react";
import "../styles/Home.css";
// import "./Reviews.css";

const reviewsData = [
  {
    id: 1,
    text: "It's an online shop and we found them accidentally and landed up in their office. They have provided excellent service and I bought the cricket kit for my son.",
    name: "Pranay Shukla",
    role: "Cricket Player",
  },
  {
    id: 2,
    text: "It's an online shop and we found them accidentally and landed up in their office. They have provided excellent service and I bought the cricket kit for my son.",
    name: "Pranay Shukla",
    role: "Cricket Player",
  },
  {
    id: 3,
    text: "It's an online shop and we found them accidentally and landed up in their office. They have provided excellent service and I bought the cricket kit for my son.",
    name: "Pranay Shukla",
    role: "Cricket Player",
  },
  {
    id: 4,
    text: "It's an online shop and we found them accidentally and landed up in their office. They have provided excellent service and I bought the cricket kit for my son.",
    name: "Pranay Shukla",
    role: "Cricket Player",
  },
];

const Reviews = () => {
  return (
    <div className="review-section">
      <h2>Customer Reviews</h2>
      <p className="sub">What our customer say about quality cricket</p>

      <div className="review-grid">
        {reviewsData.map((item) => (
          <div className="review-card" key={item.id}>
            
            {/* QUOTE */}
            <div className="quote">“</div>

            {/* TEXT */}
            <p className="review-text">{item.text}</p>

            {/* USER */}
            <div className="user">
              <img
                src="https://i.pravatar.cc/40"
                alt="user"
              />
              <div>
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>

            {/* STARS */}
            <div className="stars">⭐⭐⭐⭐⭐</div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;