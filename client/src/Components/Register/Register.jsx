import React, {useState} from 'react'
import './Register.css'
import '../../App.css' 
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'

//import assets
import video from '../../LoginAssets/video.mp4';
import logo from '../../LoginAssets/image.png';


//imported icons
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import {MdMarkEmailRead} from 'react-icons/md'


const Register = () => {
  //useState to hold input
  const [email, setEmail] = useState('')
  const [useName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigateTo = useNavigate()

  //onlick
  const createUser = (e)=>{
    e.preventDefault()
    //require Axios to create API for connection
    Axios.post('http://localhost:3002/register', {
      //create variable to send to the server through the router
      Email: email,
      UserName: useName,
      Password: password
    }).then(()=>{
      //on register we will redirect to the login page
      navigateTo('/')

      //clear the field
      setEmail('')
      setUserName('')
      setUserName('')
    })
  }


  return (
    <div className="registerPage flex">
      <div className="container flex">

      <div className="videoDiv">
      <video src={video} autoPlay muted loop></video>

      <div className="textDiv">
      <h2 className='title'>Create and develop extraodinary products</h2>
      <p>Adopt the change in TECH!</p>
      </div>


      <div className="footerDiv flex">
        <span className="text">Have an account?</span>
        <Link to={'/'}>
        <button className="btn">Login</button>
        </Link>
      </div>
      </div>
      

      <div className="formDiv flex">
        <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Let's us know you</h3>
        </div>

        <form action="" className='form grid'>
            

            <div className="inputDiv">
                <label htmlFor="email">Email</label>
                <div className="input flex">
                <MdMarkEmailRead className="icon"/>
                <input type="email" id='email' placeholder='Enter Email'onChange={(event)=>{
                  setEmail(event.target.value)
                }}/>
                </div>
            </div>

            <div className="inputDiv">
  <label htmlFor="username">Username</label>
  <div className="input flex">
    <FaUserShield className='icon'/>
    <input type="text" id="username" placeholder="Enter Username" onChange={(event) => {
      setUserName(event.target.value)
    }}/>
  </div>
</div>

            
            <div className="inputDiv">
                <label htmlFor="passward">Password</label>
                <div className="input flex">
                <BsFillShieldLockFill className="icon"/>
                <input type="password" id='passward' placeholder='Enter Password' onChange={(event) => {
      setPassword(event.target.value)
    }}/>
                </div>
            </div>

            <button type='submit' className='btn flex' onClick={createUser}>
                <span>Register</span>
                <AiOutlineSwapRight className="icon"/>
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

export default Register;
