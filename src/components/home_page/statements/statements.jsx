import React, { useState } from 'react'
import './statements.css'
import button1 from '../../../assets/images/home_page/button1.png';
import button2 from '../../../assets/images/home_page/button2.png';
import review1 from '../../../assets/images/home_page/review1.png';
import rating4 from '../../../assets/images/home_page/rating4.png';
import review2 from '../../../assets/images/home_page/review2.png';
import rating5 from '../../../assets/images/home_page/rating5.png';
import review3 from '../../../assets/images/home_page/review3.png';
import review4 from '../../../assets/images/home_page/review4.png';
import review5 from '../../../assets/images/home_page/review5.png';
import review6 from '../../../assets/images/home_page/review6.png';

const images = {
  button1,
  button2,
  review1,
  rating4,
  review2,
  rating5,
  review3,
  review4,
  review5,
  review6
};


const Card = ({ statementText, statementImage, statementAuthor, statementDate, statementRating }) => {
    return (
      <div className='card1'>
        <div className='card-upper'>
        <p className='statement-text'>{statementText}</p>
        </div>
        <div className='card-lower'>
        <div className='statement-info'> 
          <img className='statement-image' src={statementImage} alt='' />
        <div className='statement-line'>
            <p className='statement-author'>{statementAuthor}</p>
            <p className='statement-date'>{statementDate}</p>
          </div>
        </div>
          <img className='statement-rating' src={statementRating} alt='' />
        </div>
      </div>
    );
  };

  
const Statements = () => {
  const [slideLeft, setSlideLeft] = useState(false);

  const handleButton2Click = () => {
    setSlideLeft(true);
  };

  const handleButton1Click = () => {
    setSlideLeft(false);
  };


  return (
    <div className='app-statements'>

        <div className='statements-top'>
        <div className='statements-title'>
            <p className='small-title'>What customers say</p>
            <p className='big-title'>Recent Reviews</p>
        </div>
        <div className='movement-buttons'>
            <button className='movement-button-1'>
                <img src={button1} onClick={handleButton1Click} alt=''></img>
            </button>
            <button className='movement-button-2'>
                <img src={button2} onClick={handleButton2Click} alt=''></img>
            </button>
        </div>
        </div>

        <div className={`statements-cards ${slideLeft ? 'slide-left' : ''}`}>
          <div className='statements-cards-1'>
            <Card
                statementText='This swim fitness website has revolutionized my training. 
                The personalized training plans and comprehensive tracking features have 
                taken my swimming to a whole new level.'
                statementImage={images.review1}
                statementAuthor='Neil Fairbank'
                statementDate='May 5, 2023 · 6 min read'
                statementRating={images.rating4}
            />
          </div>
          <div className='statements-cards-2'>
        <Card
          statementText='As a beginner swimmer, this website has been a game-changer. The instructional 
          videos, technique tips, and progress tracking have helped me build confidence and improve my 
          skills. '
          statementImage={images.review2}
          statementAuthor='Brigham Day'
          statementDate='April  27, 2023 · 5 min read'
          statementRating={images.rating5}
        />
        </div>
        <div className='statements-cards-3'> 
        <Card
          statementText="This website is a swimmer's paradise. The interactive features, challenges, and goal-setting tools make every swim session exciting and purposeful."
          statementImage={images.review3}
          statementAuthor='Megan Osbo'
          statementDate='May 7, 2023 · 6 min read'
          statementRating={images.rating4}
        />
        </div>
        <div className='statements-cards-4'>
        <Card
          statementText="I highly recommend this swim fitness website. The extensive resource library and variety of workout options keep me motivated and engaged in my swimming routine. "
          statementImage={images.review4}
          statementAuthor='Eda Ogley'
          statementDate='May  10, 2023 · 5 min read'
          statementRating={images.rating4}
        />
        </div>
        <div className='statements-cards-5'>
        <Card
          statementText="The personalized training plans and progress tracking on this website have helped me achieve my swimming goals. It keeps me motivated and accountable."
          statementImage={images.review5}
          statementAuthor='Simon Collins'
          statementDate='June 2, 2023 · 4 min read'
          statementRating={images.rating5}
        />
        </div>
        <div className='statements-cards-6'>
        <Card
          statementText='This swim fitness website is a game-changer for swimmers of all levels. The video tutorials and expert advice have helped me refine my technique and swim more efficiently.'
          statementImage={images.review6}
          statementAuthor='Emily Chen'
          statementDate='May 15, 2023 · 5 min read'
          statementRating={images.rating5}
        />
        </div>
        </div>
       
    </div>
  )
}

export default Statements