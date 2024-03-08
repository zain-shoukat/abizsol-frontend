export interface WorkProcessData {
  heading: string;
  subHeading: string;
  description: string;
}
export interface WorkCardData {
  id: number;
  attributes: {
    heading: string;
    description: string;
  };
}
