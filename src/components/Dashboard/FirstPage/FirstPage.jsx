
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBarLoggedIn from '../../home_page/Navbar/Navbar';
import './FirstPage.css';

import BottomProfile from '../../../assets/images/dashboard/bottom-profile.png';
import ChevronRight from '../../../assets/images/dashboard/chevron-right.png';
import DuckBack from '../../../assets/images/dashboard/DuckBack.png';
import DuckyDuck from '../../../assets/images/dashboard/ducky-duck.png';
import Clock from '../../../assets/images/dashboard/Clock.png';
import Smiling from '../../../assets/images/dashboard/Smiling.png';
import Internet from '../../../assets/images/dashboard/Internet.png';
import Chart from '../../../assets/images/dashboard/Chart.png';
import Swimmer from '../../../assets/images/dashboard/Swimmer.png';
import Vector from '../../../assets/images/dashboard/Vector.png';
import BASE_URL from './../../config';

const FirstPage = ({ handleButtonClick, goToNextPage, animate }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedProfileData, setEditedProfileData] = useState({});
  const [profileData, setProfileData] = useState(null);

  const handleEditProfile = () => {
    if (editMode) {
      // Save the edited profile data to the API
      saveProfileData();
    } else {
      // Enter edit mode
      setEditMode(true);
      setEditedProfileData(profileData);
    }
  };

  const saveProfileData = () => {
    const token = localStorage.getItem('token');
    const requestBody = {
      age: editedProfileData.age,
      gender: editedProfileData.gender,
      location: editedProfileData.location,
      username: editedProfileData.username,
      // Add other profile fields as needed
    };
    axios
      .put(`${BASE_URL}/api/profile/`, requestBody, {
        headers: {
          Authorization: `token ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('Profile data saved successfully!');
        setEditMode(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error saving profile data:', error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!profileData) {
      axios
        .get(`${BASE_URL}/api/profile/`, {
          headers: {
            Authorization: `token ${token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          if (response.status === 200) {
            const fetchedProfileData = response.data;
            setProfileData(fetchedProfileData);
          } else {
            throw new Error('Request failed');
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [profileData]);

  const handleMultipleChange = (event) => {

    handleInputChange(event);
  };

  return (
    <div className={`app-profile ${animate ? 'animate' : ''}`}>
      <div className='container-profile'>
        <div className='upside-nav'>
          <NavBarLoggedIn />
        </div>

        <div className='middle-profile'>
          <div className='middle-upper-profile'>
          <div className='profile-photo'>
      <img className='duck-front' src={DuckyDuck} alt='profile-photo' />
       
        <img className='duck-back' src={DuckBack} />
        {editMode ? (
            <input
              className='profile-name-user'
              type='text'
              name='username'
              value={editedProfileData.username || ''}
              onChange={handleInputChange}
            />
          ) : (
            <p className='profile-name'>{profileData ? profileData.username : 'Loading...'}</p>
          )}
        
      </div>

            <div className='profile-info-main'>
              <div className='profile-info-left'>
                <div className='profile-info'>
                  <img src={Clock} alt='clock-icon' />
                  <p className='profile-data'>Age</p>
                  {editMode ? (
                    <input
                      className='profile-data'
                      type='text'
                      name='age'
                      value={editedProfileData.age || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p className='profile-data'>
                      {profileData ? profileData.age : 'Loading...'}
                    </p>
                  )}
                </div>

                <div className='profile-info'>
                  <img src={Smiling} alt='smiling-icon' />
                  <p className='profile-data'>Gender</p>
                  {editMode ? (
                    <select
                      className='profile-data'
                      name='gender'
                      value={editedProfileData.gender || ''}
                      onChange={handleInputChange}
                    >
                      <option value=''>Select Gender</option>
                      <option value='Male'>Male</option>
                      <option value='Female'>Female</option>
                      <option value='Other'>Other</option>
                    </select>
                  ) : (
                    <p className='profile-data'>
                    {profileData ? profileData.gender : 'Loading...'}
                  </p>
                  )}

                </div>

                <div className='profile-info'>
                  <img src={Internet} alt='internet-icon' />
                  <p className='profile-data'>Location</p>
                  {editMode ? (
                    <input
                      className='profile-data'
                      type='text'
                      name='location'
                      value={editedProfileData.location || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p className='profile-data'>
                      {profileData ? profileData.location : 'Loading...'}
                    </p>
                  )}
                </div>
              </div>

              <div className='profile-info-right'>
                <div className='profile-info'>
                  <img src={Chart} alt='chart-icon' />
                  <p className='profile-data'>Total Distance Swum</p>
                  <p className='profile-data'>
                    {profileData ? profileData.total_distance_swum.toFixed(2) : 'Loading...'}
                  </p>
                </div>
                <div className='profile-info'>
                  <img src={Swimmer} alt='swimmer-icon' />
                  <p className='profile-data'>Total Trained Time</p>
                  <p className='profile-data'>
                    {profileData ? profileData.average_lap_time.toFixed(2) : 'Loading...'}
                  </p>
                </div>
                <div className='profile-info'>
                  <img src={Vector} alt='vector-icon' />
                  <p className='profile-data'>Completed Challenges</p>
                  <p className='profile-data'>
                    {profileData ? profileData.completed_challenges : 'Loading...'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='middle-downside-profile'>
            <button className='profile-button' onClick={handleEditProfile}>
              {editMode ? 'Save Profile' : 'Edit Profile'}
            </button>
            <Link to="/dashboard"><button className='profile-button2'>
              Log a new swimming session          
            </button></Link>
            <Link to="/challenges"><button className='profile-button'>
              Start a new challenge          
            </button></Link>
          </div>
        </div>

        <div className='downside-profile'>
          <img className='bottom-profile' src={BottomProfile} alt='bottom-profile' />
        </div>
      </div>

      <div className='slide-button1'>
        <button className='button-right-profile'>
          <Link to='/dashboard'>
            <img src={ChevronRight} alt='chevron-right' />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default FirstPage;