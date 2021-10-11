import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import useAuth from '../../hook/useAuth';

const Register = () => {
    const { googleSignIn } = useAuth();
    return (
        <Container>
            <div className="row mt-5">
                <div className="offset-lg-4 col-lg-4">

                    <Form className=" p-3 border">
                        <h1 className="text-center">Sign UP for free!</h1>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </div>
            </div>

            <div className="row mt-2">
                <div className="offset-lg-4 col-lg-4">
                    <div className="border p-3">
                        <Button className="w-100" onClick={googleSignIn}> Login with Google</Button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Register;