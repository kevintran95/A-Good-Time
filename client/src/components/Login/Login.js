import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';
import Auth from '../../utils/auth';

import { LOGIN } from '../../utils/mutations'

export default function Login() {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN);

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
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };


    return (
        <div>
            <Form className="col-sm-3" style={{ margin: 0, textAlign: "center" }}>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        placeholder="Your email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        placeholder="Your Password"
                        name="password"
                        type="password"
                        value={formState.password}
                        onChange={handleChange} />
                </Form.Group>
                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                  onClick = { handleFormSubmit }
                >
                  Submit
                </button>
            </Form>
        </div>
    )
}
