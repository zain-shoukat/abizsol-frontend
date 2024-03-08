
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./WhatWeDo.css";
// import Group from "../../assets/Group.png";
// import Groupp1 from "../../assets/Group (1).png";
// import Group2 from "../../assets/Group (2).png";
// import Group3 from "../../assets/Group (3).png";
// import Group4 from "../../assets/Group (4).png";
// import Group5 from "../../assets/Group (5).png";

// // Interfaces for the data structure
// interface Attributes {
//   heading: string;
//   subHeading: string;
//   description: string;
// }

// interface WhatWeDoData {
//   id: number;
//   attributes: Attributes;
// }

// const WhatWeDo: React.FC = () => {
//   const [data, setData] = useState<WhatWeDoData[]>([]);
// const whatWeDodata = [
//   {
//     id: 1,
//     logo: Group,
//     cardHeading: "Web Design & Development",
//     cardDescription:
//       "Lorem ipsum dolor sit amet consectetur. Elit sem neque.",
//   },
//   {
//     id: 2,
//     logo: Groupp1,
//     cardHeading: "Mobile App Development",
//     cardDescription:
//       "Lorem ipsum dolor sit amet consectetur. Elit sem neque.",
//   },
//   {
//     id: 3,
//     logo: Group2,
//     cardHeading: "Product Development",
//     cardDescription:
//       "Lorem ipsum dolor sit amet consectetur. Elit sem neque.",
//   },
//   {
//     id: 4,
//     logo: Group3,
//     cardHeading: "Digitalization",
//     cardDescription:
//       "Automate manual business processes and optimize the customer experience for better efficiency and engagement. We implement intelligent digital platforms and solutions that drive productivity.",
//   },
//   {
//     id: 5,
//     logo: Group4,
//     cardHeading: "Modernization",
//     cardDescription:
//       "Unleash the value of your existing technology by re-architecting it for the future. We help you modernize platforms and applications for high performance, better user experience, scale, and security.",
//   },
//   {
//     id: 6,
//     logo: Group5,
//     cardHeading: "Innovation",
//     cardDescription:
//       "We design transformational digital products and experiences that drive real business value and customer impact — so you can create innovative products faster and at scale",
//   },
// ];

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get<{ data: WhatWeDoData[] }>(
//         "https://9fbf-119-73-112-49.ngrok-free.app/api/what-we-dos"
//       );
//       setData(response.data.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <div className="WhatWeDo00">
//       <div className="background-div">
//         {data.length > 0 ? (
//           data.map((item) => (
//             <div key={item.id} className="heading">
//               <h2>{item.attributes.heading}</h2>
//               <h3>{item.attributes.subHeading}</h3>
//               <p>{item.attributes.description}</p>
//             </div>
//           ))
//         ) : (
//           <p>Loading...</p>
//         )}

//         <div className="card-WhatWeDo">
//           {whatWeDodata.map((item) => (
//             <div className="cardWhatWeDo" key={item.id}>
//               <img src={item.logo} alt="Logo" className="cardWhatWeDord-logo" />
//               <h3 className="cardWhatWeDord-heading">{item.cardHeading}</h3>
//               <p className="cardWhatWeDo-description">{item.cardDescription}</p>
//               <button className="read-more">Read More</button>
//             </div>
//           ))}
//         </div>
//         <button className="ViewAll-btn">View All</button>
//       </div>
//     </div>
//   );
// };

// export default WhatWeDo;



import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WhatWeDo.css";
import Group from "../../assets/Group.png";
import Groupp1 from "../../assets/Group (1).png";
import Group2 from "../../assets/Group (2).png";
import Group3 from "../../assets/Group (3).png";
import Group4 from "../../assets/Group (4).png";
import Group5 from "../../assets/Group (5).png";
import { WhatWeDoData } from "./WhatWeDo.d"
import apiUrl from "../../config/strApiUrl";


const WhatWeDo: React.FC = () => {
  const [data, setData] = useState<WhatWeDoData[]>([]);
  const [cardData, setCardData] = useState<WhatWeDoData[]>([]);
  const whatWeDodata = [
    {
      id: 1,
      logo: Group,

    },
    {
      id: 2,
      logo: Groupp1,

    },
    {
      id: 3,
      logo: Group2,

    },
    {
      id: 4,
      logo: Group3,

    },
    {
      id: 5,
      logo: Group4,

    },
    {
      id: 6,
      logo: Group5,

    },
  ];
  useEffect(() => {
    fetchDataFromWhatWeDo();
    fetchDataFromWhatWeDoCards();
  }, []);

  const fetchDataFromWhatWeDo = async () => {
    try {
      const response = await axios.get<{ data: WhatWeDoData[] }>(
        // "https://9fbf-119-73-112-49.ngrok-free.app/api/what-we-dos"
        `${apiUrl}/api/what-we-dos`

      );
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data from WhatWeDo:", error);
    }
  };

  const fetchDataFromWhatWeDoCards = async () => {
    try {
      const response = await axios.get<{ data: WhatWeDoData[] }>(
        `${apiUrl}/api/what-we-docards`

      );
      setCardData(response.data.data);
    } catch (error) {
      console.error("Error fetching data from WhatWeDoCards:", error);
    }
  };

  return (
    <div className="WhatWeDo00">
      <div className="background-div">
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="heading">
              <h2>{item.attributes.heading}</h2>
              {item.attributes.subHeading && <h3>{item.attributes.subHeading}</h3>}
              <p>{item.attributes.description}</p>
            </div>
          ))
        ) : (
          <p>Loading WhatWeDo data...</p>
        )}

        <div className="card-WhatWeDo">
          {cardData.length > 0 ? (
            cardData.map((item) => (
              <div className="cardWhatWeDo" key={item.id}>
                <img src={item.attributes.logo} alt="Logo" className="cardWhatWeDord-logo" />
                <h3 className="cardWhatWeDord-heading">{item.attributes.heading}</h3>
                <p className="cardWhatWeDo-description">{item.attributes.description}</p>
                <button className="read-more">{item.attributes.linkName}</button>
              </div>
            ))
          ) : (
            <p>Loading card data...</p>
          )}
        </div>



      </div>
    </div>
  );
};

export default WhatWeDo;
