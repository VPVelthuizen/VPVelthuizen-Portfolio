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
            link: "https://vpvelthuizen.github.io/Celsiux",
            info: "Celsiux is a website that provides the current weather and forecast for any location in the world. It uses the OpenWeather API to get the weather data."
        },
        {
            title: "CommUnity Connect",
            image: image.CommUnity,
            alt: "CommUnity Connect website",
            link: "https://community-connect-img3.onrender.com/",
            info: "CommUnity Connect is a website that connects local organizations so that they can work together!"
        },
        {
            title: "Horiseon",
            image: image.Horiseon,
            alt: "Horiseon website",
            link: "https://vpvelthuizen.github.io/Horiseon-Refactoring",
            info: "Horiseon is a non-functioning website that we refactored to make it more accessible and optimized for search engines."
        },
        {
            title: "Kanban",
            image: image.Kanban,
            alt: "Kanban website",
            link: "https://vpvelthuizen.github.io/Kanban",
            info: "Kanban is a website that allows you to create and manage tasks using the Kanban method."
        },
        {
            title: "MyBlog",
            image: image.MyBlog,
            alt: "MyBlog website",
            link: "https://vpvelthuizen.github.io/MyBlog",
            info: "MyBlog is a website that allows you to create, edit, and delete blog posts."
        },
        {
            title: "Nomad Notes",
            image: image.NomadNotes,
            alt: "Nomad Notes website",
            link: "https://nomadnotes-3v1b.onrender.com/",
            info: "Nomad Notes is a website that allows you to take notes while you travel and plan out future trips."
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
                             info={project.info}
                             />
                        ))}
            </section>
            <Footer />
        </>
    );
};

export default Projects;