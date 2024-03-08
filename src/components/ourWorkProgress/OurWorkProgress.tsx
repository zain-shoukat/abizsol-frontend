import "./OurWorkProgress.css";
import React, { useState, useEffect } from 'react';
import apiUrl from "../../config/strApiUrl";
import { WorkProcessData, WorkCardData } from "./OurWorkProgress.d"
import Group1484578522 from "../../assets/Group 1484578522.png";


const OurWorkProgress = () => {
  const [workProcessData, setWorkProcessData] = useState<WorkProcessData | null>(null);
  const [workCardsData, setWorkCardsData] = useState<WorkCardData[]>([]); useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/our-work-processes`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        const attributes = responseData.data[0].attributes;
        console.log('Fetched attributes:', attributes);
        setWorkProcessData({
          heading: attributes.heading,
          subHeading: attributes.subHeading,
          description: attributes.description
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://d4d7-119-73-112-193.ngrok-free.app/our-work-process-cards');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setWorkCardsData(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  return (
    <div className="OurWOrkProgressMian">
      {workProcessData && (
        <div className="heading">
          <h2>{workProcessData.heading}</h2>
          <h3>{workProcessData.subHeading}</h3>
          <p>{workProcessData.description}</p>
        </div>
      )}



      <div className="OurWorkProgressWrapper" >
        <div className="custom-row">
          <div className="custom-container">
            <h2 className="custom-heading">Design & Development</h2>
            <p className="custom-description">
              Bring your vision to life with our creative design team, crafting
              visually stunning and intuitive interfaces. <br />
              Implement cutting-edge technologies and agile development
              methodologies for efficient and effective solutions.
            </p>
          </div>
        </div>

        <div className="outer-container">
          <div className="inneContainer">
            <h2 className="custom-heading">Design & Development</h2>
            <p className="custom-description">
              Bring your vision to life with our creative design team, crafting
              visually stunning and intuitive interfaces. <br />
              Implement cutting-edge technologies and agile development
              methodologies for efficient and effective solutions.
            </p>
          </div>
          <div className="inneContainer">
            <div className="imageContainer">
              <img
                src={Group1484578522}
                alt="Group1484578522"
                className="imgGroup"
              />
            </div>
          </div>
          <div className="inneContainer">
            <h2 className="custom-heading">Design & Development</h2>
            <p className="custom-description">
              Bring your vision to life with our creative design team, crafting
              visually stunning and intuitive interfaces. <br />
              Implement cutting-edge technologies and agile development
              methodologies for efficient and effective solutions.
            </p>
          </div>
        </div>

        <div className="custom-row2">
          <div className="customContainer2">
            {" "}
            <div className="customContainer">
              <h2 className="custom-heading">Design & Development</h2>
              <p className="custom-description">
                Bring your vision to life with our creative design team, crafting
                visually stunning and intuitive interfaces.
              </p>
            </div>
          </div>
          <div className="customContainer2">
            {" "}
            <div className="customContainer">
              <h2 className="custom-heading">Design & Development</h2>
              <p className="custom-description">
                Bring your vision to life with our creative design team, crafting
                visually stunning and intuitive interfaces.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OurWorkProgress;



// import "./OurWorkProgress.css";
// import React, { useState, useEffect } from 'react';

// import Group1484578522 from "../../assets/Group 1484578522.png";

// interface WorkProcessData {
//   heading: string;
//   subHeading: string;
//   description: string;
// }

// interface WorkCardData {
//   heading: string;
//   description: string;
//   image: string; // Assuming image is a URL
//   alt: string; // Assuming alt text for the image
// }

// const OurWorkProgress = () => {
//   const [workProcessData, setWorkProcessData] = useState<WorkProcessData | null>(null);
//   const [workCardsData, setWorkCardsData] = useState<WorkCardData[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://d4d7-119-73-112-193.ngrok-free.app/api/our-work-processes');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const responseData = await response.json();
//         const attributes = responseData.data[0].attributes;
//         console.log('Fetched attributes:', attributes);
//         setWorkProcessData({
//           heading: attributes.heading,
//           subHeading: attributes.subHeading,
//           description: attributes.description
//         });
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://d4d7-119-73-112-193.ngrok-free.app/our-work-process-cards');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setWorkCardsData(data.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="OurWOrkProgressMian">
//       {workProcessData && (
//         <div className="heading">
//           <h2>{workProcessData.heading}</h2>
//           <h3>{workProcessData.subHeading}</h3>
//           <p>{workProcessData.description}</p>
//         </div>
//       )}

//       <div className="OurWorkProgressWrapper">
//         {workCardsData.map((card, index) => (
//           <div key={index} className="outer-container">
//             <div className="inneContainer">
//               <h2 className="custom-heading">{card.heading}dsfghsdfg</h2>
//               <p className="custom-description">{card.description}dsfghsdfg</p>
//             </div>
//             <div className="inneContainer">
//              <div className="imageContainer">
//                {/* <img
//                 src={Group1484578522}
//                 alt="Group1484578522"
//                 className="imgGroup"
//               /> */}
//             </div>
//           </div>
//             <div className="inneContainer">
//               <h2 className="custom-heading">{card.heading}</h2>
//               <p className="custom-description">{card.description}</p>
//             </div>
//           </div>
//         ))}
//         <div className="custom-row2">
//           <div className="customContainer2">
//             <div className="customContainer">
//               <h2 className="custom-heading">{workCardsData[0]?.heading}</h2>
//               <p className="custom-description">{workCardsData[0]?.description}</p>
//             </div>
//           </div>
//           <div className="customContainer2">
//             <div className="customContainer">
//               <h2 className="custom-heading">{workCardsData[1]?.heading}</h2>
//               <p className="custom-description">{workCardsData[1]?.description}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurWorkProgress;

