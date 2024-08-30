import React from 'react';
import '../css/project.css';

const Project = ({ title, image, alt, link, info }) => {
    const handleClick = () => {
        window.location.href = link;
    };

    return (
        <div className='Project'>
            <img onClick={handleClick} src={image} alt={alt} className="img" />
            <div className='description'>
                <h3>{title}</h3>
                <info>{info}</info>
            </div>
        </div>
    );
};

export default Project;