import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import './watch.scss'

function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video className="video" autoPlay progress controls src="./videos/bunny.mp4" />
      
    </div>
  )
}

export default Watch
