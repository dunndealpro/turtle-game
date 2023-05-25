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
                <Container >
                    <Row className="m-2 justify-content-center align-items-center">
                        <Col lg={6} bg-dark className="bg-light rounded pb-4 pt-4">
                            <h1 className="p-2">Welcome to Turtle!</h1>
                            <h2 className="p-2"> Please Login or Sign up!</h2>
                            <Button variant="secondary" className="p-2 mx-auto mt-2 mb-2" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'New User'}</Button>
                           {/* <Col > */}
                            {showSignUp ?
                                <SignUpForm className=" " setUser={setUser} />
                                :
                                <LoginForm className=" " setUser={setUser} />
                            }
                           {/* </Col> */}
                        </Col>
                           
                    </Row>
                </Container>
            </div>
        </>
    )
}