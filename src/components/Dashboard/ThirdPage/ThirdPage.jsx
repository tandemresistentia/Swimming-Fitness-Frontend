import React from 'react';
import './ThirdPage.css';
import ChevronLeft from '../../../assets/images/dashboard/chevron-left.png'
import BottomChall from '../../../assets/images/dashboard/bottom-challenges.png'

import DownArrow from '../../../assets/images/dashboard/down-arrow.png'
import NavBarLoggedIn from '../../home_page/Navbar/Navbar'
import { Link } from 'react-router-dom'
import ChallengesPlans from './ChallengesPlans';
import UpdateChallenge from './UpdateChallenge';
const ThirdPage = ({ goToNextPage, goToPreviousPage }) => {
  return (
    <div className="app-challenges">
      <div className='nav-challenges'>
        <NavBarLoggedIn />
      </div>
        <div className='middle-challenges'>
          <UpdateChallenge />
          <div className='middle-side'>
          <ChallengesPlans />
          </div>
          <div className='slide-button-challenges'>
          <button><Link to="/dashboard"><img src={ChevronLeft}/></Link></button>
          </div>
      </div>
      <div className='bottom-challenges'>
        <img className='bottom-chall' src={BottomChall} alt=''/>
      </div>
      </div>
  );
};

export default ThirdPage;