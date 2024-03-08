
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import abizSol from "../../assets/abisol.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";
import apiUrl from "../../config/strApiUrl";
import { NavbarData } from "./Navbar.d"

interface NavItem extends NavbarData {
  isDropdownVisible: boolean;
}

interface NavbarProps {
  logoUrl?: string;
}

const Navbar: React.FC<NavbarProps> = ({ logoUrl }) => {
  console.log(`${apiUrl}${logoUrl}`)
  const [navItems, setNavItems] = useState<any[]>([]);
  const token = "e01e9ec2eadcee5ddd5adea1b83c78dbab5c1a0358948596fb3222a7f4509c3ebe5b100f5ebae40bfc35cb741148b79976999c7e56953986327c88ae88ed76e3cc014762bd47aa002fdd1a46de4bfba697133db57e1a343042b372c2dec7cbde8a0606a74da0ab4a1c4111d0ebdfde33e06250ea2579ba3967792c06a998f7d1";
  const [hoveredItem, setHoveredItem] = useState<any>(null);
  const [prevHoveredItem, setPrevHoveredItem] = useState<any>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://d4d7-119-73-112-193.ngrok-free.app/api/navigations?populate=*", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
        );
        const { data } = response.data;
        console.log("Fetched data:", data);
        const navItemsWithDropdown = data.map((item: NavbarData) => ({
          ...item,
          isDropdownVisible: false,
        }));
        setNavItems(navItemsWithDropdown);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const handleMouseEnter = (index: number) => {
    setNavItems((prevNavItems) =>
      prevNavItems.map((item, i) => ({
        ...item,
        isDropdownVisible: i === index,
      }))
    );
    setPrevHoveredItem(null)
    setHoveredItem(null)

  };

  const handleMouseLeave = () => {
    setNavItems((prevNavItems) =>
      prevNavItems.map((item) => ({
        ...item,
        isDropdownVisible: false,
      }))
    );
    setPrevHoveredItem(null)

  };

  const handleDropdownItemHover = (dropdownItem: any) => {
    console.log(dropdownItem.attributes.dropdownName)
    if (hoveredItem !== dropdownItem) {
      setPrevHoveredItem(hoveredItem);
      setHoveredItem(dropdownItem);
      // setHoveredItem(null)
    }
  };

  return (
    <>
      <nav className="navbar">
        {/* <div className="navbar-left">
          {logoUrl && <img src={logoUrl} alt="ghjhfgjhkh" className="logo" />} 
        </div> */}
        <div className="navbar-left">
          <img src={`${apiUrl}+${logoUrl}`} alt="Logo" className="logo" />
        </div>
        <div className="navbar-center">
          <ul className="nav-links">
            {navItems.map((item, index) => (
              <li key={item.id} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                <a href={item.attributes.url}>{item.attributes.name}</a>


                {item.isDropdownVisible && item.attributes.navigation_dropdowns && (
                  <div
                    className="mega-box"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >

                    <div className="" style={{ display: 'flex', flexDirection: 'row', flex: '1', backgroundColor: 'white' }}>
                      <div>
                        {item.attributes.navigation_dropdowns?.data?.map((dropdownItem: any, dropdownIndex: any) => (
                          <div
                            style={{ display: 'flex' }}
                            key={dropdownIndex}
                            onMouseEnter={() => handleDropdownItemHover(dropdownItem)}
                            onMouseLeave={() => {
                              setPrevHoveredItem(dropdownItem);
                              // setHoveredItem(null);
                            }}
                          >
                            <div className="dropdwon-left-cOntent-WhatwEDo">
                              <div className="IconSellement">
                                <a href="#">{dropdownItem.attributes.dropdownName}</a>
                                <MdOutlineKeyboardArrowRight />
                              </div>
                              <hr />
                            </div>
                          </div>
                        ))}
                      </div>
                      {hoveredItem && (
                        <div className="right-side-content">
                          <h2 >{hoveredItem.attributes.heading}</h2>
                          <h3>{hoveredItem.attributes.subHeading}</h3>
                          <p>{hoveredItem.attributes.description}</p>
                          <div style={{ textAlign: 'left', padding: '10px', margin: '10px' }}>
                            <a href={hoveredItem.attributes.buttonLink} style={{ color: '#10baac', textDecoration: 'underline' }}>
                              {hoveredItem.attributes.buttonName}
                            </a>
                            <span style={{ marginLeft: '10px', color: '#10baac' }}>
                              <FaRegArrowAltCircleRight />
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                )}
              </li>
            ))}

          </ul>
        </div>
        <div className="navbar-right">
          <button className="contact-button">Contact Us</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;





