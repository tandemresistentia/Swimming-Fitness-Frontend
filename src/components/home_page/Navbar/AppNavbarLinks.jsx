import './Navbar.css'
import { Link } from 'react-router-dom';
const AppNavbarLinks = () => {
    return (
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
            <li className='p_navbar'>
                <Link to="/resources" className='p_navbar-link'>Resources</Link>
            </li>
            <li className='p_navbar'>
            <Link to="/contact" className='p_navbar-link'>Contact</Link>
            </li>
        </ul>
    );
};

export default AppNavbarLinks