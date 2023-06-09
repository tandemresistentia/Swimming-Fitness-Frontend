import React from 'react';
import './ThirdPage.css';
import ChevronLeft from '../../../assets/images/dashboard/chevron-left.png'
import BottomChall from '../../../assets/images/dashboard/bottom-challenges.png'
import AddButton from '../../../assets/images/dashboard/AddButton.png'
import Divider from '../../../assets/images/dashboard/Divider.png'
import DownArrow from '../../../assets/images/dashboard/down-arrow.png'
import NavBarLoggedIn from '../../home_page/Navbar/NavbarLoggedIn'
import { Link } from 'react-router-dom'
const ThirdPage = ({ goToNextPage, goToPreviousPage }) => {
  return (
    <div className="app-challenges">
      <div className='nav-challenges'>
        <NavBarLoggedIn />
      </div>
        <div className='middle-challenges'>
          <div className='log-challenges'>
            <div className='log-challenge'>
              <p className='log-challenges-text'>Update Challenge</p>
              <img className='add-button' src={AddButton} alt=''/>
            </div>
            <div className='challenge-progress'>
              <p className='challenge-progress-text'>Challenge progress</p>
              <img src={Divider} alt=''/>
            </div>
          </div>

          <div className='middle-side'>
          <div className='challenges-plans'>
            <p className='challenges-plans-text'>Challenges</p>
            <div className='challenges-plans-scrolling-list'>
              <div className='challenges-plans-scrolling-list-center'>
                <div className='challenges-plans-scrolling-list-item'>
                <button className='challenges-plans-scrolling-list-item-button'>
                  Start
                </button>
                <img className='down-arrow' src={DownArrow} alt=''/>
                </div>
                <div className='challenges-plans-scrolling-list-line'></div>
                <div className='challenges-plans-scrolling-list-item'>
                <button className='challenges-plans-scrolling-list-item-button'>
                  Start
                </button>
                <img className='down-arrow' src={DownArrow} alt=''/>
                </div>
                <div className='challenges-plans-scrolling-list-line'></div>
                <div className='challenges-plans-scrolling-list-item'>
                <button className='challenges-plans-scrolling-list-item-button'>
                  Start
                </button>
                <img className='down-arrow' src={DownArrow} alt=''/>
                </div>
              </div>
              <div className='challenges-plans-scrolling-list-scroll'></div>
            </div>
          </div>

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