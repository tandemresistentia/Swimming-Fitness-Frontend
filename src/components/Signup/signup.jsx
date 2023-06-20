import React, { useState } from 'react';
import './signup.css';
import Logo from '../home_page/Navbar/AppNavbarLogo';
import { Link } from 'react-router-dom';
import facebook from '../../assets/images/login/facebook-logo.png';
import google from '../../assets/images/login/google-logo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [showScreen, setShowScreen] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const handleButtonClick = () => {
    setShowScreen(true);
    setTimeout(() => {
      setShowScreen(false);
    }, 2000);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset error messages
    setPasswordError('');
    setConfirmPasswordError('');
    setEmailError('');
    setUsernameError('');

    // Perform validation checks
    if (password1.length < 5) {
      setPasswordError('Password should be 5 characters or more');
      return;
    }

    if (password1 !== password2) {
      setConfirmPasswordError('Passwords do not match');
      return;
    }

    if (!emailIsValid(email)) {
      setEmailError('Invalid email format');
      return;
    }

    if (username.trim() === '') {
      setUsernameError('Username is required');
      return;
    }

    const formData = {
      username: username,
      email: email,
      password1: password1,
      password2: password2,
    };

    axios
      .post('http://localhost:8000/api/dj-rest-auth/registration/', formData)
      .then((response) => {
        console.log(response.data);
        navigate('/login');
        // Perform any additional actions upon successful registration
      })
      .catch((error) => {
        console.error(error);
        // Handle any errors that occurred during registration
      });
  };

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="app-login">
      <div className="app-container">
      <div className="app-login_logo">
        <Logo />
      </div>
        <p className="app-login_subtitle">
          Already have an account?
          <Link to="/login" className="app-login_subtitle-link">
            Log In
          </Link>
        </p>
        <button className='app-login_social' onClick={handleButtonClick}>
          <img src={facebook} className='app-login_social-logo' alt='Facebook' />
          Sign up with Facebook
        </button>
        <button className='app-login_social' onClick={handleButtonClick}>
          <img src={google} className='app-login_social-logo' alt='Google' />
          Sign up with Google
        </button>
        {showScreen && (
          <div className='screen'>
            <p className='error-text'>Social sign up is unavailable in test mode.</p>
          </div>
        )}

        <div className="login-decal">
          <div className="login-decal_line"></div>
          <p className="decal-text">OR</p>
          <div className="login-decal_line"></div>
        </div>
        <form className="app-signup_form" onSubmit={handleSubmit}>
          <div className="app-login-inputs">
            <p className="form-title">Your username</p>
            <input
              type="text"
              placeholder="Username"
              className="input-bar"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            {usernameError && <p className="error-message">{usernameError}</p>}

            <p className="form-title">Your email</p>
            <input
              type="text"
              placeholder="Email"
              className="input-bar"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {emailError && <p className="error-message">{emailError}</p>}

            <p className="form-title">Your password</p>
            <input
              type="password"
              placeholder="Password"
              className="input-bar"
              value={password1}
              onChange={(event) => setPassword1(event.target.value)}
            />
            {passwordError && <p className="error-message">{passwordError}</p>}

            <p className="form-title">Confirm your password</p>
            <input
              type="password"
              placeholder="Confirm your password"
              className="input-bar"
              value={password2}
              onChange={(event) => setPassword2(event.target.value)}
            />
            {confirmPasswordError && (
              <p className="error-message">{confirmPasswordError}</p>
            )}
          </div>
          <div className="app-signup-forgot">
            <button className="app-login_button" onClick={handleSubmit}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;