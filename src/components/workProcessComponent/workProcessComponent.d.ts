export interface ProcessData {
    heading: string;
    subHeading: string;
    description: string;
}
export interface CardData {
    id: number;
    attributes: {
        name: string;
        image: {
            data: {
                url: string
            }
        }
    }
}