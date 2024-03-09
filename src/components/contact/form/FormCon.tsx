import React, { useState } from "react";
import { Flex, Input } from "antd";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { CiFacebook } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import "./FormCon.scss";
import axios from "axios";
import apiUrl from "../../../config/strApiUrl";

const { TextArea } = Input;

interface ContactInfo {
  icon: JSX.Element;
  text: string;
}

const contactInfoData: ContactInfo[] = [
  {
    icon: <CiMail className="iconsize-color" />,
    text: "support@abizsol.com",
  },
  {
    icon: <FaLocationDot className="iconsize-color" />,
    text: "Pakistan office: 119C-201 Eithad Town, Lahore Pakistan. 0423-5752-867",
  },
  {
    icon: <PiPhoneCallFill className="iconsize-color" />,
    text: "+92 300 0000",
  },
];

const socialIcons: JSX.Element[] = [
  <CiFacebook className="iconsize-color" />,
  <RiTwitterXFill className="iconsize-color" />,
  <IoLogoYoutube className="iconsize-color" />,
  <FaLinkedin className="iconsize-color" />,
];

const FormCon: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [value, setValue] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});


  const validateForm = () => {
    let valid = true;
    const newErrors: Record<string, string> = {};
    if (!firstName) {
      newErrors.firstName = "First name is required";
      valid = false;
    }
    if (!lastName) {
      newErrors.lastName = "Last name is required";
      valid = false;
    }
    if (!phone) {
      newErrors.phone = "Phone is required";
      valid = false;
    }
    if (!companyName) {
      newErrors.companyName = "Company name is required";
      valid = false;
    }
    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    const formData = {
      firstName,
      lastName,
      phone,
      companyName,
      email,
      description: value,
    };


    axios
      .post(`${apiUrl}/api/contact-uses`, {
        data: formData,
      })
      .then((response) => {
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="wrapper-form">
      <div className="form-conversation-wrapper">
        <div className="whitebg-form">
          <div className="inner-wrapper-form">
            <div className="start-converation-txt">Start Conversation</div>
            <div className="flex-input-name">
              <div style={{ width: "50%" }}>
                <div className="main-input-name">First name</div>
                <div>
                  <Flex vertical gap={12}>
                    <Input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First name"
                      required
                    />
                  </Flex>
                  <span className="error">{errors.firstName}</span>
                </div>
              </div>
              <div style={{ width: "50%" }}>
                <div className="main-input-name">Last name</div>
                <div>
                  <Flex vertical gap={12}>
                    <Input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last name"
                      required
                    />
                  </Flex>
                  <span className="error">{errors.lastName}</span>
                </div>
              </div>
            </div>
            <div className="flex-input-name">
              <div style={{ width: "50%" }}>
                <div className="main-input-name">Phone</div>
                <div>
                  <Flex vertical gap={12}>
                    <Input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone"
                      required
                    />
                  </Flex>
                  <span className="error">{errors.phone}</span>
                </div>
              </div>
              <div style={{ width: "50%" }}>
                <div className="main-input-name">Company name</div>
                <div>
                  <Flex vertical gap={12}>
                    <Input
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Company name"
                      required
                    />
                  </Flex>
                  <span className="error">{errors.companyName}</span>
                </div>
              </div>
            </div>
            <div className="email-input">
              <div className="main-input-name">Email</div>
              <div>
                <Flex vertical gap={12}>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                    required
                  />
                </Flex>
                <span className="error">{errors.email}</span>
              </div>
            </div>
            <div className="text-area-conatactus">
              <TextArea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Tell us about your product and business challenge"
                autoSize={{ minRows: 3, maxRows: 3 }}
                required
              />
            </div>
            <div className="submitform-btn">
              <button onClick={handleSubmit} className="btn-submit-txt">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="bluebg-form">
          <div className="form-rightside">
            <div className="form-imagebg">
              <div style={{ padding: "50px" }}>
                <div className="contact-info-txt">Contact Information</div>
                {contactInfoData.map((info, index) => (
                  <div key={index} className="info-display-list">
                    <div>{info.icon}</div>
                    <div className="iconfront-txt">{info.text}</div>
                  </div>
                ))}
                <div className="linkweb-flex" >
                  {socialIcons.map((icon, index) => (
                    <div key={index} className="icon-link">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCon;
