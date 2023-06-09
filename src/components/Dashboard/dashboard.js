import React, { useState, useEffect } from 'react';
import FirstPage from './FirstPage/FirstPage';
import SecondPage from './SecondPage/SecondPage';
import ThirdPage from './ThirdPage/ThirdPage';

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [animation, setAnimation] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [direction, setDirection] = useState('');

  const handleButtonClick = (direction) => {
    setButtonClicked(true);
    setAnimation(true);
    setDirection(direction);
  };

  useEffect(() => {
    if (animation) {
      const timer = setTimeout(() => {
        setCurrentPage((prevPage) => {
          if (direction === 'forward') {
            if (prevPage === 1) return 2;
            if (prevPage === 2) return 3;
            if (prevPage === 3) return 1;
          } else if (direction === 'backward') {
            if (prevPage === 1) return 3;
            if (prevPage === 2) return 1;
            if (prevPage === 3) return 2;
          }
        });
        setAnimation(false);
      }, 500); // Delay the page change to match the animation duration
      return () => clearTimeout(timer);
    }
  }, [animation, direction]);

  const goToPreviousPage = () => {
    handleButtonClick('backward');
  };

  const goToNextPage = () => {
    handleButtonClick('forward');
  };

  return (
    <div>
      {currentPage === 1 && (
        <FirstPage
          handleButtonClick={handleButtonClick}
          animate={buttonClicked}
          goToNextPage={goToNextPage}
        />
      )}
      {currentPage === 2 && (
        <SecondPage
          handleButtonClick={handleButtonClick}
          goToPreviousPage={goToPreviousPage}
          goToNextPage={goToNextPage}
        />
      )}
      {currentPage === 3 && (
        <ThirdPage
          handleButtonClick={handleButtonClick}
          goToPreviousPage={goToPreviousPage}
        />
      )}
    </div>
  );
};

export default Dashboard;