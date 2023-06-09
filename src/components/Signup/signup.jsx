import React from 'react'
import './signup.css'
import Logo from '../home_page/Navbar/AppNavbarLogo'
import { Link } from 'react-router-dom'
import facebook from '../../assets/images/login/facebook-logo.png'
import google from '../../assets/images/login/google-logo.png'
const Login = () => {
  return (
    <div className='app-login'>
        <div className='app-container'>
            <Logo />
            <p className='app-login_subtitle'>Already have an account? <Link to="/login" className='app-login_subtitle-link'>Log In</Link> </p>
            <button className='app-login_social'><img src={facebook} className='app-login_social-logo'/>Sign up with Facebook</button>
            <button className='app-login_social'><img src={google} className='app-login_social-logo'/>Sign up with Google</button>
            <div className='login-decal'>
                <div className='login-decal_line'></div>
                <p className='decal-text'>OR</p>
                <div className='login-decal_line'></div>
            </div>
            <form className='app-signup_form'>
              <div className='app-login-inputs'>
                <p className='form-title'>Your email</p>
                <input type='text' placeholder='Email' className='input-bar'/>
                <p className='form-title'>Your password</p>
                <input type='password' placeholder='Password' className='input-bar'/>
                <p className='form-title'>Confirm your password</p>
                <input type='password' placeholder='Confirm your password' className='input-bar'/>
              </div>
              <div className='app-signup-forgot'>
                <button className='app-login_button'>Sign Up</button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default Login