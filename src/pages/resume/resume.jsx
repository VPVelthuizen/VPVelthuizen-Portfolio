import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Header from '../../components/header'; // Import the Header component
import Footer from '../../components/footer'; // Import the Footer component
import './resume.css'; // Import the styles

const Resume = () => {
    const handleDownload = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = '../../assets/Resume.pdf'; // Relative path to your resume image
        downloadLink.download = 'Resume.pdf'; // Name for the downloaded file
        downloadLink.click();
    };

    return (
        <>
            <Header /> {/* Place the Header component here */}
            <section className='resume'>
                <button className="download-button" onClick={handleDownload}>Click here to download my resume!</button>
                <section id="Experience" className="bodysection container2">
                    <h2>EXPERIENCE</h2>
                    <div className="content">
                        <div className="container2">
                            <h3>Starbucks, Trumbull, CT—Barista</h3>
                            <p>January 2019 - Ongoing</p>
                            <ul>
                                <li>Prepare food, coffee, espresso beverages, maintain a sanitary work environment.</li>
                                <li>Receive customer orders while maintaining a welcoming presence.</li>
                            </ul>
                        </div>
                        <div className="container2">
                            <h3>Bridgeport Caribe Youth Leaders, Bridgeport, CT</h3>
                            <p>August 2020 - Ongoing</p>
                            <ul>
                                <li>Taught basic coding classes using the GameMaker program to middle and high school students.</li>
                                <li>Directed and trained associates on facilitating programs in different locations.</li>
                                <li>Arranged details of running the program and collaborations with other organizations.</li>
                                <li>Communicated with parents through email or phone.</li>
                            </ul>
                        </div>
                        <div className="container2">
                            <h3>AmeriCorps NCCC, Sacramento, CA</h3>
                            <p>Member- October 2017 - July 2018</p>
                            <ul>
                                <li>Participated in an AmeriCorps NCCC service team for the Fall 2017 term.</li>
                                <li>Lived and worked with a team of up to 13 other people every day for 9 months.</li>
                                <li>Experienced being part of a diverse team, both for work and housing.</li>
                                <li>Researched and presented history and factors of various issues (homelessness, invasive species, hurricane/fire damage).</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="Education" className="bodysection container2">
                    <h2>EDUCATION</h2>
                    <div className="content">
                        <div className="container2">
                            <h3>Trumbull High School — High School Diploma</h3>
                            <p>Graduated June 2013. (Trumbull, CT)</p>
                            <p>AP classes- Calculus AB, Statistics, Chemistry, Physics C. Achieved a score of 5 on all 5 AP exams.</p>
                            <p>Swim Team- Was part of either the town or high school swim team every year for 4 years.</p>
                        </div>
                    </div>
                </section>

                <section id="Skills" className="bodysection container2">
                    <h2>SKILLS</h2>
                    <div className="content">
                        <ul>
                            <li>ServeSafe Certified</li>
                            <li>CPR Certified</li>
                            <li>Received Diversity Training/Hands of Peace</li>
                            <li>Basic Construction Skills</li>
                            <li>Experience with removal of invasive species/trail Building</li>
                            <li>Red Cross Emergency Shelter Certified</li>
                            <li>Experience as part of a team</li>
                            <li>Telephone reception experience</li>
                        </ul>
                    </div>
                </section>

                <section id="Awards" className="bodysection container2">
                    <h2>AWARDS</h2>
                    <div className="content">
                        <ul>
                            <li>AP Merit Scholar- achieved a score of 5 on 5 different AP exams</li>
                            <li>Cup Award- Recognized by Starbucks manager as an employee who goes beyond the tasks required</li>
                        </ul>
                    </div>
                </section>

                <section id="Languages" className="bodysection container2">
                    <h2>LANGUAGES</h2>
                    <div className="content">
                        <p>English</p>
                        <p>Basic Spanish</p>
                    </div>
                </section>

                <section id="References" className="bodysection container2">
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