import React from 'react';

const Project = ({ title, image, alt, link }) => {
    return (
        <div>
            <img src={image} alt={alt} />
            <a href={link}>{title}</a>
        </div>
    );
};

export default Project;