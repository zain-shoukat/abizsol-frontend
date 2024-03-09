import "./ClientAboutUs.scss";
import React, { useState, useEffect} from "react";
import clientProfile from "../../../assets/card.svg";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import { Flex, Rate } from "antd";
import axios from "axios";
import apiUrl from "../../../config/strApiUrl";

const ClientAboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sayclientData, setsayClientData] = useState<any>([]);
  const [clientreviewData, setclientreviewData] = useState<any>([]);


  useEffect(() => {
    axios
      .get(`${apiUrl}/api/client-section`)
      .then((response) => {
        setsayClientData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching client data:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/client-section-cards?populate=*`)
      .then((response) => {
        setclientreviewData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching client data:", error);
      });
  }, []);

  const cardsPerPage = 3;
  const totalSlides = Math.ceil(clientreviewData?.length / cardsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", clientreviewData.data)

  const data = clientreviewData.data;
  const renderClientCards = () => {
    const startIndex = currentSlide * cardsPerPage;
    const endIndex = Math.min(startIndex + cardsPerPage, data?.length);

    return data?.slice(startIndex, endIndex).map((client:any) => (
      <div key={client.id} className="card-client-review">
        <div className="client-imge-name">
          <div>
            <img
              className="client-profile-size"
              src={clientProfile}
              alt="ClientProfile"
            />
          </div>
          <div>
            <div className="client-profile-name">{client?.attributes?.clientName}</div>
            <div>
              <Flex gap="middle" style={{marginTop:"10px"}}>
                <Rate defaultValue={5} allowClear={false} />
              </Flex>
            </div>
          </div>
        </div>
        <div className="card-desc-review">{client?.attributes?.description}</div>
      </div>
    ));
  };

  return (
    <div className="client-about-section">
      <div className="head-clientsayabout">
        <div className="txt-clientsayabout">{sayclientData?.data?.attributes?.heading}</div>
        <div className="decsrp-clientsayabout">
        {sayclientData?.data?.attributes?.description}
        </div>
      </div>
      <div
        className=""
        style={{ display: "flex", flexDirection: "row", gap: "10px" }}
      >
        {renderClientCards()}
      </div>
      <div className="Next-previous">
        <div>
          <FcPrevious onClick={prevSlide} style={{ fontSize: "34px" }} />
        </div>
        <div>
          <FcNext onClick={nextSlide} style={{ fontSize: "34px" }} />
        </div>
      </div>
    </div>
  );
};

export default ClientAboutUs;
