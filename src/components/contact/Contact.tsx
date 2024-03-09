import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Contact.scss";
import apiUrl from "../../config/strApiUrl";

interface ContactData {
  title: string;
  description: string;
}

const Contact: React.FC = () => {
  const [contactData, setContactData] = useState<ContactData[]>([]); // Keep as ContactData[]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/contant-banner`);
        const newData: ContactData = {
          title: response?.data?.data?.attributes.heading,
          description: response?.data?.data?.attributes.description,
        };
        setContactData([...contactData, newData]);

      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {contactData?.map((item:any, index:any) => (
        <div className="main-contactus-page" key={index}>
          <div className="inner-contactus-bg">
            <div className="main-name-contactus">{item?.title}</div>
            <div className="subheading-contactus">{item?.description}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Contact;


