export interface AboutData {
    heading: string;
    subHeading: string;
    description: string;
    image: {
      url: string;
    };
  }
  
 export interface AboutResponse {
    data: {
      attributes: AboutData;
    }[];
  }