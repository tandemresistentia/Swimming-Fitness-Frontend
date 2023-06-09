import React, { useState } from 'react'
import './hero.css'
import Paragraph from './Paragraph';
import { Link } from 'react-router-dom'
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
        <Link to='/login' className={`app__hero-button-1 ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        JOIN NOW FOR FREE
      </Link>
      </div>
    </div>

      </div>
  )
}

export default Hero
