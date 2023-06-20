import React from 'react';
import axios from 'axios';

function ChallengeItem(props) {
  const { challenge, token } = props;
  const { id, challengeType, description } = challenge;
  const usernameData = localStorage.getItem('username');

  const updateChallenge = async () => {
    try {
      const updatedChallenge = {
        challenge_type: challengeType,
        description: description,
        status: 'Pending',
        username: usernameData, // Get the username from local storage
        id: id,
      };

      const response = await axios.post(
        `http://127.0.0.1:8000/api/challenges/${id}/`,
        updatedChallenge,
        {
          headers: { Authorization: `token ${token}` },
        }
      );

      console.log(response.data);
      window.location.reload(); // Reload the page
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='challenges-plans-scrolling-list-item'>
      <p className='challenge-desc-text'>
        {challengeType}: {description}
      </p>
      <button className='challenges-plans-scrolling-list-item-button' onClick={updateChallenge}>
        Start
      </button>
    </div>
  );
}

export default ChallengeItem;