import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "./contact.css";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setError("Please fill in all fields");
        } else {
            // Handle form submission logic here
            setError("");
            alert("Form submitted successfully!");
        }
    };

    return (
        <>
            <Header />
            <section id="ContactInformation" className="bodysection">
                <span className="bodytitle">Contact Information</span>
                {/* This section contains my contact information */}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    {error && <p>{error}</p>}
                    <button type="submit">Submit</button>
                </form>
            </section>
            <Footer />
        </>
    );
};

export default Contact;