import React from 'react'
import './cta.css'
import { Link } from 'react-router-dom'
const Cta = () => {
  return (
    <div className='app_cta'>
        <div className='rectangle'>
        <div className='inside-rectangle'>
            <div className='cta-text'>
                <p className='big-text'>Break through plateaus, swim faster.</p>
                <p className='small-text'>Take the leap, embrace the challenge, and join our transformative program today</p>
            </div>
            <div className='cta-buttons'>
                <button className='cta-button-1'><Link className='cta-button-1-1' to="/login">Get Started</Link></button>
                <button className='cta-button-2'><Link className='cta-button-2-2' to="/resources">Learn More</Link></button>
            </div>
            
        </div>
        </div>
        
    </div>
  )
}

export default Cta