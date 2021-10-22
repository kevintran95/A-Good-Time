import React from 'react'
import { useQuery } from '@apollo/client';
<<<<<<< HEAD

// import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';

=======
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';
>>>>>>> 4a5530798794975d23551e8a35f94664f112d567
import { QUERY_EVENTS } from '../../utils/queries';


import '../../styles/Homepage.css';
import rave from '../../assets/raveTime.mp4'


export default function Homepage() {
    const { loading, data } = useQuery(QUERY_EVENTS);
    const events = data?.events || [];
<<<<<<< HEAD

    return (

        <div>
            <h3>Upcoming Events</h3>
            {/* <UpcomingEvents events={events} /> */}
        </div>
    )
=======
    if (loading) {
        return(
            <div>
                Loading...
            </div>
        )
    }
    {
        return (
            <div>
                <h3>Upcoming Events</h3>
                <UpcomingEvents events={events} />
            </div>
        )  
    }
>>>>>>> 4a5530798794975d23551e8a35f94664f112d567
}
