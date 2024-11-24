import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Selfie from '../../assets/Selfie.jpg';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './about.css';

export default function About() {
    return (
        <>
            <Header />
            <section id="AboutMe" className="bodysection">
                <span className="bodytitle">About Me</span>
                {/* This part will be my About Me section content */}
                <img className="selfie" src={Selfie} alt="Picture of Vincent" />
                <ul className="content">
                    <li>Welcome to my portfolio website! My name is Vincent Velthuizen, and I am a full-stack web developer. I am a recent graduate of the EdX bootcamp program at Rutger's university. I am proficient in HTML, CSS, JavaScript, Node.js, Express.js, Sequelize, MongoDB, and React.js. I am currently seeking a full-time position as a web developer, but am open to contractor work or work that contributes to my local communities!</li>
                    <li>As far as previous work experience goes, I have management experience both as a supervisor at Starbucks where I worked for 5 years, as well as at my postion with Bridgeport Caribe Youth Leaders, where I oversaw up to two other teams running an afterschool program. We taught children basic coding using the GameMaker and Codementum programs.</li>
                    <li>I am always looking to improve my skills and learn new technologies. I am excited to start my career as a web developer and to work on exciting projects! Please feel free to contact me if you have any questions or would like to work with me. Thank you for visiting my website!</li>
                    <li>To see more about me and my projects please use the nav bar at the top! You can see my latest project, NomadNotes, by clicking <a href='https://nomadnotes-3v1b.onrender.com/'>&#8594; here &#8592;</a>!</li>
                </ul>
            </section>
            <Footer />
        </>
    );
}