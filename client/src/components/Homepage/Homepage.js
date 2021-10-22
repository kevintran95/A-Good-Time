import React from 'react'
import '../../styles/Homepage.css';
import rave from '../../assets/raveTime.mp4'

export default function Homepage() {
    return (
        <div>
          <video src={ rave } style = "object-position: center" muted loop autoplay></video>
        </div>
    )
}
