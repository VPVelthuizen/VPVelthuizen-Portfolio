import React from 'react';
import { Link } from "react-router-dom";
import Header from '../components/header';
import Footer from '../components/footer';
import Project from '../components/project';
import image from '../assets/projectIndex';

const Projects = () => {
    const projects = [
        {
            title: "Celsiux",
            image: image.Celsiux,
            alt: "Celsiux website",
            link: "https://vpvelthuizen.github.io/Celsiux"
        },
        {
            title: "CommUnity Connect",
            image: image.CommUnity,
            alt: "CommUnity Connect website",
            link: "https://community-connect-img3.onrender.com/"
        },
    ];

    return (
        <>
            <Header />
            <section id="Work" className="bodysection">
                <div className="content">
                    <div className="container2">
                        {projects.map((project, index) => (
                            <Project
                             key={index}
                             title={project.title}
                             image={project.image}
                             alt={project.alt}
                             link={project.link}
                             />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Projects;