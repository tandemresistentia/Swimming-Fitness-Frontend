import React from 'react';
import './Resources.css';
import Navbar from '../home_page/Navbar/Navbar';
import Footer from '../home_page/Footer/footer';

const Resources = () => {
  return (
    <div className="app-resources">
      <div className="resources-main">
        <div className="resources-nav">
          <Navbar />
        </div>
        <div className="resources-title">
          <p className="title-big">Resources</p>
          <p className="title-small">
            Your Source for Swim Training Resources: Explore Our Page
          </p>
        </div>
        <div className="resources-body">
          <div className="resources-body-element-1">
            <p className="resources-body-title">Sport Fitness Advisor</p>
            <div className="resources-body-element-line"></div>
            <p className="resources-body-text">
              Beginner Swim Workout 1
              Distance: 1,100yds / 1,100 m
              Warm-up: 200 easy swim freestyle, 100 kick with a kickboard
              6 x 100 freestyle – odd lengths are easy, even lengths are
              moderate effort
              (or a build from easy to moderate) – 10 to 30 seconds rest
              between each set
              Cool down: 200 easy any swim
            </p>
            <a
              className="resources-body-button"
              href="https://www.sport-fitness-advisor.com/swim-workouts.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Continue
            </a>
          </div>
          <div className="resources-body-element-video">
            <p className="resources-body-title">Global Triathlon Network</p>
            <div className="resources-body-element-line"></div>
            <iframe
              title='1'
              className="resources-body-video"
              src="https://www.youtube.com/embed/o00QFnISZS0"
              allow="fullscreen"
            ></iframe>
          </div>
          <div className="resources-body-element-2">
            <p className="resources-body-title">YourSwimLog</p>
            <div className="resources-body-element-line"></div>
            <p className="resources-body-text">
              600 choice strokes as 200 swim,
              200 kick, 200 drill
              10×100 IM (fly, back, breaststroke, free by 25) @:20 rest
              – alternate between
              drill and swim by 100
              8×50 swim alternate fast/easy by 50 — @:20 rest
              6×50 pull alternate fast/easy by 50 @:20 rest
              4×50 kick alternate fast/easy by 50 @:20 rest
              50 swim all out
            </p>
            <a
              className="resources-body-button"
              href="https://www.yourswimlog.com/one-hour-swim-workouts/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Continue
            </a>
          </div>
        </div>
      </div>
      <div className="resources-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Resources;