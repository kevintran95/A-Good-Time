import React from 'react';
import { Form } from 'react-bootstrap';

export default function ScheduleEvent() {
    return (
        <div>
            <h1 style={{background: "red", textAlign: "center"}}>Schedule Event</h1>
            <Form className="col-sm-3" style={{margin: 0, marginTop: 50, textAlign: "center"}}>

                <Form.Group className="mb-3">
                    <Form.Label>Event Type</Form.Label>
                    <Form.Control placeholder=" " />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Name Of Event</Form.Label>
                    <Form.Control placeholder=" " />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Event Date</Form.Label>
                    <Form.Control placeholder=" " />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Control placeholder=" " />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>End Time</Form.Label>
                    <Form.Control placeholder=" " />
                </Form.Group>

            </Form>
        </div>
    )
}
