import React from 'react';
import './SecondPage.css';
import ChevronRight from '../../../assets/images/dashboard/chevron-right.png'
import ChevronLeft from '../../../assets/images/dashboard/chevron-left.png'
import BottomDash from '../../../assets/images/dashboard/bottom-dashboard.png'
import AddButton from '../../../assets/images/dashboard/AddButton.png'
import Divider from '../../../assets/images/dashboard/Divider.png'
import TrainingUpper from '../../../assets/images/dashboard/training-upper.png'
import DownArrow from '../../../assets/images/dashboard/down-arrow.png'
import Popular1 from '../../../assets/images/dashboard/popular-1.png'
import Popular2 from '../../../assets/images/dashboard/popular-2.png'
import NavBarLoggedIn from '../../home_page/Navbar/NavbarLoggedIn'
import { Link } from 'react-router-dom'

const SecondPage = ({ goToNextPage, goToPreviousPage }) => {
  return (
    <div className="app-dashboard">
      <div className='nav-dashboard'>
        < NavBarLoggedIn />
      </div>
        <div className='middle-dashboard'>
          <div className='log-dashboard'>
            <div className='log-training'>
              <p className='log-training-text'>Log Training</p>
              <img src={AddButton} />
            </div>
            <div className='recent-activity'>
              <p className='recent-activity-text'>Recent Activity</p>
              <img src={Divider} />
            </div>
          </div>
          <div className='training-chart'>
            <div className='training-chart-text'>
            <img className='training-back' src={TrainingUpper} />
              <p className='training-chart-text1'>Training Chart</p>
            </div>
            <div className='training-chart-buttons'>
              <button className='training-chart-button'>All</button>
              <button className='training-chart-button'>Distance</button>
              <button className='training-chart-button'>Time</button>
              <button className='training-chart-button'>Fastest lap</button>
            </div>
            <div className='training-chart-line'></div>
            <div className='training-chart-graph'></div>
          </div>

          <div className='middle-side'>
          <div className='training-plans'>
            <p className='training-plans-text'>Training Plans</p>
            <div className='training-plans-buttons'>
              <button className='training-plans-button'>Recomended</button>
              <button className='training-plans-button'>Recently used</button>
            </div>
            <div className='training-plans-scrolling-list'>
              <div className='training-plans-scrolling-list-center'>
                <div className='training-plans-scrolling-list-item'>
                <img src={DownArrow} />
                </div>
                <div className='training-plans-scrolling-list-line'></div>
                <div className='training-plans-scrolling-list-item'>
                <img src={DownArrow} />
                </div>
              </div>
              <div className='training-plans-scrolling-list-scroll'></div>
            </div>
          </div>
          <div className='most-popular'>
            <p className='most-popular-text'>Most Popular</p>
            <div className='most-popular-item'>
              <img src={Popular1} />
              <div className='most-popular-item-text'>
                <p className='most-popular-item-name'>Richard Park</p>
                <p className='most-popular-item-subname'>Fastest lap</p>
              </div>
            </div>
            <div className='most-popular-item'>
              <img src={Popular2} />
              <div className='most-popular-item-text'>
                <p className='most-popular-item-name'>Pop Eye</p>
                <p className='most-popular-item-subname'>Most Achievements</p>
              </div>
            </div>
          </div>
          </div>
          <div className='slide-button-dashboard'>
            <button><Link to="/challenges"><img src={ChevronRight}/></Link></button>
            <button><Link to="/profile"><img src={ChevronLeft}/></Link></button>
          </div>
      </div>
      <div className='bottom-dashboard'>
        <img src={BottomDash} />
      </div>

    </div>
  );
};

export default SecondPage;