import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {

    const location = useLocation();
    const [selectedPage, setSelectedPage] = useState(location.pathname);

    useEffect(() => {
        setSelectedPage(location.pathname);
    }, [location.pathname]);

    return (
        <div className="links">
            <Link to="/" style={{ color: selectedPage === '/' ? 'lightgrey' : 'black' }}>About Me</Link>
            <Link to="/projects" style={{ color: selectedPage === '/projects' ? 'lightgrey' : 'black' }}>Projects</Link>
            <Link to="/contact" style={{ color: selectedPage === '/contact' ? 'lightgrey' : 'black' }}>Contact Me</Link>
            <Link to="/resume" style={{ color: selectedPage === '/resume' ? 'lightgrey' : 'black' }}>Resume</Link>
        </div>
    );
}

export default Nav;