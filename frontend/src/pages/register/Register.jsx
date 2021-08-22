import { ArrowForwardOutlined } from '@material-ui/icons'
import React, { useRef } from 'react'
import { useState } from 'react'
import './register.scss'

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleClick = () => {
    setEmail(emailRef.current.value)
  }

  const handleStart = () => {
    setPassword(passwordRef.current.value)
  }

  return (
    <div className="register" style={{backgroundImage: "url('./images/misc/home-bg.jpg')"}}>
      <div className="top">
        <div className="wrapper">
          <img src="./images/logo.png" alt="register" className="logo" />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
         <h1 className="infoHeading">Unlimited movies, TV shows, and more.</h1>
        <h2 className="infoDesc">Watch anywhere. Cancel anytime.</h2>
        <p className="infoAction">Ready to watch? Enter your email to create or restart your membership.</p>

        {
          !email ? (
            <div className="input">
              <input type="email" placeholder="Email address" ref={emailRef} />
              <button className="registerButton" onClick={handleClick}>Get Started <ArrowForwardOutlined /></button>
            </div>
          ) : (
            <form className="input">
              <input type="password" placeholder="Password" ref={passwordRef} />
              <button className="registerButton" onClick={handleStart}>Start </button>
            </form>
          )
        }
        
      </div>
    </div>
  )
}

export default Register
