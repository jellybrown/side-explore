import React from 'react';
import {  Link, Router } from 'react-router-dom';
import './header.css';

const Header = (props) => {
    return (
      <header>
        <img class="logo" src="project-logo1.png" alt="logo" />
        <nav>
          <ul className="menu_list">
            <li><Link to ="/">home</Link></li>
            <li><Link to ="/login">test</Link></li>
            <li><Link to ="/join">join</Link></li>
            <li><Link to ="/login"><button>login</button></Link></li>
          </ul>
        </nav>
      </header>
    )
};

export default Header;
