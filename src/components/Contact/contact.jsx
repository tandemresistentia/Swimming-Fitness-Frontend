import React from 'react'
import { useSpring, animated } from 'react-spring';
import './contact.css'
import Navbar from '../home_page/Navbar/Navbar'
import Footer from '../home_page/Footer/footer'
const Contact = () => {
    
    const animatedBackground = useSpring({
      from: { filter: 'blur(8px)' },
      to: { filter: 'blur(0px)' },
      config: { duration: 1000 },
    });

    const animatedH1 = useSpring({
        from: { opacity: 0, transform: 'translateX(-100px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
        config: { duration: 1000 },
      });

    const animationProps = useSpring({
        from: { opacity: 0, transform: 'scale(0.8)', background: '#000000' },
        to: async (next) => {
          while (true) {
            await next({ opacity: 1, transform: 'scale(1)', background: '#00B9C5' });
            await next({ opacity: 0.8, transform: 'scale(0.9)', background: '#556987' });
          }
        },
        config: { duration: 1000 },
      });

      
  return (
    <div className='app-contact'>
            <animated.div style={animatedBackground} className='background-left'></animated.div>
        <div className='app-navbar'>
            <Navbar />
        </div>
        <div className='app-row'>
        <div className='left-side'>
            <animated.div style={animatedH1} className='contact-h1'>
            <p>We'd love to hear from you</p>
            </animated.div>
        </div>
        <div className='right-side'>
            <div className='contact-form'>
                <p className='contact-title'>Contact Us</p>
                <form className='contact-form'>

                    <div className='app-rectangle'>
                    <p className='fill-text'>Your name</p>
                    <input className='contact-input' type='text' placeholder='Name' />
                    </div>
                    <div className='app-rectangle'>
                    <p className='fill-text'>Email address</p>
                    <input className='contact-input' type='text' placeholder='Email' />
                    </div>
                    <div className='app-rectangle'>
                    <p className='fill-text'>Message</p>
                    <textarea className='contact-textarea' type='text' placeholder='Message' />
                    </div>
                    <div className='app-rectangle'>
                        <animated.button style={animationProps} className='contact-button'>
                        Send message
                        </animated.button>
                    </div>
                </form>
                </div>
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default Contact