import React, { useState } from 'react'
import './hero.css'
import switcher from '../../../assets/images/home_page/Ellipse_1.png'
import Paragraph from './Paragraph';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
    <div className='app__hero'>
      <div className='app__hero-title'> 
        <div className='app__hero-text'>
          <Paragraph content="Swimming is not a hobby, it's a passion" />
        </div>
        <button className={`app__hero-button-1 ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >JOIN NOW FOR FREE</button>
      </div>
    </div>

      </div>
  )
}

export default Hero
