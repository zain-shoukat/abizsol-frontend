import React, { useState, useEffect } from 'react';
import "./WorkProcessComponent.scss"
import Rectangle55991 from "../../assets/Rectangle 5591 (1).png"
import apiUrl from "../../config/strApiUrl";
import { ProcessData, CardData } from "./workProcessComponent.d"

const WorkProcessComponent = () => {
    const [processData, setProcessData] = useState<ProcessData | null>(null);
    const [cardData, setCardData] = useState<CardData[]>([]);

    useEffect(() => {
        fetch(`${apiUrl}/api/generic-process-cards?populate=*`)

            .then(response => response.json())
            .then(data => {
                setCardData(data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        fetch(`${apiUrl}/api/generic-process`)

            .then(response => response.json())
            .then(data => {
                setProcessData(data.data.attributes);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <>
            <div className="work-process-component">

                <div className="work-process-left-content">
                    {processData && (
                        <>
                            <h2>{processData.heading}</h2>
                            <h3>{processData.subHeading}</h3>
                            <p>{processData.description}</p>
                        </>
                    )}
                </div>

            </div>
            {/* <div className="your-row-container">
                <div className="column">
                    <img src={Rectangle55991} alt="Rectangle55991 1" />
                    <h3>Congrative business  </h3>
                </div>
                <div className="column">
                    <img src={Rectangle55991} alt="Rectangle55991 2" />
                    <h3>Congrative business  </h3>
                </div>
                <div className="column">
                    <img src={Rectangle55991} alt="Rectangle55991 3" />
                    <h3>Congrative business  </h3>
                </div>
            </div> */}
            <div className="your-row-container">
                {cardData.map(item => (
                    <div className="column" key={item.id}>
                        <img src={item.attributes.image.data.url} alt={`Rectangle55991 ${item.id}`} />
                        <h3>{item.attributes.name}</h3>
                    </div>
                ))}
            </div>
        </>

    );
};

export default WorkProcessComponent;
