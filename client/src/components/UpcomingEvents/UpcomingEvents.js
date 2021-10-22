import React, { useEffect } from 'react';

export default function UpcomingEvents({ events }) {
    // useEffect(() => {
    //     console.log(events)
    // }, [])
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
};

