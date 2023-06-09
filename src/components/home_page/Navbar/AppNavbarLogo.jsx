import './Navbar.css'
import { Link } from 'react-router-dom';
import image_logo from '../../../assets/images/home_page/gericht.png'
const AppNavbarLogo = () => {
    return (
        <Link to="/" className='app__navbar-logo'>
            <img src={image_logo} alt='logo' />
            <p className='logo_text' >SwimTrack</p>
        </Link>
    );
  };


export default AppNavbarLogo