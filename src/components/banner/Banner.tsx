import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Banner.css";
import banner from "../../assets/banner.png";
import apiUrl from "../../config/strApiUrl";
import { BannerData } from "./Banner.d"


const Banner: React.FC = () => {
  const [bannerData, setBannerData] = useState<BannerData | null>(null);

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/api/banners`
        );
        const { data } = response;
        if (data && data.data && data.data.length > 0) {
          const bannerData = data.data[0];
          if (bannerData.attributes) {
            setBannerData(bannerData.attributes);
          } else {
            console.error("Error: Banner data attributes are undefined");
          }
        } else {
          console.error("Error: No data received from the API");
        }
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    fetchBannerData();
  }, []);

  return (
    <div className="bannerDiv">
      {bannerData && (
        <>
          <img className="bannerVIdeo" src={banner} alt="Banner" />
          {/* <img className="banner-video" src={bannerData.image.url} alt="Banner" /> */}
          <div className="overlay"></div>

          <div className="bannercONtent">
            <h1>{bannerData.heading}</h1>
            <h2>{bannerData.subHeading}</h2>
            <p className="bannerContentpara">{bannerData.description}</p>
            <button className="bannercONtent-btnn">Get Started Today</button>
          </div>



        </>
      )}
    </div>
  );
};

export default Banner;


