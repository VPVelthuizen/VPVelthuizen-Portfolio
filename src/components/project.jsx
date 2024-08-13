import React from 'react';
import '../css/project.css';

const Project = ({ title, image, alt, link }) => {
    return (
        <section class="container">
        <div class="unit">
            <img src={image} alt={alt} class="img"/>
            <a href={link} class="label">{title}</a>
        </div>
        </section>
    );
};

export default Project;