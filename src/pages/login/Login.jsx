
import React from 'react'
import './login.scss'

function Login() {
  return (
    <div className="login" style={{backgroundImage: "url('./images/misc/home-bg.jpg')"}}>
      <div className="top">
        <div className="wrapper">
          <img src="./images/logo.png" alt="register" className="logo" />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="password" />
          <button className="loginButton">Sign In</button>
          <span>New to Netflix? <b>Sign Up Now.</b></span>
          <small>This page is protected by Google reCAPTCHA to ensure you are not a bot. <b>Learn more</b></small>
        </form>
        
      </div>
    </div>
  )
}

export default Login
