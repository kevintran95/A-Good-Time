import React from 'react'
import { Form, Button } from 'react-bootstrap';

export default function Signup() {
    return (
        <div>
            <Form className="col-sm-3" style={{margin: 0, textAlign: "center"}}>

            <Form.Label>User Type</Form.Label>
                {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                            inline
                            label="Owner"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                        />
                        <Form.Check
                            inline
                            label="Promoter"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                        />
                    </div>
                ))}

                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="Username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder=" Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}