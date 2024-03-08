// import React, { useState, useEffect } from 'react';
// import "./genericPgePartherWithus.scss"

// interface ApiData {
//     heading: string;
//     subHeading: string;
//     description: string;
// }

// interface CardData {
//     id: number;
//     attributes: {
//         heading: string;
//         description: string;
//         buttonName: string;
//         buttonLink: string;
//         image: {
//             data: {
//                 url: string;
//             }
//         }
//     }
// }

// const GenericPgePartherWithus: React.FC = () => {
//     const [apiData, setApiData] = useState<ApiData | null>(null);
//     const [apiCards, setApiCards] = useState<CardData[]>([]);

//     useEffect(() => {
//         fetch('https://377a-119-73-112-80.ngrok-free.app/api/generic-solutions')
//             .then(response => response.json())
//             .then(data => {
//                 setApiData(data.data[0].attributes);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });

//         fetch('https://377a-119-73-112-80.ngrok-free.app/api/generic-solution-cards?populate=*')
//             .then(response => response.json())
//             .then(data => {
//                 setApiCards(data.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);

//     return (
//         <>
//             <div className="genericPgePartherWithus">
//                 <div className="genericPgePartherWithus-bg-div">
//                     <div className="heading">
//                         {apiData && (
//                             <>
//                                 <h2>{apiData.heading}</h2>
//                                 <h3>{apiData.subHeading}</h3>
//                                 <p>{apiData.description}</p>
//                             </>
//                         )}
//                     </div>

//                     <div className="card-genericPgePartherWithus">
//                         {apiCards.map(card => (
//                             <div className="cardgenericPgePartherWithus" key={card.id}>
//                                 <img src={card.attributes.image.data.url} alt={card.attributes.heading} className="cardgenericPgePartherWithus-logo" />                                <h3 className="genericPgePartherWithus-heading">{card.attributes.heading}</h3>
//                                 <p className="genericPgePartherWithus-description">{card.attributes.description}</p>
//                                 <button className="genericPgePartherWithus-read-more">{card.attributes.buttonName}</button>
//                             </div>
//                         ))}
//                     </div>
//                     <button className='ViewAll-btn'>ViewAll</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default GenericPgePartherWithus;




import React, { useState, useEffect } from 'react';
import "./genericPgePartherWithus.scss"
import apiUrl from "../../config/strApiUrl";
import { ApiData, CardData } from "./GenericPgePartherWithus.d"


const GenericPgePartherWithus: React.FC = () => {
    const [apiData, setApiData] = useState<ApiData | null>(null);
    const [apiCards, setApiCards] = useState<CardData[]>([]);
    const [showAll, setShowAll] = useState<boolean>(false);
    // const response = await axios.get<AboutResponse>(
    //     `${apiUrl}/api/abouts`
    //   );

    useEffect(() => {
        // fetch('https://d4d7-119-73-112-193.ngrok-free.app/api/generic-solutions')
        fetch(`${apiUrl}/api/generic-solutions`)
            .then(response => response.json())
            .then(data => {
                setApiData(data.data[0].attributes);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

        // fetch('https://d4d7-119-73-112-193.ngrok-free.app/api/generic-solution-cards?populate=*')
        fetch(`${apiUrl}/api/generic-solution-cards?populate=*`)
            .then(response => response.json())
            .then(data => {
                setApiCards(data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    useEffect(() => {
        console.log('API Cards:', apiCards);
    }, [apiCards]);

    const handleViewAll = () => {
        setShowAll(true);
    };

    return (
        <>
            <div className="genericPgePartherWithus">
                <div className="genericPgePartherWithus-bg-div">
                    <div className="heading">
                        {apiData && (
                            <>
                                <h2>{apiData.heading}</h2>
                                <h3>{apiData.subHeading}</h3>
                                <p>{apiData.description}</p>
                            </>
                        )}
                    </div>

                    <div className="card-genericPgePartherWithus">
                        {apiCards.map((card, index) => (
                            <div className="cardgenericPgePartherWithus" key={card.id} style={{ display: (showAll || index < 3) ? 'block' : 'none' }}>
                                <img src={card.attributes.image.data.url} alt={card.attributes.heading} className="cardgenericPgePartherWithus-logo" />
                                <h3 className="genericPgePartherWithus-heading">{card.attributes.heading}</h3>
                                <p className="genericPgePartherWithus-description">{card.attributes.description}</p>
                                <button className="genericPgePartherWithus-read-more">{card.attributes.buttonName}</button>
                            </div>
                        ))}
                    </div>
                    {!showAll && (
                        <button className='ViewAll-btn' onClick={handleViewAll}>View All</button>
                    )}
                </div>
            </div>
        </>
    )
}

export default GenericPgePartherWithus;


