import './home.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hero from './Hero/hero';
import Navbar from './Navbar/Navbar';
import NavbarLoggedIn from './Navbar/NavbarLoggedIn'; // import the logged-in navbar component
import Stats from './Stats/stats';
import Cta from './CTA/cta';
import Statements from './statements/statements';
import Footer from './Footer/footer';

const Home = () => {


  useEffect(() => {
    const backgroundHeaderElement = document.querySelector('.background-image_header');
    backgroundHeaderElement.classList.add('animate');
  }, []);

  return (
    <div className='home-page'>
      <div className="background-image_header">
        <Navbar/>
        <Hero />
      </div>
      <Stats />
      <Cta />
      <Statements />
      <Footer />
    </div>
  );
}

export default Home;