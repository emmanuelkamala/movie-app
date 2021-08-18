import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import React from 'react';
import './featured.scss';

function Featured() {
  return (
    <div className="featured">
      <img src="./images/misc/home-bg-main.jpg" alt="featured" />

      <div className="info">
        <img src="./images/misc/projectpower.png" alt="movie title" />
        <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo impedit quae dolor modi. Sapiente ipsa et itaque dolorum necessitatibus, dolorem tempora voluptatem assumenda cum ullam. Sed reiciendis quae perferendis consectetur.</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>More</span>
          </button>
        </div>
        {/* <span className="infoHeading">Unlimited movies, TV shows, and more.</span>
        <span className="infoDesc">Watch anywhere. Cancel anytime.</span>
        <span className="infoAction">Ready to watch? Enter your email to create or restart your membership.</span>
        <form action="!#" className="infoForm">
          <input type="email" placeholder="Email address" />
          <button className="infoButton"><span className="infoButtonTitle">Get Started</span><ArrowForwardOutlined /></button>
        </form> */}
      </div>
    </div>
  )
}

export default Featured
