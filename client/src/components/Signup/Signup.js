import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import Auth from '../../utils/auth';
import '../../styles/Signup.css';
import raveTime from '../../assets/raveTime.mp4'

import { useMutation } from '@apollo/react-hooks';
import { SIGNUP } from '../../utils/mutations';

export default function Signup() {
    const [formState, setFormState] = useState({ userName: '', userType: '', email: '', password: '' });
    const [addUser, { error, data }] = useMutation(SIGNUP);

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
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
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
        <div className="signupBtn">
            <video autoPlay loop muted
                style={{
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1",
                    marginTop: "3%"
                }}>
                <source src={raveTime} type="video/mp4"></source>
            </video>

            <Form className="col-sm-3" id="signUp" style={{ margin: 0, textAlign: "center" }}>

                <Form.Label>User Type</Form.Label>
                {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                            inline
                            label="Owner"
                            name="userType"
                            type={type}
                            value="owner"
                            onChange={handleChange}
                            id={`inline-${type}-1`}
                        />
                        <Form.Check
                            inline
                            label="Promoter"
                            name="userType"
                            type={type}
                            value="promoter"
                            onChange={handleChange}
                            id={`inline-${type}-1`}
                        />
                    </div>
                ))}

                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        placeholder="Your Username"
                        name="userName"
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
                    onClick={handleFormSubmit}
                >
                    Submit
                </button>
            </Form>
        </div>
    )
}