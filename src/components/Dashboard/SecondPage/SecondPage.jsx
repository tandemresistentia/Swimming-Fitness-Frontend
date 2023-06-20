import React,{useEffect, useState} from 'react';
import './SecondPage.css';
import ChevronRight from '../../../assets/images/dashboard/chevron-right.png'
import ChevronLeft from '../../../assets/images/dashboard/chevron-left.png'
import BottomDash from '../../../assets/images/dashboard/bottom-dashboard.png'
import DownArrow from '../../../assets/images/dashboard/down-arrow.png'
import UpArrow from '../../../assets/images/dashboard/UpArrow.png'
import Popular1 from '../../../assets/images/dashboard/popular-1.png'
import Popular2 from '../../../assets/images/dashboard/popular-2.png'
import NavBarLoggedIn from '../../home_page/Navbar/Navbar'
import { Link } from 'react-router-dom'
import LogTraining from './LogTraining';
import TrainingChart from './TrainingChart';
import { CSSTransition } from 'react-transition-group';

const SecondPage = ({ goToNextPage, goToPreviousPage }) => {

  const [showRectangle, setShowRectangle] = useState(false);
  const [showRectangle2, setShowRectangle2] = useState(false);

  function toggleRectangle() {
    setShowRectangle(!showRectangle);
  }

  function toggleRectangle2() {
    setShowRectangle2(!showRectangle2);
  }

  return (
    <div className="app-dashboard">
      <div className='nav-dashboard'>
        < NavBarLoggedIn />
      </div>
        <div className='middle-dashboard'>
              <LogTraining />
              <TrainingChart />
          <div className='middle-side'>
          <div className='training-plans'>
            <p className='training-plans-text'>Training Plans</p>
            {/* */}
            <div className='training-plans-buttons'>
              <button className='training-plans-button'>Recomended</button>

            </div>
            <div className='training-plans-scrolling-list'>
              <div className='training-plans-scrolling-list-center'>
                <div className='training-plans-scrolling-list-item'>
                <p className='training-plan-text'>Day 1</p>
                <p className='training-plan-text'>1000 meters</p>
                <p className='training-plan-text'>5 sets of 200 meters freestyle</p>
                <p className='training-plan-text'>4 sets of 50 meters kickboard drills</p>
                <button className="animation-button" onClick={toggleRectangle}>
                <img src={showRectangle ? UpArrow : DownArrow} alt="Button" />
              </button>
              <CSSTransition in={showRectangle} timeout={300} classNames="fade" unmountOnExit>
                <div className='training-plan-enlarged'>
              <div className="training-plan-group">
              <p className="training-plan-enlarged-text">Day 1</p>
              <ul>
                <li className="training-plan-enlarged-text">Warm-up: 10 minutes of easy freestyle swimming</li>
                <li className="training-plan-enlarged-text">Main Set: 5 sets of 200 meters freestyle, resting 20 seconds between each set</li>
                <li className="training-plan-enlarged-text">Technique Work: 4 sets of 50 meters kickboard drills, focusing on improving kick technique</li>
                <li className="training-plan-enlarged-text">Cool Down: 200 meters of easy swimming, alternating between freestyle and backstroke</li>
              </ul>
            </div>
            <div className="training-plan-group">
              <p className="training-plan-enlarged-text">Day 2</p>
              <ul>
                <li className="training-plan-enlarged-text">Warm-up: 10 minutes of easy backstroke swimming</li>
                <li className="training-plan-enlarged-text">Main Set: 10 sets of 50 meters butterfly, resting 30 seconds between each set</li>
                <li className="training-plan-enlarged-text">Endurance Swim: Swim 400 meters freestyle at a moderate pace</li>
                <li className="training-plan-enlarged-text">Cool Down: 200 meters of easy swimming, alternating between freestyle and breaststroke</li>
              </ul>
            </div>
            </div>
              </CSSTransition>

                </div>
                <div className='training-plans-scrolling-list-line'></div>
                <div className='training-plans-scrolling-list-item'>
                <p className='training-plan-text'>Day 3</p>
                <p className='training-plan-text'>1100 meters</p>
                <p className='training-plan-text'>6 sets of 25 meters focusing on different strokes</p>
                <p className='training-plan-text'>8 sets of 100 meters freestyle</p>
                <button className="animation-button" onClick={toggleRectangle2}>
                <img src={showRectangle2 ? UpArrow : DownArrow} alt="Button" />
              </button>
              <CSSTransition in={showRectangle2} timeout={300} classNames="fade" unmountOnExit>
                <div className='training-plan-enlarged2'>
              <div className="training-plan-group">
              <p className="training-plan-enlarged-text">Day 1</p>
              <ul>
                <li className="training-plan-enlarged-text">Warm-up: 10 minutes of easy freestyle swimming</li>
                <li className="training-plan-enlarged-text">Main Set: 5 sets of 200 meters freestyle, resting 20 seconds between each set</li>
                <li className="training-plan-enlarged-text">Technique Work: 4 sets of 50 meters kickboard drills, focusing on improving kick technique</li>
                <li className="training-plan-enlarged-text">Cool Down: 200 meters of easy swimming, alternating between freestyle and backstroke</li>
              </ul>
            </div>
            <div className="training-plan-group">
              <p className="training-plan-enlarged-text">Day 2</p>
              <ul>
                <li className="training-plan-enlarged-text">Warm-up: 10 minutes of easy backstroke swimming</li>
                <li className="training-plan-enlarged-text">Main Set: 10 sets of 50 meters butterfly, resting 30 seconds between each set</li>
                <li className="training-plan-enlarged-text">Endurance Swim: Swim 400 meters freestyle at a moderate pace</li>
                <li className="training-plan-enlarged-text">Cool Down: 200 meters of easy swimming, alternating between freestyle and breaststroke</li>
              </ul>
            </div>
            </div>
              </CSSTransition>
                </div>
              </div>

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