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
            title: "Nomad Notes",
            image: image.NomadNotes,
            alt: "Nomad Notes website",
            link: "https://nomadnotes-3v1b.onrender.com/",
            info: "Nomad Notes is a website that allows you to take notes while you travel and plan out future trips. This is one of my most recent projects, our team of 5 used MongoDB, React.js, GraphQL, and more to build it."
        },
        {
            title: "CommUnity Connect",
            image: image.CommUnity,
            alt: "CommUnity Connect website",
            link: "https://github.com/Noah-Manno/community-connect",
            info: "CommUnity Connect is a website that connects local organizations so that they can work together! This one comes from a personal passion of mine to help my local community. We used an SQL database, and express to make API and html routes."
        },
        {
            title: "MyBlog",
            image: image.MyBlog,
            alt: "MyBlog website",
            link: "https://vpvelthuizen.github.io/MyBlog",
            info: "MyBlog is a website that allows you to create, edit, and delete blog posts. It was an earlier project used to practice using local storage."
        },
        {
            title: "Celsiux",
            image: image.Celsiux,
            alt: "Celsiux website",
            link: "https://vpvelthuizen.github.io/Celsiux",
            info: "Celsiux is a website that provides the current weather and forecast for any location in the world. It uses the OpenWeather API to get the weather data. It involves using multiple API calls to gather the correct information for the user."
        },
        {
            title: "EmployeEasy",
            image: image.EmployeEasy,
            alt: "EmployeEasy website",
            link: "https://github.com/VPVelthuizen/EmployeEasy",
            info: "This link will take you to the github page showing the code for EmployeEasy. EmployeEasy is an application that interacts with a MySQL database to manage a company's employees. It uses inquirer to prompt the user for information and MySQL to store and retrieve data."
        },
        {
            title: "Rocky Territory",
            image: image.RockyTerritory,
            alt: "RockyTerritory website",
            link: "https://github.com/VPVelthuizen/Rocky-Territory",
            info: "This link will take you to the GitHub page with the code for Rocky Territory. This is an application that uses a MongoDB database to run a social media that has users, posts, and reactions."
        }
    ];

    return (
        <>
            <Header />
            <div className='bodysection'>
                <span className="bodytitle">Click the project image to go to the website or github page!</span>
                <section id="projects" className='content'>
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
            </div>
            <Footer />
        </>
    );
};

export default Projects;