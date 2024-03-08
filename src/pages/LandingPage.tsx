import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header'
import Navbar from '../components/navbar/Navbar'
import Banner from '../components/banner/Banner'
import LogoRow from '../components/logoRow/LogoRow'
import WhatWeDo from '../components/whatWeDo/WhatWeDo'
import OurWorkProgress from '../components/ourWorkProgress/OurWorkProgress'
import ContactUs from '../components/contactUs/ContactUs'
import Footer from '../components/footer/Footer'
import apiUrl from "../config/strApiUrl";

const LandingPage = () => {
    const [companyInfo, setCompanyInfo] = useState<{
        companyEmail: string;
        companyNumber: string;
        linkedIn: string;
        facebook: string;
        twitter: string;
        logoUrl: string;
        about: string;
    } | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchCompanyInfo = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/company-informations?populate=*`);
            const companyData = response.data?.data[0]?.attributes;
            console.log(companyData)
            console.log(response.data.data[0].attributes.companylogo.data[0].attributes.url)
            setCompanyInfo({
                companyEmail: companyData.companyEmail,
                companyNumber: companyData.companyNumber,
                linkedIn: companyData.linkedIn,
                facebook: companyData.facebook,
                twitter: companyData.twitter,
                logoUrl: companyData.companylogo.data[0].attributes.url,
                about: companyData.about,
            });
        } catch (error) {
            console.error('Error fetching company information:', error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchCompanyInfo();
    }, []);
    return (
        <>
            {/* <Header /> */}
            <Header
                companyEmail={companyInfo?.companyEmail}
                companyNumber={companyInfo?.companyNumber}
                linkedIn={companyInfo?.linkedIn}
                facebook={companyInfo?.facebook}
                twitter={companyInfo?.twitter}
            />
            <Navbar />
            <Banner />
            <LogoRow />
            <WhatWeDo />
            <OurWorkProgress />
            <ContactUs />
            <Footer about={companyInfo?.about || ''}/>



        </>
    )
}

export default LandingPage