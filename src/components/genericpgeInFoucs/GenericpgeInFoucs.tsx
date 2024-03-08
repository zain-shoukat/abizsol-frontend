// import React, { useState, useEffect } from 'react';
// import "./genericpgeInFoucs.scss"
// import Rectangle5591 from "../../assets/Rectangle 5591.png"
// interface FocusData {
//     heading: string;
//     subHeading: string;
//     description: string;
// }
// interface CardData {
//     id: number;
//     attributes: {
//         heading: string;
//         description: string;
//         image: {
//             data: {
//                 url: string;
//             }
//         }
//     }
// }
// const GenericpgeInFoucs = () => {
//     const [cardsData, setCardsData] = useState([]);
//     const [focusData, setFocusData] = useState<FocusData | null>(null);

//     useEffect(() => {
//         fetch('https://377a-119-73-112-80.ngrok-free.app/api/generic-focus')
//             .then(response => response.json())
//             .then(data => {
//                 setFocusData(data.data.attributes);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);
//     useEffect(() => {
//         fetch('https://377a-119-73-112-80.ngrok-free.app/api/generic-focus-cards?populate=*')
//             .then(response => response.json())
//             .then(data => {
//                 setCardsData(data.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);
//     return (
//         <>
//             <div className="genericpgeInFoucs">

//                 {/* <div className="genericpgeInFoucsCooo">
//                     <h2>In focus</h2>
//                     <h3>Lorem ipsum dolor sit amet</h3>
//                     <p>At aBizSol, we take pride in being at the forefront of digital innovation. Established in [Year of Establishment], our journey has been marked by a relentless pursuit of excellence. We are a team of passionate developers, designers</p>
//                 </div> */}
//                 <div className="genericpgeInFoucsCooo">
//                     {focusData && (
//                         <>
//                             <h2>{focusData.heading}</h2>
//                             <h3>{focusData.subHeading}</h3>
//                             <p>{focusData.description}</p>
//                         </>
//                     )}
//                 </div>
//                 {/* <div className="card-row">
//                     <div className='cardInFoucs' >
//                         <img src={Rectangle5591} alt="Rectangle5591 1" />
//                         <h2>CIEM: Enabling Enhanced Cybersecurity in Banks White Paper | 22 Jan 2024</h2>
//                         <p>Data-driven, automation-led suite to rethink customer interactions across key service areas </p>
//                     </div>
//                     <div className='cardInFoucs'>
//                         <img src={Rectangle5591} alt="Rectangle5591 2" />
//                         <h2>CIEM: Enabling Enhanced Cybersecurity in Banks White Paper | 22 Jan 2024</h2>
//                         <p>Data-driven, automation-led suite to rethink customer interactions across key service areas</p>
//                     </div>
//                     <div className='cardInFoucs'>
//                         <img src={Rectangle5591} alt="Rectangle5591 3" />
//                         <h2>CIEM: Enabling Enhanced Cybersecurity in Banks White Paper | 22 Jan 2024</h2>
//                         <p> Data-driven, automation-led suite to rethink customer interactions across key service areas</p>
//                     </div>
//                 </div> */}
//                 <div className="card-row">
//                     {cardsData.map(card => (
//                         <div className='cardInFoucs' key={card.id}>
//                             <img src={card.attributes.image.data.url} alt={card.attributes.heading} />
//                             <h2>{card.attributes.heading}</h2>
//                             <p>{card.attributes.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//         </>
//     )
// }

// export default GenericpgeInFoucs




import React, { useState, useEffect } from 'react';
import "./genericpgeInFoucs.scss";
import Rectangle5591 from "../../assets/Rectangle 5591.png";
import apiUrl from "../../config/strApiUrl";
import { FocusData, CardData } from "./GenericpgeInFoucs.d"

const GenericpgeInFoucs = () => {
    const [cardsData, setCardsData] = useState<CardData[]>([]);
    const [focusData, setFocusData] = useState<FocusData | null>(null);

    useEffect(() => {
        // fetch('https://d4d7-119-73-112-193.ngrok-free.app/api/generic-focus')
        fetch(`${apiUrl}/api/generic-focus`)


            .then(response => response.json())
            .then(data => {
                setFocusData(data.data.attributes);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        fetch(`${apiUrl}/api/generic-focus-cards?populate=*`)

            .then(response => response.json())
            .then(data => {
                setCardsData(data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="genericpgeInFoucs">
            <div className="genericpgeInFoucsCooo">
                {focusData && (
                    <>
                        <h2>{focusData.heading}</h2>
                        <h3>{focusData.subHeading}</h3>
                        <p>{focusData.description}</p>
                    </>
                )}
            </div>
            <div className="card-row">
                {cardsData.map(card => (
                    <div className='cardInFoucs' key={card.id}>
                        <img src={card.attributes.image.data.url} alt={card.attributes.heading} />
                        <h2>{card.attributes.heading}</h2>
                        <p>{card.attributes.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GenericpgeInFoucs;
