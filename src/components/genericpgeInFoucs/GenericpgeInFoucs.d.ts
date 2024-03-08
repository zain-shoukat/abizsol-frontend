export interface FocusData {
  heading: string;
  subHeading: string;
  description: string;
}

export interface CardData {
  id: number;
  attributes: {
    heading: string;
    description: string;
    image: {
      data: {
        url: string;
      };
    };
  };
}
