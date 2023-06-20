import React from 'react';
import './ChallengesPlans.css';
import { Scrollbars } from 'react-custom-scrollbars';
import ChallengeItem from './ChallengeItem';

const ChallengesPlans = () => {
  const challenges = [
    {
      id: 1,
      challengeType: 'Distance Challenge',
      description: 'Swim a mile (1.6 kilometers) in under 30 minutes',
    },
    {
      id: 2,
      challengeType: 'Speed Challenge',
      description: 'Swim 100 meters as fast as possible',
    },
    {
      id: 3,
      challengeType: 'Endurance Challenge',
      description: 'Swim continuously for 1 hour',
    },
    {
      id: 4,
      challengeType: 'Open Water Challenge',
      description: 'Cross a lake or swim from one point to another in the sea',
    },
  ];

  const token = localStorage.getItem('token'); // Get the token from local storage

  return (
    <div className='challenges-plans'>
      <p className='challenges-plans-text'>Challenges</p>
      <div className='challenges-plans-scrolling-list'>
        <Scrollbars style={{ width: 756, height: 430 }}>
          <div className='challenges-plans-scrolling-list-center'>
            {challenges.map((challenge) => (
              <React.Fragment key={challenge.id}>
                <ChallengeItem
                  challenge={challenge}
                  token={token}
                />
                <div className='challenges-plans-scrolling-list-line'></div>
              </React.Fragment>
            ))}
          </div>
        </Scrollbars>
      </div>
    </div>
  );
};

export default ChallengesPlans;