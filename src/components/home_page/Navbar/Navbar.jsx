import './Navbar.css';
import './NavbarLoggedIn.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import short_screen from '../../../assets/images/home_page/Vector.png';
import image_logo from '../../../assets/images/home_page/gericht.png';
import logout from '../../../assets/images/home_page/logout.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    // Check if a token exists in local storage
    const token = localStorage.getItem('token');
    if (token) {
      // If token exists, consider the user logged in
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Logic for logout
    setIsLoggedIn(false);

    // Remove the token from local storage
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <nav className="app__navbar">
      <Link to="/" className="app__navbar-logo">
        <img src={image_logo} alt="logo" />
        <p className="logo_text">SwimTrack</p>
      </Link>
      <ul className="app__navbar-links">
        <li className="p_navbar">
          <Link to="/profile" className="p_navbar-link">
            Profile
          </Link>
        </li>
        <li className="p_navbar">
          <Link to="/dashboard" className="p_navbar-link">
            Dashboard
          </Link>
        </li>
        <li className="p_navbar">
          <Link to="/challenges" className="p_navbar-link">
            Challenges
          </Link>
        </li>
        <li className="p_navbar">
          <Link to="/resources" className="p_navbar-link">
            Resources
          </Link>
        </li>
        <li className="p_navbar">
          <Link to="/contact" className="p_navbar-link">
            Contact
          </Link>
        </li>
      </ul>

      <div className="app__navbar-login">
      {isLoggedIn ? (
                <li className="p_navbar">
                  <Link to="/" onClick={handleLogout}>
                    <img src={logout} alt="logout" />
                  </Link>
                </li>
              ) : (
                <>
                
                <div className='app__navbar-login'>
              <Link to="/login" className='p_navbar-link'>Login</Link>
              <Link to="/signup" className={`navbar-signup ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>Sign Up</Link>
            </div>
                </>
              )}

      </div>

      <div className="app__navbar-smallscreen">
        <img src={short_screen} alt="short_screen" onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide slide-bottom">
            <img
              src={short_screen}
              alt="short_screen"
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen-links">
              <li className="p_navbar">
                <Link to="/profile" className="p_navbar-link">
                  Profile
                </Link>
              </li>
              <li className="p_navbar">
                <Link to="/dashboard" className="p_navbar-link">
                  Dashboard
                </Link>
              </li>
              <li className="p_navbar">
                <Link to="/challenges" className="p_navbar-link">
                  Challenges
                </Link>
              </li>
              <li className="p_navbar">
                <Link to="/resources" className="p_navbar-link">
                  Resources
                </Link>
              </li>
              <li className="p_navbar">
                <Link to="/contact" className="p_navbar-link">
                  Contact
                </Link>
              </li>
              {isLoggedIn ? (
                <li className="p_navbar">
                  <Link to="/" onClick={handleLogout}>
                    <img src={logout} alt="logout" />
                  </Link>
                </li>
              ) : (
                <>
                  <li className="p_navbar">
                    <Link to="/login" className="p_navbar-link">
                      Log In
                    </Link>
                  </li>
                  <li className={`p_navbar`}>
                    <Link
                      to="/signup"
                      className={`navbar-signup ${isHovered ? 'hovered' : ''}`}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
