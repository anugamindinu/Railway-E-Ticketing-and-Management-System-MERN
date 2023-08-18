import React from 'react';
import '../css/Navbar.css';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        { <a className="logo" href="/">
        <img className='logo' src={logo} alt='logo' />
        </a> }
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
