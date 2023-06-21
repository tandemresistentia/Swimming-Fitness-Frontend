import React,{useState} from 'react'
import { useSpring, animated } from 'react-spring';
import './contact.css'
import Navbar from '../home_page/Navbar/Navbar'
import Footer from '../home_page/Footer/footer'
import axios from 'axios';
import BASE_URL from './../config';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleFormSubmit = async (e) => {
      e.preventDefault();

      try {
       
        const response = await axios.post(`${BASE_URL}/api/contact/`, {
          name,
          email,
          message,
        });

        console.log(response.data); // Handle the response as desired

        // Clear the form inputs
        setName('');
        setEmail('');
        setMessage('');
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };
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
                <form className="contact-form" onSubmit={handleFormSubmit}>
                  <div className='app-rectangle'>
                    <p className='fill-text'>Your name</p>
                    <input
                      className='contact-input'
                      type='text'
                      placeholder='Name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className='app-rectangle'>
                    <p className='fill-text'>Email address</p>
                    <input
                      className='contact-input'
                      type='text'
                      placeholder='Email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className='app-rectangle'>
                    <p className='fill-text'>Message</p>
                    <textarea
                      className='contact-textarea'
                      type='text'
                      placeholder='Message'
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <div className='app-rectangle'>
                    <animated.button style={animationProps} className='contact-button' type='submit'>
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