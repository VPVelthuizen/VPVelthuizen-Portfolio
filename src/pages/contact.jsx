import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Contact = () => {
    return (
        <section id="ContactInformation" className="bodysection">
            <span className="bodytitle">Contact Information</span>
            {/* This section contains my contact information */}
            <ul className="content">
                <li>Email: vpvelthuizen@gmail.com</li>
                <li>GitHub username: VPVelthuizen</li>
            </ul>
        </section>
    );
};

export default Contact;