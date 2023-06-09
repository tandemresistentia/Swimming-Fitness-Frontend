import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom';
import  { useState } from 'react';

import short_screen from '../../../assets/images/home_page/Vector.png'
import image_logo from '../../../assets/images/home_page/gericht.png'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

  return (
    <nav className='app__navbar'>
        <Link to="/" className='app__navbar-logo'>
            <img src={image_logo} alt='logo' />
            <p className='logo_text' >SwimTrack</p>
        </Link>
          <ul className='app__navbar-links'>
              <li className='p_navbar'>
              <Link to="/profile" className='p_navbar-link'>Profile</Link>
              </li>
              <li className='p_navbar'>
              <Link to="/dashboard" className='p_navbar-link'>Dashboard</Link>
              </li>
              <li className='p_navbar'>
              <Link to="/challenges" className='p_navbar-link'>Challenges</Link>
              </li>
              <li className='p_navbar'><Link to="/resources" className='p_navbar-link'>Resources</Link></li>
              <li className='p_navbar'>
              <Link to="/contact" className='p_navbar-link'>Contact</Link>
              </li>

            <div className='app__navbar-login'>
              <Link to="/login" className='p_navbar-link'>Log In</Link>
                <a href='#signup' className={`navbar-signup ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>Sign Up</a>
            </div>
        </ul>

    <div className='app__navbar-smallscreen'>
        <img src={short_screen} alt='short_screen' onClick={() => setToggleMenu(true)}/>

        {toggleMenu && (
        <div className='app__navbar-smallscreen_overlay flex__center slide slide-bottom'>
        <img src={short_screen} alt='short_screen' className='overlay__close' onClick={() => setToggleMenu(false)}/>
        <ul className='app__navbar-smallscreen-links'>
        <li className='p_navbar'>
              <Link to="/profile" className='p_navbar-link'>Profile</Link>
              </li>
              <li className='p_navbar'>
              <Link to="/dashboard" className='p_navbar-link'>Dashboard</Link>
              </li>
              <li className='p_navbar'>
              <Link to="/challenges" className='p_navbar-link'>Challenges</Link>
              </li>
              <li className='p_navbar'><Link to="/resources" className='p_navbar-link'>Resources</Link></li>
              <li className='p_navbar'>
              <Link to="/contact" className='p_navbar-link'>Contact</Link>
              </li>
            <li className='p_navbar'><Link to="/login" className='p_navbar-link'>Log In</Link></li>
            <li className='p_navbar signup'><a href='#signup'>Sign Up</a></li>
        </ul>
        </div>
        )}
    </div>
    </nav>
  )
}

export default Navbar