import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_EVENTS } from '../../utils/queries';
import { Card } from 'react-bootstrap'

export default function UpcomingEvents() {
    const { loading, data } = useQuery(QUERY_EVENTS);
    const events = data?.events || [];
    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    {
        return (
            <div>
                <h3 style={{ marginTop: 50, textAlign: "center"}}>Come Join The Fun</h3>
                {events &&
                    events.map((event) => (
                        <div key={event._id}>
                            <Card className="card" style={{ textAlign: "center", background: "red", marginTop: 70, margin: "auto", border: "white" }}>
                                <Card.Body>
                                    <Card.Title>{event.eventName}</Card.Title>
                                    <h4>{new Date(event.eventDate/1000).getTime()}</h4>
                                    <h4>Start Time: {event.eventStart}</h4>
                                    <h4>End Time: {event.eventEnd}</h4>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
            </div>
        );
    }
};



{/* <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{event.eventName}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>

<ul>
                                <h4>{event.eventName}</h4>
                            </ul> */}

