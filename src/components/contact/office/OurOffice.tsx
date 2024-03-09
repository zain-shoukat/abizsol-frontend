import React, { useState, useEffect} from "react";
import "./OurOffice.scss";
import saudiaImg from "../../../assets/saudi.svg";
import pakistanImg from "../../../assets/pakist.svg";
import axios from "axios";
import apiUrl from "../../../config/strApiUrl";

interface OfficeLocation {
  name: string;
  image: string;
  address: string;
  phoneNumber: string;
}



const OurOffice: React.FC = () => {

  const [locations, setLocations] = useState<any>([]);
  const [companyLocation, setCompanyLocation] = useState<any>([]);


  useEffect(() => {
    axios.get(`${apiUrl}/api/location-discription`)
      .then(response => {
        setLocations(response.data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  useEffect(() => {
    axios.get(`${apiUrl}/api/company-locations`)
      .then(response => {
        setCompanyLocation(response);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  console.log("hi",companyLocation?.data?.data)

  return (
    <div className="location-wrapper">
      <div className="inner-location-wrapper">
      <div className="txr-officeour">{locations?.data?.attributes?.subHeading}</div>
      <div className="head-location">{locations?.data?.attributes?.heading}</div>
      <div className="desc-location">{locations?.data?.attributes?.description}</div>

        <div className="map-wrapper">
          <div className="map-flex">
          {companyLocation?.data?.data.map((office: any, index: any) => (
              <div key={index} className="flag-flex-width">
                <div>
                  <img className="mapImg-size" src={pakistanImg} alt="" />
                </div>
                <div className="map-location-text">
                  <div className="flag-name">{office?.attributes?.companyName}</div>
                  <div className="map-address">{office?.attributes?.companyAddress}</div>
                  <div className="office-nmbr">{office?.attributes?.companyNumber}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurOffice;
