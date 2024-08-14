import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from './nav';

function Header() {

    return (
        <header>
            <name>Vincent Velthuizen</name>
            <Nav />
        </header>
    );
}

export default Header;