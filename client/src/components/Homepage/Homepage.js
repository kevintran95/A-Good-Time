import React from 'react'
import { useQuery } from '@apollo/client';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';
import { QUERY_EVENTS } from '../../utils/queries';
import raveTime from '../../assets/raveTime.mp4'


import '../../styles/Homepage.css';
import rave from '../../assets/raveTime.mp4'


export default function Homepage() {
        return (
            <div>
                <video autoPlay loop muted
                style = {{
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1",
                    marginTop: "3%"
                }}>
                    <source src={raveTime} type="video/mp4"></source>
                </video>
                {/* <h3>Upcoming Events</h3> */}
                <UpcomingEvents />
                
            </div>
        )  
}
