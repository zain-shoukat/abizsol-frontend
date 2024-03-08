import "./ContactUs.css";
import Rectangle5556 from "../../assets/Rectangle 5556.png";
import React, { useEffect, useState } from 'react';
import apiUrl from "../../config/strApiUrl";
import { TransformationData } from "./Contact.d"
import Frame1686557854 from "../../assets/Frame 1686557854.png"


const ContactUs = () => {

  const [transformationData, setTransformationData] = useState<TransformationData | null>(null);

  useEffect(() => {
    fetch(`${apiUrl}/api/transformation`)

      .then(response => response.json())
      .then(data => setTransformationData(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!transformationData) {
    return <div>Loading...</div>;
  }

  const { heading, description, buttonName, buttonLink } = transformationData.attributes;
  return (
    <div className="contact-container">
      <div className="left-div">
        <img src={Frame1686557854} alt="Frame 1686557854" className="logo-image" />
        <img src={Rectangle5556} alt="Your Image" className="contact-image" />
      </div>
      <div className="right-div">
        <div className="right-content">
          <h2 className="contact-heading">{heading}</h2>
          <p className="contact-description">
            {description}
          </p>

          <a href={buttonLink}><button>{buttonName}</button></a>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;


