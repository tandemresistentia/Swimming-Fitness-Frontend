
import React from 'react';
import './FirstPage.css';
import NavBarLoggedIn from '../../home_page/Navbar/NavbarLoggedIn'
import BottomProfile from '../../../assets/images/dashboard/bottom-profile.png'
import ChevronRight from '../../../assets/images/dashboard/chevron-right.png'
import DuckyDuck from '../../../assets/images/dashboard/ducky-duck.png'
import DuckBack from '../../../assets/images/dashboard/DuckBack.png'
import Clock from '../../../assets/images/dashboard/Clock.png'
import Smiling from '../../../assets/images/dashboard/Smiling.png'
import Internet from '../../../assets/images/dashboard/Internet.png'
import Chart from '../../../assets/images/dashboard/Chart.png'
import Swimmer from '../../../assets/images/dashboard/Swimmer.png'
import Vector from '../../../assets/images/dashboard/Vector.png'
import { Link } from 'react-router-dom'
const FirstPage = ({ handleButtonClick,goToNextPage, animate }) => {
  return (
    <div className={`app-profile ${animate ? 'animate' : ''}`}>
      <div className='container-profile'>
      <div className='upside-nav'>
      <NavBarLoggedIn />
      </div>

      <div className='middle-profile'>

      <div className='middle-upper-profile'>

      <div className='profile-photo'>
        <img class='duck-front' src={DuckyDuck} alt='profile-photo' />
        <img class='duck-back' src={DuckBack} />
        <p className='profile-name'>Ducky Duck</p>
      </div>

      <div className='profile-info-main'>

      <div className='profile-info-left'>

      <div className='profile-info'>
        <img src={Clock}  />
        <p className='profile-data'>Age</p>
        <p className='profile-data'>20</p>
      </div>
      <div className='profile-info'>
        <img src={Smiling}  />
        <p className='profile-data'>Gender</p>
        <p className='profile-data'>M</p>
      </div>
      <div className='profile-info'>
        <img src={Internet}  />
        <p className='profile-data'>Location</p>
        <p className='profile-data'>Spain</p>
      </div>
      
      </div>

      <div className='profile-info-right'>

      <div className='profile-info'>
        <img src={Chart} />
        <p className='profile-data'>Total Distance Swum</p>
        <p className='profile-data'>0</p>
      </div>
      <div className='profile-info'>
        <img src={Swimmer}  />
        <p className='profile-data'>Average Lap Time</p>
        <p className='profile-data'>0</p>
      </div>
      <div className='profile-info'>
        <img src={Vector}  />
        <p className='profile-data'>Completed Challenges</p>
        <p className='profile-data'>0</p>
      </div>

      </div>
      </div>
      </div>

      <div className='middle-downside-profile'>
      <button className='profile-button'>Edit Profile</button>
      <button className='profile-button2'>Log a new swimming session</button>
      <button className='profile-button'>Start a new challenge</button>
      </div>
      </div>
      <div className='downside-profile'>
      <img className='bottom-profile' src={BottomProfile} alt='bottom-profile' />
      </div>
      </div>
      <div className='slide-button1'>
      <button className='button-right-profile'><Link to="/dashboard"><img src={ChevronRight}/></Link></button>
      </div>
    </div>
  );
};

export default FirstPage;