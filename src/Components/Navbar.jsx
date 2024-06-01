import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospitalUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* <FontAwesomeIcon icon={faHospitalUser} /> */}
        <div className="navbar-logo">Hospital Management</div>
        <div className="search-bar-container">
      <input type="text" className="search-input" placeholder="Search Doctor or Hospital" />
      <button className="search-button">
        <i className="fa fa-search"></i>
      </button>
    </div>
        <div className="menu-icon" onClick={toggleNavbar}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/signin" className="nav-links">Sign-In</Link>

          </li>
          {/* <li className="nav-item">
            <Link to="/signup" className="nav-links">Sign-Up</Link>

          </li> */}
        
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
