import React from 'react'
import { useQuery } from '@apollo/client';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';
import { QUERY_EVENTS } from '../../utils/queries';


import '../../styles/Homepage.css';
// import rave from '../../assets/raveTime.mp4'


export default function Homepage() {
        return (
            <div>
                <h3>Upcoming Events</h3>
                <UpcomingEvents />
            </div>
        )  
}
