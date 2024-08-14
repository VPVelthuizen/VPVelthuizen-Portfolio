import React from 'react';
import images from '../assets/footer/footerIndex';
import './footer.css';

const Footer = () => {

    const imageLinks = [
        { image: images.github, link: 'https://github.com/VPVelthuizen' },
        { image: images.linkedin, link: 'https://www.linkedin.com/in/vincent-velthuizen-823486323/' },
        { image: images.stackoverflow, link: 'https://stackoverflow.com/users/26827350/vpvelthuizen' },
    ];

    return (
        <footer className="footer">
            <div>
                Thank you for visiting my page!
            </div>
            <div className="footer-links">
            {imageLinks.map((item, index) => (
                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                    <img src={item.image} alt={`Link ${index + 1}`} />
                </a>
            ))}
        </div>
        </footer>
    );
};

export default Footer;