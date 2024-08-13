import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Selfie from '../assets/Selfie.jpg';
import Header from '../components/header';
import Footer from '../components/footer';

export default function About() {
    return (
        <>
            <Header />
            <section id="AboutMe" className="bodysection">
                <span className="bodytitle">About Me</span>
                {/* This part will be my About Me section content */}
                <img className="selfie" src={Selfie} alt="Picture of Vincent" />
                <div className="content">
                    My name is Vincent Velthuizen, and I have been studying code in a full-stack class at Rutgers University since February 2024. Currently, I run an afterschool program that teaches students coding as well. I love coding and am looking to pursue a career involving web development or application design.
                </div>
            </section>
            <Footer />
        </>
    );
}