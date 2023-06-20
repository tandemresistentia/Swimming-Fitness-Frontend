import './NavbarLoggedIn.css'
import React from 'react'
import { Link } from 'react-router-dom';
import  { useState } from 'react';
import short_screen from '../../../assets/images/home_page/Vector.png'
import image_logo from '../../../assets/images/home_page/gericht.png'
import logout from '../../../assets/images/home_page/logout.png'

const NavbarLoggedIn = ({ onLogout }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleLogout = () => {
    // Call the logout function from the parent component
    onLogout();
  };

  return (
    <nav className='app__navbar1'>
      <Link to="/" className='app__navbar-logo1'>
        <img src={image_logo} alt='logo' />
        <p className='logo_text1'>SwimTrack</p>
      </Link>
      <ul className='app__navbar-links1'>
        <li className='p_navbar'>
          <Link to="/profile" className='p_navbar-link'>Profile</Link>
        </li>
        <li className='p_navbar1'>
          <Link to="/dashboard" className='p_navbar-link1'>Dashboard</Link>
        </li>
        <li className='p_navbar'>
          <Link to="/challenges" className='p_navbar-link'>Challenges</Link>
        </li>
        <li className='p_navbar1'>
          <Link to="/resources" className='p_navbar-link'>Resources</Link>
        </li>
        <li className='p_navbar1'>
          <Link to="/contact" className='p_navbar-link1'>Contact</Link>
        </li>
        <li className='p_navbar'>
          <a href='#logout' onClick={handleLogout}><img src={logout} alt='logout' /></a>
        </li>
      </ul>

      <div className='app__navbar-smallscreen1'>
        <img src={short_screen} alt='short_screen' onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide slide-bottom'>
            <img src={short_screen} alt='short_screen' className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen-links'>
              <li className='p_navbar'><a href='#logout' onClick={handleLogout}><img src={logout} alt='logout' /></a></li>
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
              <li className='p_navbar'><Link to="/" onClick={handleLogout}><img href={logout} alt='logout' /></Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarLoggedIn;