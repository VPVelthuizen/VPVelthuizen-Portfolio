import React from 'react';

const About = () => {
    return (
        <section id="AboutMe" className="bodysection">
            <span className="bodytitle">About Me</span>
            {/* This part will be my About Me section content */}
            <img className="selfie" src="./assets/images/Selfie.jpg" alt="Picture of Vincent" />
            <div className="content">
                My name is Vincent Velthuizen, and I have been studying code in a full-stack class at Rutgers University since February 2024. Currently, I run an afterschool program that teaches students coding as well. I love coding and am looking to pursue a career involving web development or application design.
            </div>
        </section>
    );
};

export default About;