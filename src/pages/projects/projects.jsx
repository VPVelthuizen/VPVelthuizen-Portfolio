import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/header';
import Footer from '../../components/footer';
import Project from '../../components/project';
import image from '../../assets/projectIndex';
import './projects.css';

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
        {
            title: "Horiseon",
            image: image.Horiseon,
            alt: "Horiseon website",
            link: "https://vpvelthuizen.github.io/Horiseon-Refactoring"
        },
        {
            title: "Kanban",
            image: image.Kanban,
            alt: "Kanban website",
            link: "https://vpvelthuizen.github.io/Kanban"
        },
        {
            title: "MyBlog",
            image: image.MyBlog,
            alt: "MyBlog website",
            link: "https://vpvelthuizen.github.io/MyBlog"
        },
        {
            title: "Nomad Notes",
            image: image.NomadNotes,
            alt: "Nomad Notes website",
            link: "https://nomadnotes-3v1b.onrender.com/"
        }
    ];

    return (
        <>
            <Header />
            <section id="projects">
                        {projects.map((project, index) => (
                            <Project
                             key={index}
                             title={project.title}
                             image={project.image}
                             alt={project.alt}
                             link={project.link}
                             />
                        ))}
            </section>
            <Footer />
        </>
    );
};

export default Projects;