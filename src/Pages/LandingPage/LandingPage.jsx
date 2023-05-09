//pages/LandingPage/LandingPage.jsx

import { Button, Card, Container, Col, Row, } from 'react-bootstrap';
import { useState } from 'react'

import WarningModal from "../../components/WarningModal/WarningModal";

export default function MenuPage(props) {

    const [randomWordGame, setRandomWordGame] = useState(false)

    function onClick() {      
        setRandomWordGame(!randomWordGame)
    }

    function onHide() {
        setRandomWordGame(false)
    }

    return (
        <>
            <div className="fs-3"><strong>Games Page</strong></div>
          
            <Container >
                <Row className="justify-content-md-center">
                    <Col xs='12' md="6">
                        <Card className="m-2">
                            <Card.Body>
                                <Card.Title>
                                    Random Turtle
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Unlimited Turtles!</Card.Subtitle>
                                <Button
                                    onClick={onClick}
                                    style={{ backgroundColor: 'rgb(0, 200, 0)', borderColor: 'rgb(0,0, 0)' }}
                                > Click to Play!</Button>
                            </Card.Body>
                        </Card>

                        <Card className="m-2">
                            <Card.Body>
                                <Card.Title>
                                    Daily Turtle
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">1 word, 1 day to play</Card.Subtitle>
                                <Button
                                    disabled
                                    onClick={onClick}
                                    style={{ backgroundColor: 'rgb(0, 20, 0)', borderColor: 'rgb(0,0, 0)' }}
                                > coming soon!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


            <WarningModal
                show={randomWordGame}
                onHide={onHide}
                user={props.user}
            />
        </>
    )

}