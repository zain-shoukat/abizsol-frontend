import { NavItem } from './Navbar.d';
export interface NavItem {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    url: string;
  };
}

export interface DropdownItem {
  name: string;
  // Add other properties as needed
}
export interface NavbarData {
  id: number;
  attributes: {
    name:string;

    dropdwonName: string;
    url: string;
    b?: {
      data: {
        attributes: {
          dropdwonName: string;
        };
      }[];
    };
    c?: {
      data: {
        attributes: {
          heading: string;
          subHeading: string;
          description: string;
          buttonName: string;
          buttonLink: string;
        };
      };
    };
  };
}
