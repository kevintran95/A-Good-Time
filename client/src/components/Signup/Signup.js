import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
// import Auth from '../../utils/auth';

import { useMutation } from '@apollo/react-hooks';
import { SIGNUP } from '../../utils/mutations';

export default function Signup() {
    const [formState, setFormState] = useState({ username: '', userType: '', email: '', password: '' });
    const [signup, { error, data }] = useMutation(SIGNUP);

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
        const { data } = await signup({
          variables: { ...formState },
        });

        // Auth.signup(data.login.token);
      } catch (e) {
        console.error(e);
      }

      // clear form values
      setFormState({
        userName: '',
        userType: '',
        email: '',
        password: '',
      });
    };

    return (
        <div>
            <Form className="col-sm-3" style={{ margin: 0, textAlign: "center" }}>

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
                    <Form.Control
                        placeholder="Your Username"
                        name="username"
                        type="username"
                        value={formState.username}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        placeholder="Your email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
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