import React, { useEffect, useState } from 'react'
import './Login.css';
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'

//import assets
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/image.png'


//imported icons
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'


const Login = () => {

  //UseState Hook to store inputs
  const [loginUseName, setLoginUserName] = useState('')
  const [LoginPassword, setLoginPassword] = useState('')
  const navigateTo = useNavigate()

  //now show the message to the user
  const [loginStatus, setLoginStatus] = useState('')
  const [statusHolder, setstatusHolder] = useState('message')

  //onlick
  const loginUser = (e) => {
    //prevemt submitting
    e.preventDefault();
    //require Axios to create API for connection
    Axios.post('http://localhost:3002/login', {
      //create variable to send to the server through the router
      LoginUserName: loginUseName,
      LoginPassword: LoginPassword
    }).then((response) => {
      console.log(response)
      //now we can catch an error if credentials are wrong
      if (response.data.message || loginUseName == '' || LoginPassword == '') {
        //if credential don't match
        navigateTo('/')//so we navigate to the same login page
        setLoginStatus('Credentials do not Exist!')
      }
      else {
        navigateTo('/dashboard')//if the credentails are right and we shall navigate to dashboard
      }
    })
  }

  useEffect(() => {
    if (loginStatus !== '') {
      setstatusHolder('showMessage')//show message
      setTimeout(() => {
        setstatusHolder('message')//hide after 4s
      }, 4000);
    }
  }, [loginStatus])

  //clear the form on submit
  const onSubmit = () => {
    setLoginUserName('')
    setLoginPassword('')
  }


  return (
    <div className="loginPage flex">
      <div className="container flex">

        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className='title'>Create and develop extraodinary products</h2>
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
                <input type="text" id='username' placeholder='Enter username' onChange={(event) => {
                  setLoginUserName(event.target.value)
                }} />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="passward">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input type="password" id='passward' placeholder='Enter Password' onChange={(event) => {
                  setLoginPassword(event.target.value)
                }} />
              </div>
            </div>

            <button type='submit' className='btn flex' onClick={loginUser}>
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              Forgot Your Password? <a href="">Click Here</a>
            </span>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;
