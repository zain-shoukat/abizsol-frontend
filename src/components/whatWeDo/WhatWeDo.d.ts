export interface WhatWeDoData {
    id: number;
    attributes: {
      heading: string;
      subHeading?: string; 
      description: string;
      logo?: string; 
      cardHeading?: string; 
      linkName?: string;
      cardDescription?: string; 
    };
  }