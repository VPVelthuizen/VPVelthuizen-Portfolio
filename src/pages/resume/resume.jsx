import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Header from '../../components/header'; // Import the Header component
import Footer from '../../components/footer'; // Import the Footer component
import './resume.css'; // Import the styles
import resume from '../../assets/Resume.pdf'; // Import the resume file

const Resume = () => {
    const handleDownload = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = resume; // Use the imported resume file directly
        downloadLink.download = 'VPVelthuizen-Resume.pdf'; // Name for the downloaded file
        downloadLink.click();
    };

    return (
        <>
            <Header /> {/* Place the Header component here */}
            <section className='resume bodysection'>
                <button className="download-button" onClick={handleDownload}>Click here to download my resume!</button>

                <section id="Skills">
                    <h2>SKILLS</h2>
                    <div className="content">
                        <ul>
                            <li>Coding Languages- HTML, CSS, JavaScript</li>
                            <li>Front End- React, Handlebars, Imported Libraries</li>
                            <li>Backend- MySQL/Sequelize, MongoDB/Mongoose, GraphQL</li>
                            <li>Express for servers and API's</li>
                        </ul>
                    </div>
                </section>

                <section id="Education">
                    <h2>EDUCATION</h2>
                    <div className="content">
                        <h3>EdX @ Rutgers University</h3>
                        <p>Graduated August 2024</p>
                        <p>Studied modern coding languages and techniques for full-stack web development</p>
                    </div>
                </section>

                <section id="Experience">
                    <h2>Experience</h2>
                    <div className="content">
                        <h3>Bridgeport Caribe Youth Leaders, Bridgeport, CT</h3>
                        <p>August 2020 - August 2024</p>
                        <ul>
                            <li>Taught basic coding classes using the GameMaker program to middle and high school students.</li>
                            <li>Directed and trained associates on facilitating programs in different locations.</li>
                            <li>Arranged details of running the program and collaborations with other organizations.</li>
                            <li>Communicated with parents through email or phone.</li>
                        </ul>
                        <h3>Starbucks, Trumbull, CT — Supervisor/Barista</h3>
                        <p>January 2019 - January 2024</p>
                        <ul>
                            <li>Prepare food, coffee, espresso beverages, maintain a sanitary work environment.</li>
                            <li>Receive customer orders while maintaining a welcoming presence.</li>
                        </ul>
                        <h3>AmeriCorps NCCC, Sacramento, CA</h3>
                        <p>Member- October 2017 - July 2018</p>
                        <ul>
                            <li>Participated in an AmeriCorps NCCC service team for the Fall 2017 term.</li>
                            <li>Lived and worked with a team of up to 13 other people every day for 9 months.</li>
                            <li>Experienced being part of a diverse team, both for work and housing.</li>
                            <li>Researched and presented history and factors of various issues (homelessness, invasive species, hurricane/fire damage).</li>
                        </ul>
                    </div>
                </section>

                <section id="Projects">
                    <h2>Projects</h2>
                    <div className="content">
                        <h3>Nomad Notes</h3>
                        <ul>
                            <li>Website developed by a team of 5</li>
                            <li>Front End- React, CSS</li>
                            <li>Backend- MongoDB/Mongoose, GraphQL</li>
                            <a href='https://nomadnotes-3v1b.onrender.com/'>Check it out here!</a>
                        </ul>
                    </div>
                </section>

                <section id="Awards">
                    <h2>AWARDS</h2>
                    <div className="content">
                        <ul>
                            <li>MUG Award- Recognized by Starbucks manager as an employee who goes beyond the tasks required</li>
                        </ul>
                    </div>
                </section>

                <section id="Languages">
                    <h2>LANGUAGES</h2>
                    <div className="content">
                        <p>English</p>
                        <p>Basic Spanish</p>
                    </div>
                </section>

                <section id="References">
                    <h2>REFERENCES</h2>
                    <div className="content">
                        <ul>
                            <li>Moira Kisch — Team Leader (908) 246-9678</li>
                            <li>Anna Fearnley — Manager (203) 452-0108</li>
                            <li>John Torres — Manager (203) 913-0073</li>
                        </ul>
                    </div>
                </section>

            </section>
            <Footer /> {/* Place the Footer component here */}
        </>
    );
};

export default Resume;