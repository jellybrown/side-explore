import React from 'react';
import {  Link, Router } from 'react-router-dom';
import './header.css';

const Header = (props) => {
    return (
       <header>
        <ul className="menu_list">
            <li><Link to ="/login">home</Link></li>
            <li><Link to ="/login">login</Link></li>
            <li><Link to ="/join">join</Link></li>
            <li><Link to ="/login">dsffsdf</Link></li>
        </ul>
        </header>
    )
};

export default Header;