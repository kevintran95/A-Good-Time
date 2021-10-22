import React from 'react'
import { useQuery } from '@apollo/client';

import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';

import { QUERY_EVENTS } from '../../utils/queries';


export default function Homepage() {
    const { loading, data } = useQuery(QUERY_EVENTS);
    const events = data?.events || [];

    return (
        <div>
            <h3>Upcoming Events</h3>
            <UpcomingEvents events={events} />
        </div>
    )
}
