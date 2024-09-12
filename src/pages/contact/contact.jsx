import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "./contact.css";

const Contact = () => {
    return (
        <>
            <Header />
            <section id="ContactInformation" className="bodysection">
                <span className="bodytitle">Contact Information</span>
                <div className="content">
                    <p>Email: <a href="mailto:vpvelthuizen@gmail.com">VPVelthuizen@gmail.com</a></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/vpvelthuizen/">VPVelthuizen</a></p>
                    <p>GitHub: <a href="https://github.com/VPVelthuizen">VPVelthuizen</a></p>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contact;