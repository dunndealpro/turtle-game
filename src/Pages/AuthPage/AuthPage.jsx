import { useState } from 'react';

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from "../../components/SignUpForm/SignUpForm"

export default function AuthPage({ setUser }) {
    const [showSignUp, setShowSignUp] = useState(false);
    return (
        <>
            <div className='d-flex justify-content-center align-items-center vh-100 auth-page'>
                <Container className="bg-light rounded">
                    <Row className="m-2 justify-content-center align-items-center">
                        <Col md={6} bg-dark className="">
                            <h1 className="p-2">Welcome to Turtle!</h1>
                            <h2 className="p-2"> Please Login or Sign up!</h2>
                            <Button variant="secondary" className="p-2 mx-auto mb-2" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'New User'}</Button>
                            {showSignUp ?
                                <SignUpForm className=" " setUser={setUser} />
                                :
                                <LoginForm className=" " setUser={setUser} />
                            }
                            </Col>
                    </Row>
                </Container>

            </div>
        </>
    )
}