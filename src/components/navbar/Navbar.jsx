import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import React from 'react';
import './navbar.scss';

function Navbar() {
  return (
    <div className='navbar'>
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
          <Search />
          <span>KID</span>
          <Notifications />
          <img src="./images/users/1.png" alt="profile" />
          <ArrowDropDown />
        </div>
      </div>
    </div>
  )
}

export default Navbar
