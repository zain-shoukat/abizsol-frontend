import React, { useState, useEffect } from "react";
import axios from "axios";
import Rectangle5555 from "../../assets/Rectangle 5555.png";
import Rectangle5539 from "../../assets/Rectangle 5539.png";
import Rectangle5540 from "../../assets/Rectangle 5540.png";
import Rectangle5541 from "../../assets/Rectangle 5541.png";
import Rectangle5542 from "../../assets/Rectangle 5542.png";
import Rectangle5545 from "../../assets/Rectangle 5545.png";
import Rectangle5546 from "../../assets/Rectangle 5546.png";
import "./LogoRow.css";
import apiUrl from "../../config/strApiUrl";
import { AboutData, AboutResponse } from "./LogoRow.d"



const LogoRow: React.FC = () => {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get<AboutResponse>(
          `${apiUrl}/api/abouts`
        );

        const { data } = response.data;

        if (data && data.length > 0) {
          const aboutData = data[0].attributes;
          if (aboutData) {
            setAboutData(aboutData);
          } else {
            console.error("Error: About data attributes are undefined");
          }
        } else {
          console.error("Error: No data received from the API");
        }
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <>
      <div className="main-LogoRow">
        <div className="row-LogoRow">
          <img src={Rectangle5539} alt="Logo 1" />
          <img src={Rectangle5540} alt="Logo 2" />
          <img src={Rectangle5541} alt="Logo 1" />
          <img src={Rectangle5542} alt="Logo 2" />
          <img src={Rectangle5545} alt="Logo 1" />
          <img src={Rectangle5546} alt="Logo 2" />
        </div>
      </div>

      {aboutData && (
        <div className="landingpage6-main-div">
          <div className="left-main-conatiner-page6">
            <div className="heading-div-page6">{aboutData.heading}</div>
            <div className="title-div-page6">
              {aboutData.subHeading}{" "}
              <span style={{ color: "#10BAAC" }}>2020</span>
            </div>
            <div className="description-div-page6">{aboutData.description}</div>
            <div>
              <button className="container-btn">Discover Our Expertise</button>
            </div>
          </div>
          <div className="right-main-conatiner-page6">
            <img className="pg6-img" src={Rectangle5555} alt="Privacy-Img" />
          </div>
        </div>
      )}
    </>
  );
};

export default LogoRow;
