export interface ProductData {
  heading: string;
  subHeading: string;
  description: string;
  image: {
    data: {
      url: string;
    };
  };
}
export interface QAData {
  id: number;
  attributes: {
    question: string;
    answer: string;
  };
}
