import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Resume = () => {
    return (
        <section id="Work" className="bodysection">
            {/* Here I will post the pictures of my websites */}
            <div className="content">
                <div className="container1">
                    {/* The first of the links, for my first project */}
                    <div className="label1">
                        Horiseon Refactored: This was a project where we refactored code for a website that was not optimized.
                    </div>
                    <a href="https://VPVelthuizen.github.io/Horiseon-Refactoring">
                        <img src="./assets/images/business-meeting.jpg" className="pic1" alt="Horiseon business meeting" />
                    </a>
                </div>
                <div className="container2">
                    {/* This container has the rest of the links for the various websites and images */}
                    <a href="https://VPVelthuizen.github.io/Place-Holder-1" className="pics">
                        <img className="imgs" src="./assets/img1.png" alt="img1" />
                        <div className="label">Project 1</div>
                    </a>
                    <a href="https://VPVelthuizen.github.io/Place-Holder-2" className="pics">
                        <img className="imgs" src="./assets/img2.png" alt="img2" />
                        <div className="label">Project 2</div>
                    </a>
                    <a href="https://VPVelthuizen.github.io/Place-Holder-3" className="pics">
                        <img className="imgs" src="./images/img3.png" alt="img3" />
                        <div className="label">Project 3</div>
                    </a>
                    <a href="https://VPVelthuizen.github.io/Place-Holder-4" className="pics">
                        <img className="imgs" src="./assets/img4.png" alt="img4" />
                        <div className="label">Project 4</div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Resume;