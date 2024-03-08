// import React from 'react';
// import { FaLinkedin, FaTwitter, FaFacebookF } from "react-icons/fa";
// import { MdOutlineMailOutline, MdOutlinePhoneInTalk } from "react-icons/md";
// import "./Header.css";

// const Header = () => {
//     return (
//         <div className="header-Container">
//             <div className="icon-Container">
//                 <a href="https://www.facebook.com/">
//                     <FaFacebookF />
//                 </a>

//                 <a href="https://www.linkedin.com/">
//                     <FaLinkedin />
//                 </a>
//                 <a href="https://twitter.com/">
//                     <FaTwitter />
//                 </a>
//             </div>
//             <div className="right-Content">
//                 <a href="mailto:your-email@gmail.com">
//                     <MdOutlineMailOutline />
//                     <>abizsol@gmail.com</> 
//                 </a>
//                 <span>
//                     <MdOutlinePhoneInTalk />
//                     0320004300
//                 </span>
//             </div>
//         </div>
//     );
// };

// export default Header;



// import React from 'react';
// import { FaLinkedin, FaTwitter, FaFacebookF } from "react-icons/fa";
// import { MdOutlineMailOutline, MdOutlinePhoneInTalk } from "react-icons/md";
// import "./Header.css";

// const Header = ({ companyEmail, companyNumber, linkedIn, facebook, twitter }) => {
//     return (
//         <div className="header-Container">
//             <div className="icon-Container">
//                 <a href={facebook}>
//                     <FaFacebookF />
//                 </a>

//                 <a href={linkedIn}>
//                     <FaLinkedin />
//                 </a>
//                 <a href={twitter}>
//                     <FaTwitter />
//                 </a>
//             </div>
//             <div className="right-Content">
//                 <a href={`mailto:${companyEmail}`}>
//                     <MdOutlineMailOutline />
//                     {companyEmail}
//                 </a>
//                 <span>
//                     <MdOutlinePhoneInTalk />
//                     {companyNumber}
//                 </span>
//             </div>
//         </div>
//     );
// };

// export default Header;


// Header.jsx

import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebookF } from "react-icons/fa";
import { MdOutlineMailOutline, MdOutlinePhoneInTalk } from "react-icons/md";
import "./Header.css";

interface HeaderProps {
    companyEmail: any;
    companyNumber: any;
    linkedIn: any;
    facebook: any;
    twitter: any;
}

const Header: React.FC<HeaderProps> = ({ companyEmail, companyNumber, linkedIn, facebook, twitter }) => {
    return (
        <div className="header-Container">
            <div className="icon-Container">
                <a href={facebook}>
                    <FaFacebookF />
                </a>

                <a href={linkedIn}>
                    <FaLinkedin />
                </a>
                <a href={twitter}>
                    <FaTwitter />
                </a>
            </div>
            <div className="right-Content">
                <a href={`mailto:${companyEmail}`}>
                    <MdOutlineMailOutline />
                    {companyEmail}
                </a>
                <span>
                    <MdOutlinePhoneInTalk />
                    {companyNumber}
                </span>
            </div>
        </div>
    );
};

export default Header;
