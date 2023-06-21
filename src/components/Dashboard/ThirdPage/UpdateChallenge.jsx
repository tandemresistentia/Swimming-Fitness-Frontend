import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddButton from '../../../assets/images/dashboard/AddButton.png';
import Divider from '../../../assets/images/dashboard/Divider.png';
import './UpdateChallenge.css';
import { Scrollbars } from 'react-custom-scrollbars';
import BASE_URL from './../../config';
const UpdateChallenge = () => {
  const [challenges, setChallenges] = useState([]);
  const [isUpdating, setIsUpdating] = useState(true);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchChallenges();
    fetchProfileData();
  }, []);

  const fetchChallenges = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/challenges/`, {
        headers: { Authorization: `Token ${token}` },
      });

      const challengesData = response.data;
      setChallenges(challengesData);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProfileData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/profile/`, {
        headers: { Authorization: `Token ${token}` },
      });

      const profileData = response.data;
      setProfileData(profileData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddButtonClick = () => {
    setIsUpdating(!isUpdating);
  };

  const handleCompletedButtonClick = async (challengeId) => {
    const challengeToUpdate = challenges.find(challenge => challenge.id === challengeId);

    if (!challengeToUpdate) {
      console.error('Challenge not found');
      return;
    }

    setSelectedChallenge(challengeToUpdate);

    try {
      await axios.delete(`${BASE_URL}/api/challenges/${challengeId}/`, {
        headers: { Authorization: `Token ${token}` },
      });

      // Update the challenge in the local state
      setChallenges(challenges.map(challenge => {
        if (challenge.id === challengeId) {
          return { ...challenge, status: "Completed" };
        }
        return challenge;
      }));

      // Update the completed_challenges field in the profile
      const profileDataToUpdate = {
        age: profileData.age,
        gender: profileData.gender,
        location: profileData.location,
        username: profileData.username,
        completed_challenges: profileData.completed_challenges + 1,
      };

      await axios.put(`${BASE_URL}/api/profile/`, profileDataToUpdate, {
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'application/json',
        },
      });

      setSelectedChallenge(null);
      setIsUpdating(true);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='log-challenges'>
      <div className='log-challenge'>
        <p className='log-challenges-text'>Update Challenge</p>
        <button className='add-button' onClick={handleAddButtonClick}>
          <img src={AddButton} alt='' />
        </button>
      </div>
      <div className='challenge-progress'>
        <p className='challenge-progress-text'>Challenge progress</p>
        <img src={Divider} alt='' />
      </div>
      {isUpdating && selectedChallenge && (
        <div className='update-container'>
          <div className='update-form'>
            <p className='update-title'>Update Challenge Status</p>
            <p className='update-description'>
              {selectedChallenge ? `${selectedChallenge.challenge_type}: ${selectedChallenge.description}` : ''}
            </p>
          </div>
        </div>
      )}
      <Scrollbars style={{ width: '200px', height: '180px' }}>
        <div className='existing-challenges'>
          {challenges.map((challenge) => (
            <div key={challenge.id} className='challenge-item'>
              <div className='challenge-item-text'>
                {challenge.challenge_type}: {challenge.description}
              </div>
              {!isUpdating && (
                <div className='update-buttons'>
                  <button className='update-button' onClick={() => handleCompletedButtonClick(challenge.id)}>
                    <p className='update-button-text'>Completed</p>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </Scrollbars>
    </div>
  );
};

export default UpdateChallenge;
