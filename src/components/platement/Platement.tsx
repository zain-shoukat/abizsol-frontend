import React, { useState, useEffect } from 'react';
import "./Platement.scss"
import Rectangle5592 from "../../assets/Rectangle 5592.png"
import { Collapse, Image } from 'antd';
import apiUrl from "../../config/strApiUrl";
import { ProductData, QAData } from "./platement.d"



const { Panel } = Collapse;

const Platement = () => {
  const [data, setData] = useState<ProductData | null>(null);
  const [qaData, setQAData] = useState<QAData[]>([]);

  useEffect(() => {
    // fetch('https://d4d7-119-73-112-193.ngrok-free.app/api/generic-product?populate=*')
    fetch(`${apiUrl}/api/generic-product?populate=*`)

      .then(response => response.json())
      .then(data => {
        setData(data.data.attributes);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    // fetch('https://d4d7-119-73-112-193.ngrok-free.app/api/generic-question-answers')
    fetch(`${apiUrl}/api/generic-question-answers`)

      .then(response => response.json())
      .then(data => {
        setQAData(data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <>
      <div className='platementWrapper'>
        <div className="placement-container">

          <div className="placement-content">
            {data && (
              <>
                <h3>{data.subHeading}</h3>
                <h2>{data.heading}</h2>
                <p>{data.description}</p>
              </>
            )}
          </div>
        </div>
        <div className="placement-details">
          <div className="placement-image">
            <img src={Rectangle5592} alt="Rectangle 5592" />
          </div>
          {/* <div className="placement-image">
            {data && (
              <img src={data.image.data.url} alt={data.heading} />
            )}
          </div> */}
          <div className="placement-accordion">
            <Collapse defaultActiveKey={['1']}>
              {qaData.map((item, index) => (
                <Panel header={`0${index + 1}: ${item.attributes.question}`} key={item.id.toString()}>
                  <p>{item.attributes.answer}</p>
                </Panel>
              ))}
            </Collapse>
          </div>
        </div>
      </div>
    </>
  );
}

export default Platement;

