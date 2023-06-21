import React, { useState } from 'react';
import './login.css';
import Logo from '../home_page/Navbar/AppNavbarLogo';
import { Link, useHistory } from 'react-router-dom';
import facebook from '../../assets/images/login/facebook-logo.png';
import google from '../../assets/images/login/google-logo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BASE_URL from './../config';
const Login = () => {
  const [showScreen, setShowScreen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false); // Track login status
  const [loginError, setLoginError] = useState(''); // Track login error
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setShowScreen(true);
    setTimeout(() => {
      setShowScreen(false);
    }, 2000);
  };
  const handleLogin = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Check if username and password are not empty
    if (!username || !password) {
      setLoginError('Please enter both username and password.');
      return;
    }

    const formData = {
      username: username,
      password: password
    };

    setIsLoggingIn(true); // Disable the login button

    axios
    .post(`${BASE_URL}/api/dj-rest-auth/login/`, formData)
    .then(response => {
      console.log(response);
      const responseData = JSON.parse(response.config.data);
      const username = responseData.username;
      localStorage.setItem('username', username);
      const token = response.data.key;
      const tokenString = String(token); // Retrieve the token from the response
      localStorage.setItem('token', tokenString); // Save the token in local storage
      
      
      // Perform any additional actions upon successful login
      navigate('/');
      window.location.reload();

    })
    .catch(error => {
      console.error(error);
      setLoginError('Invalid login credentials.'); // Set login error message
    })
    .finally(() => {
      setIsLoggingIn(false); // Enable the login button
    });
  };

  return (
    <div className='app-login'>
      <div className='app-container'>
        <Logo />
        <p className='app-login_subtitle'>
          Don't have an account?{' '}
          <Link to='/signup' className='app-login_subtitle-link'>
            Sign up
          </Link>{' '}
        </p>
        <button className='app-login_social' onClick={handleButtonClick}>
          <img src={facebook} className='app-login_social-logo' alt='Facebook' />
          Log in with Facebook
        </button>
        <button className='app-login_social' onClick={handleButtonClick}>
          <img src={google} className='app-login_social-logo' alt='Google' />
          Log in with Google
        </button>
        {showScreen && (
          <div className='screen'>
            <p className='error-text'>Social log in is unavailable in test mode.</p>
          </div>
        )}
        <div className='login-decal'>
          <div className='login-decal_line'></div>
          <p className='decal-text'>OR</p>
          <div className='login-decal_line'></div>
        </div>
        <form className='app-login_form' onSubmit={handleLogin}>
          <div className='app-login-inputs'>
            <p className='form-title'>Your username</p>
            <input
              type='text'
              placeholder='Username'
              className='input-bar'
              value={username}
              onChange={event => setUsername(event.target.value)}
            />
            <p className='form-title'>Your password</p>
            <input
              type='password'
              placeholder='Password'
              className='input-bar'
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
            {loginError && <p className='error-message'>{loginError}</p>} {/* Display login error message */}
          </div>
          
          <div className='app-login-forgot'>
            {/*<Link to='/login' className='app-login_forgot-text'>
              Forgot your password?
          </Link>*/}
            <button type='submit' className='app-login_button' disabled={isLoggingIn}>
              {isLoggingIn ? 'Logging in...' : 'Log In'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;