import React from "react";
import "./IndustriesWeServe.css"; 
import logo6 from "../../assets/abisol.png";
const IndustriesWeServe = () => {
  return (
    <div className="industries-container">
      <div className="left-section">
        <div className="centered-content">
          <img src={logo6} alt="Logo6" className="company-logoo" />
          <h2>Industries</h2>
          <h2> We Serve</h2>
        </div>
      </div>
      <div className="right-section">
        <img
          src="https://www.simcoeit.com/static/images/home/industries.gif"
          alt="Industries Gif"
          className="industries-gif"
        />
      </div>
    </div>
  );
};

export default IndustriesWeServe;
