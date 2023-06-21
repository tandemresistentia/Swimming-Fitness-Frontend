import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './stats.css';

const Stats = () => {
  const [loaded, setLoaded] = useState(false);
  const targetPercentages = [160, 140, 250];
  const [percentages, setPercentages] = useState([0, 0, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loaded) {
      const interval = setInterval(() => {
        setPercentages((prevPercentages) => {
          const newPercentages = prevPercentages.map((value, index) => {
            const increment = Math.ceil(targetPercentages[index] / 100);
            const newValue = value + increment;
            return newValue >= targetPercentages[index] ? targetPercentages[index] : newValue;
          });

          if (newPercentages.every((value, index) => value === targetPercentages[index])) {
            clearInterval(interval);
          }

          return newPercentages;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [loaded, targetPercentages]); // Added targetPercentages to the dependency array

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 200, // Offset (in pixels) from the element's bottom before the animation triggers
    });
  }, []);

  return (
    <div className='app-stats'>
      <div className='app-stats-head'>
        <p className='big-stats'>Embraced by swimmers across 80+ countries</p>
        <p className='small-stats'>Enroll today to experience all the benefits available to you</p>
      </div>
      <div className='app-stats-body'>
        <div className='app-stats-body-item' data-aos='fade-up'>
          <p className={`percentage ${loaded ? 'loaded' : ''}`} data-aos='fade-right'>
            {percentages[0]}%
          </p>
          <p className='satisfaction' data-aos='fade-left'>
            Motivation
          </p>
        </div>
        <div className='app-stats-body-item' data-aos='fade-up'>
          <p className={`percentage ${loaded ? 'loaded' : ''}`} data-aos='fade-right'>
            {percentages[1]}%
          </p>
          <p className='satisfaction' data-aos='fade-left'>
            Productivity
          </p>
        </div>
        <div className='app-stats-body-item' data-aos='fade-up'>
          <p className={`percentage ${loaded ? 'loaded' : ''}`} data-aos='fade-right'>
            {percentages[2]}%
          </p>
          <p className='satisfaction' data-aos='fade-left'>
            Improvement
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;