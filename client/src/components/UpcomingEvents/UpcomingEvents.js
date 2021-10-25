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
                <h3>Come Join The Fun</h3>
                {events &&
                    events.map((event) => (
                        <div key={event._id}>
                            <Card style={{ width: '18rem', margin: 20, textAlign: "center" }}>
                                <Card.Body>
                                    <Card.Title>{event.eventName}</Card.Title>
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

