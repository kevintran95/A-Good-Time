import React from 'react';
import { Form } from 'react-bootstrap';

export default function Login() {
    return (
        <div>
            <Form className="col-sm-3" style={{margin: 0, textAlign: "center"}}>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder=" " />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder=" " />
                </Form.Group>
            </Form>
        </div>
    )
}
