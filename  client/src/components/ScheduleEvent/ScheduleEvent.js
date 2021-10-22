import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Auth from '../../utils/auth';

export default function ScheduleEvent() {
    const [formState, setFormState] = useState({ eventName: '', eventDate: '', eventStart: '', eventEnd: '', eventType: '', eventDescription: '' });
    // const [addEvent, { error, data }] = useMutation();
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // // submit form
    // const handleFormSubmit = async (event) => {
    //   event.preventDefault();
    //   console.log(formState);
    //   try {
    //     const { data } = await addEvent({
    //       variables: { ...formState },
    //     });
  
    //     Auth.login(data.login.token);
    //   } catch (e) {
    //     console.error(e);
    //   }
  
    //   // clear form values
    //   setFormState({
    //     eventName: '',
    //     eventDate: '',
    //     eventStart: '',
    //     eventEnd: '',
    //     eventType: '',
    //     eventDescription: '',
    //   });
    // };

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

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control placeholder=" " />
                </Form.Group>

            </Form>
        </div>
    )
}
