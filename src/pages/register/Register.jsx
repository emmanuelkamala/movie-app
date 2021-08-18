import { ArrowForwardOutlined } from '@material-ui/icons'
import React from 'react'
import './register.scss'

function Register() {
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
        <div className="input">
          <input type="email" placeholder="Email address" />
          <button className="registerButton"><span className="infoButtonTitle">Get Started</span><ArrowForwardOutlined /></button>
        </div>
      </div>
    </div>
  )
}

export default Register
