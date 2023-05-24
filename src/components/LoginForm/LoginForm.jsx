import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import { useState } from 'react';

import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    function handleChange(evt) {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError('');
    }

    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        try {
            const user = await usersService.login(credentials);
            setUser(user);
        } catch {
            console.log('user')
            setError('Log In Failed - Try Again');
            console.log(error)
        }
    }

    return (
        <>
            <Container className="p-2" >
                <Row>
                    <Col >
                        <Form autoComplete="off" onSubmit={handleSubmit}>
                            <Form.Group className='mb-3'>
                                <Form.Control type="email" placeholder="Enter email" name="email" value={credentials.email} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type="password" placeholder="Enter Password" name="password" value={credentials.password} onChange={handleChange} required />
                            </Form.Group>
                            <span className="m-2">
                                This website uses information from www.urbandictionary.com.  Some(most) of the content from www.urbandictionary.com may be considered inappropriate for younger users and/or “not safe for work.”  By logging in to this website, you are acknowledging that you may see or read disturbing content and you will not hold the developers and creators responsible for any feelings you may have.
                            </span><br />
                            <Button className="m-2 game-button" type="submit" >Login</Button>
                            <p className="error-message">&nbsp;{error}</p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}