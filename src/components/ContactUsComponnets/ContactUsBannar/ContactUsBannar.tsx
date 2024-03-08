import './ContactUsBannar.css';
import React, { useState } from "react";


const ContactUsBannar = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [projectDetails, setProjectDetails] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Form submitted:", { name, email, phone, projectDetails });
        setName("");
        setEmail("");
        setPhone("");
        setProjectDetails("");
    };
    return (
        <>
            <div className="contact-us-banner">
                <div className="contact-us-banner-content">
                    <h1>Contact Us</h1>
                    <p>Offering a compelling combination of technology, premium quality code, and a highly skilled workforce to turn your vision into a product.</p>
                </div>
                <br />

            </div>
            <div className='ConTACTWrapper'>
                <div className="contaCT-form">
                    <form onSubmit={handleSubmit}>
                        <h2>Contact Us</h2>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <label htmlFor="project-details">Tell us about your project:</label>
                        <textarea
                            id="project-details"
                            value={projectDetails}
                            onChange={(e) => setProjectDetails(e.target.value)}
                            required
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="contaCT-information">
                    dwdhguk
                </div>
            </div>
        </>
    );
}

export default ContactUsBannar;
