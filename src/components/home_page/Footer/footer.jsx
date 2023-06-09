import React from 'react'
import './footer.css'
import AppNavbarLinks from '../Navbar/AppNavbarLinks';
import AppNavbarLogo from '../Navbar/AppNavbarLogo';
const footer = () => {
  return (
    <div className='app-footer'>
      <div className='left-foot'>
        <div className='left-foot-1'>
          <AppNavbarLogo />  
        </div>
        <div className='left-foot-2'>
          <AppNavbarLinks />
          </div>
        <div className='left-foot-3'>      
          <p className='watermark'>© 2023 SwimTrack. All rights reserved.</p>
        </div>
      
      
      </div>
      <div className='right-foot'>
        <p className='foot-news'>Newsletter</p>
         <div className='foot-send'>
        <input className='foot-input' type='text' />
        <button className='foot-button'>Subscribe</button>
        </div>
        <div className='foot-links'>
            <li className='p_navbar'><a href='#swim_session'>Terms</a></li>
            <li className='p_navbar'><a href='#resources'>Privacy</a></li>
            <li className='p_navbar'><a href='#challenges'>Cookies</a></li>
        </div>
      </div>
    </div>
  )
}

export default footer