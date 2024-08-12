import React from 'react';
import { Link } from "react-router-dom";
import Header from '../components/header';
import Footer from '../components/footer';
import Project from '../components/project';

const Projects = () => {
    const projects = [
        {
            title: "Celsiux",
            image: "./assets/Celsiux.png",
            alt: "Celsiux website",
            link: "https://vpvelthuizen.github.io/Celsiux"
        },
        {
            title: "CommUnity Connect",
            image: "./assets/CommUnity.png",
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