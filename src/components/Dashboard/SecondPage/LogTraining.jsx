import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';
import { Line } from 'react-chartjs-2';
import AddButton from '../../../assets/images/dashboard/AddButton.png';
import LessButton from '../../../assets/images/dashboard/LessButton.png';
import Divider from '../../../assets/images/dashboard/Divider.png';
import './SecondPage.css';
import './LogTraining.css';
import { Scrollbars } from 'react-custom-scrollbars';

const LogTraining = () => {
  const [showRectangle, setShowRectangle] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const token = localStorage.getItem('token');

  const toggleRectangle = () => {
    setShowRectangle(!showRectangle);
  };

  const fetchProfileData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/profile/', {
        headers: { Authorization: `Token ${token}` },
      });

      const profileData = response.data;
      setProfileData(profileData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const usernameData = localStorage.getItem('username');

    const logTrainingData = {
      distance: event.target.distance.value,
      time: event.target.time.value,
      fastest_lap: event.target.fastestLap.value,
      username: usernameData,
    };

    const apiUrl = 'http://127.0.0.1:8000/api/logtraining/';
    const token = localStorage.getItem('token');

    axios
      .post(apiUrl, logTrainingData, {
        headers: {
          Authorization: `token ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(async (response) => {
        const profileDataToUpdate = {
          age: profileData.age,
          gender: profileData.gender,
          location: profileData.location,
          username: profileData.username,
          completed_challenges: profileData.completed_challenges,
          total_distance_swum: profileData.total_distance_swum + parseInt(logTrainingData.distance) / 1000,
          average_lap_time: profileData.average_lap_time + parseInt(logTrainingData.time) / 60,
        };

        await axios.put('http://127.0.0.1:8000/api/profile/', profileDataToUpdate, {
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json',
          },
        });

        console.log('Log Training saved successfully:', response.data);
        window.location.reload();
        // Do something after successful save
      })
      .catch((error) => {
        console.error('Error saving Log Training:', error);
        // Handle error case
      });
  };

  const [logData, setLogData] = useState([]);

  useEffect(() => {
    const fetchLogData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://127.0.0.1:8000/api/logtraining/', {
          headers: {
            Authorization: `token ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          const fetchedLogData = response.data;
          setLogData(fetchedLogData);
        } else {
          throw new Error('Request failed');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchLogData();
  }, []);

  const saveLogTraining = () => {
    const token = localStorage.getItem('token');
    const requestBody = {
      distance: setLogData.distance,
      time: setLogData.time,
      fastest_lap: setLogData.fastest_lap,
      // Add other log training fields as needed
    };
  };

  return (
    <>
      <div className='log-dashboard'>
        <div className='log-training'>
          <p className='log-training-text'>Log Training</p>
          <button className='animation-button' onClick={toggleRectangle}>
            <img src={showRectangle ? LessButton : AddButton} alt='Button' />
          </button>
          <CSSTransition in={showRectangle} timeout={300} classNames='fade' unmountOnExit>
            <div className='log-training-rectangle'>
              <p className='profile-data'>Add your training session</p>
              <form className='log-training-form' onSubmit={handleFormSubmit}>
                <div className='dashboard-rectangle-group'>
                  <input className='profile-data' type='text' name='distance' placeholder='Distance' />
                  <p className='dashboard-rectangle-text'>Meters</p>
                </div>
                <div className='dashboard-rectangle-group'>
                  <input className='profile-data' type='text' name='time' placeholder='Time' />
                  <p className='dashboard-rectangle-text'>Minutes</p>
                </div>
                <div className='dashboard-rectangle-group'>
                  <input className='profile-data' type='text' name='fastestLap' placeholder='Fastest Lap' />
                  <p className='dashboard-rectangle-text'>Seconds</p>
                </div>
                <button className='training-chart-button' type='submit'>
                  Save
                </button>
              </form>
            </div>
          </CSSTransition>
        </div>
        <div>
          <div className='recent-activity'>
            <p className='recent-activity-text'>Recent Activity</p>
            <img src={Divider} alt='Divider' />

            <div className='recent-activity-groups'>
              <Scrollbars style={{ width: '200px', height: '100%' }}>
                {/* Display log details here */}
                {logData.map((log) => (
                  <div className='log-item-group' key={log.id}>
                    <div className='log-item'>
                      <p className='logo-item-text'>Distance {log.distance}m</p>
                      <p className='logo-item-text'>Time {log.time}min</p>
                      <p className='logo-item-text'>Lap {log.fastest_lap}s</p>
                    </div>
                    <img src={Divider} alt='Divider' />
                  </div>
                ))}
              </Scrollbars>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogTraining;