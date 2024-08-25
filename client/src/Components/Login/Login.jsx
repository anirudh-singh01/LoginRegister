import React, { useEffect, useState } from 'react';
import './Login.css';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

// Import assets
import video from '../../LoginAssets/video.mp4';
import logo from '../../LoginAssets/image.png';

// Imported icons
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';

const Login = () => {
  // UseState Hook to store inputs
  const [loginUserName, setLoginUserName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigateTo = useNavigate();

  // State to show a message to the user
  const [loginStatus, setLoginStatus] = useState('');
  const [statusHolder, setStatusHolder] = useState('message');

  // Handle login
  const loginUser = (e) => {
    e.preventDefault();

    Axios.post('http://localhost:3002/login', {
      LoginUserName: loginUserName,
      LoginPassword: loginPassword,
    }).then((response) => {
      console.log(response);

      // Check if credentials are incorrect or fields are empty
      if (response.data.message || loginUserName === '' || loginPassword === '') {
        navigateTo('/'); // Navigate to the same login page
        setLoginStatus('Credentials do not Exist!');
      } else {
        navigateTo('/dashboard'); // Navigate to dashboard if credentials are correct
      }
    });
  };

  useEffect(() => {
    if (loginStatus !== '') {
      setStatusHolder('showMessage'); // Show message
      setTimeout(() => {
        setStatusHolder('message'); // Hide after 4 seconds
      }, 4000);
    }
  }, [loginStatus]);

  // Clear the form on submit
  const onSubmit = () => {
    setLoginUserName('');
    setLoginPassword('');
  };

  return (
    <div className="loginPage flex">
      <div className="container flex">

        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className='title'>Create and develop extraordinary products</h2>
            <p>Adopt the change in TECH!</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Don't have an account?</span>
            <Link to={'/register'}>
              <button className="btn">Sign up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Welcome Back!</h3>
          </div>

          <form action="" className='form grid' onSubmit={onSubmit}>
            <span className={statusHolder}>{loginStatus}</span>

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id='username'
                  placeholder='Enter username'
                  onChange={(event) => setLoginUserName(event.target.value)}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id='password'
                  placeholder='Enter Password'
                  onChange={(event) => setLoginPassword(event.target.value)}
                />
              </div>
            </div>

            <button type='submit' className='btn flex' onClick={loginUser}>
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              Forgot Your Password? <Link to="/reset">Click Here</Link>
            </span>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;
