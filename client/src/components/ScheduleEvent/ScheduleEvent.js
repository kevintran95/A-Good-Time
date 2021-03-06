import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import '../../styles/ScheduleEvent.css';

import { useMutation } from '@apollo/react-hooks';
import { ADD_EVENT } from '../../utils/mutations';

export default function ScheduleEvent() {
    const [formState, setFormState] = useState({ promoterName: '', eventName: '', eventDate: '', eventStart: '', eventEnd: '', eventType: '', eventDescription: '' });

    const [addEvent, { error, data }] = useMutation(ADD_EVENT);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        const { data } = await addEvent({
          variables: { ...formState },
        });
        console.log(data)

        
      } catch (e) {
        console.error(e);
      }

      // clear form values
      setFormState({
        promoterName: '',
        eventName: '',
        eventDate: '',
        eventStart: '',
        eventEnd: '',
        eventType: '',
        eventDescription: '',
      });
    };

    return (
        <div>
            <div className="eventList">
            <Form className="col-sm-3" id="eventForm" style={{ margin: 0, marginTop: 50, textAlign: "center" }}>

            <h1 style={{ textAlign: "center", marginLeft: 53 }}>Schedule Event</h1>
            <Form.Group className="mb-3">
                    <Form.Label>Promoter Name</Form.Label>
                    <Form.Control
                        placeholder="Name Of Promoter"
                        name="promoterName"
                        type=" "
                        value={formState.promoterName}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Event Type</Form.Label>
                    <Form.Control
                        placeholder="Type Of Event"
                        name="eventType"
                        type=" "
                        value={formState.eventType}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Name Of Event</Form.Label>
                    <Form.Control
                        placeholder="Name Of Event"
                        name="eventName"
                        type=" "
                        value={formState.eventName}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Event Date</Form.Label>
                    <Form.Control
                        placeholder="Event Date"
                        name="eventDate"
                        type=" "
                        value={formState.eventDate}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Control  
                        placeholder="Start Time"
                        name="eventStart"
                        type=" "
                        value={formState.eventStart}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>End Time</Form.Label>
                    <Form.Control  
                        placeholder="End Time"
                        name="eventEnd"
                        type=" "
                        value={formState.eventEnd}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control  
                        placeholder="Description"
                        name="eventDescription"
                        type=" "
                        value={formState.eventDescription}
                        onChange={handleChange} />
                </Form.Group>
                <button
                  className="btn btn-block btn-info submitBtn"
                  style={{ cursor: 'pointer', background: "black", color: "white", border: "red" }}
                  type="submit"
                  onClick = { handleFormSubmit }
                >
                  Submit
                </button>
            </Form>
            </div>
        </div>
    )
}
