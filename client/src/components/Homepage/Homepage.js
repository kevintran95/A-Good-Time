import React from 'react'
import { useQuery } from '@apollo/client';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';
import { QUERY_EVENTS } from '../../utils/queries';
import Rave from '../../assets/rave-pic.jpg'
import raveTime from '../../assets/raveTime.mp4'


import '../../styles/Homepage.css';


export default function Homepage() {
        return (
            <div className="d-flex justify-content-around">
                {/* <video autoPlay loop muted
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
                </video> */}
                {/* <h3>Upcoming Events</h3> */}
                {/* <UpcomingEvents /> */}
                {/* <p id="timeOfYourLifeP" style={{ listStyle: "none", textAlign: "center" }}>Get Ready To Have The Time Of Your Life</p> */}
                <img src={Rave} alt="Huge Party"/>
                <p id="aGoodTimeExplanationP">This is not a normal website that gives you something to do. A Good Time will always promise to deliver the best experience no matter the occasion. If you want to schedule a function as a promoter you must sign up to do so. Party at your own risk!</p>
                
            </div>
        )  
}
