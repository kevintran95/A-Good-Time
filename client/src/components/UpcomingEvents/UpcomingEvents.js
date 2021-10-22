import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_EVENTS } from '../../utils/queries';

export default function UpcomingEvents() {
    const { loading, data } = useQuery(QUERY_EVENTS);
    const events = data?.events || [];
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
                <h3>Come Join The Fun</h3>
                {events &&
                    events.map((event) => (
                        <div key={event._id}>
                            <h4>{event.eventName}</h4>
                        </div>
                    ))}
            </div>
        );  
    }
};

