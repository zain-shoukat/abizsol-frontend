export interface ApiData {
    heading: string;
    subHeading: string;
    description: string;
}

export interface CardData {
    id: number;
    attributes: {
        heading: string;
        description: string;
        buttonName: string;
        buttonLink: string;
        image: {
            data: {
                url: string;
            }
        }
    }
}
