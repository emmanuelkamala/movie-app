import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import React, { useState } from 'react';
import './navbar.scss';

function Navbar() {
  const[isScrolled, setIsScrolled] = useState(false);
  window.onScroll = () => {
    setIsScrolled(window.pageYOffset === 0? false: true);
    return () => (window.onScroll = null);
  }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src="./images/logo.png" alt="logo" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
       
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img src="./images/users/1.png" alt="profile" />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
