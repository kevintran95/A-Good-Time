import React from 'react'
import { Form, Button } from 'react-bootstrap';

export default function Login() {
    return (
        <div className="col-sm-4" style={{ textAlign: 'center' }}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        Hello
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Join The Fun
                </Button>
            </Form>
        </div>
    )
}