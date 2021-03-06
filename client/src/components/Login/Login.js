import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import Auth from '../../utils/auth';
import '../../styles/Login.css';
import raveTime from '../../assets/raveTime.mp4'

import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from '../../utils/mutations'


export default function Login() {
    const [formState, setFormState] = useState({ userName: '', password: '' });
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
            userName: '',
            password: '',
        });
    };


    return (
        <div className="loginFrm">
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
            <Form className="col-sm-3" style={{ textAlign: "center", marginTop: 110 }}>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        placeholder="Your userName"
                        name="userName"
                        type="userName"
                        value={formState.userName}
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
                    style={{ cursor: 'pointer', background: "black", color: "white", border: "red" }}
                    type="submit"
                    onClick={handleFormSubmit}
                >
                    Submit
                </button>
            </Form>
        </div>
    )
}
