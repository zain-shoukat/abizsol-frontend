export interface FooterItem {
  id: number;
  attributes: {
    name: string;
    footer_navigation_dropdowns: {
      data: {
        id: number;
        attributes: {
          dropdownName: string;
          dropdownLink: string;
        };
      }[];
    };
  };
}

export interface FooterProps {
  about: string;
}
