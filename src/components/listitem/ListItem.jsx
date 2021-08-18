import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import './listitem.scss';

function ListItem({index}) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "./videos/bunny.mp4";

  return (
    <div className="listitem" 
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}>
      <img src="./images/series/crime/long-shot/small.jpg" alt="series" />

      {
        isHovered && (
          <>
            <video src={trailer} autoPlay={true} loop />
            <div className="itemsInfo">
              <div className="icons">
                <PlayArrow />
                <Add />
                <ThumbUpAltOutlined />
                <ThumbDownOutlined />
              </div>
              <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span>+16</span>
                <span>2020</span>
              </div>
              <div className="desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. error ipsa perferendis delectus cum inventore quod!
              </div>
              <div className="genre">
                Action
              </div>
            </div>
          </>
        )
      }
      
    </div>
  )
}

export default ListItem
