// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import "./genericPage.scss";
// import Header from '../../components/Header';
// import Navbar from '../../components/navbar/Navbar';
// import LogoRow from '../../components/logoRow/LogoRow';
// import GenericPgePartherWithus from '../../components/genericPgePartherWithus/GenericPgePartherWithus';
// import GenericpgeInFoucs from '../../components/genericpgeInFoucs/GenericpgeInFoucs';
// import Platement from '../../components/platement/Platement';
// import Footer from '../../components/footer/Footer';
// import WorkProcessComponent from '../../components/workProcessComponent/WorkProcessComponent';

// const GenericPage = () => {
//     const [bannerData, setBannerData] = useState<{
//         heading: string;
//         description: string;
//         buttonName: string;
//     } | null>(null);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get('https://377a-119-73-112-80.ngrok-free.app/api/generic-banners');
//             setBannerData(response.data.data[0].attributes);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     return (
//         <>
//             <Header />
//             <Navbar />
//             <div className='main-GenericPage-page'>
//                 <div className='inner-GenericPage-bg'>
//                     {bannerData && (
//                         <>
//                             <div className='main-name-GenericPage'>{bannerData.heading}</div>
//                             <div className='subheading-GenericPage'>{bannerData.description}</div>
//                             <button className="bannercONtent-btnn">{bannerData.buttonName}</button>
//                         </>
//                     )}
//                 </div>
//             </div>
//             <LogoRow />
//             <GenericPgePartherWithus />
//             <GenericpgeInFoucs />
//             <Platement />
//             <WorkProcessComponent />
//             <Footer />
//         </>
//     );
// };

// export default GenericPage;


// GenericPage.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./genericPage.scss";
import Header from '../../components/Header';
import Navbar from '../../components/navbar/Navbar';
import LogoRow from '../../components/logoRow/LogoRow';
import GenericPgePartherWithus from '../../components/genericPgePartherWithus/GenericPgePartherWithus';
import GenericpgeInFoucs from '../../components/genericpgeInFoucs/GenericpgeInFoucs';
import Platement from '../../components/platement/Platement';
import Footer from '../../components/footer/Footer';
import WorkProcessComponent from '../../components/workProcessComponent/WorkProcessComponent';
import apiUrl from "../../config/strApiUrl";

const GenericPage = () => {
    const [bannerData, setBannerData] = useState<{
        heading: string;
        description: string;
        buttonName: string;
    } | null>(null);
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

    useEffect(() => {
        fetchData();
        fetchCompanyInfo();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/generic-banners`);
            setBannerData(response.data.data[0].attributes);
        } catch (error) {
            console.error('Error fetching banner data:', error);
        }
    };
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


    return (
        <>
            <Header
                companyEmail={companyInfo?.companyEmail}
                companyNumber={companyInfo?.companyNumber}
                linkedIn={companyInfo?.linkedIn}
                facebook={companyInfo?.facebook}
                twitter={companyInfo?.twitter}
            />

            <Navbar logoUrl={companyInfo?.logoUrl} />
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className='main-GenericPage-page'>
                    <div className='inner-GenericPage-bg'>
                        {bannerData && (
                            <>
                                <div className='main-name-GenericPage'>{bannerData.heading}</div>
                                <div className='subheading-GenericPage'>{bannerData.description}</div>
                                <button className="bannercONtent-btnn">{bannerData.buttonName}</button>
                            </>
                        )}
                    </div>
                </div>
            )}
            <LogoRow />
            <GenericPgePartherWithus />
            <GenericpgeInFoucs />
            <Platement />
            <WorkProcessComponent />
            <Footer about={companyInfo?.about || ''}/>

        </>
    );
};

export default GenericPage;
