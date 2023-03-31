import RWGamePage from "../RWGamePage/RWGamePage";
import { useEffect, useState } from 'react'

import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap"
import WarningModal from "../../components/WarningModal/WarningModal";


export default function MenuPage(props) {

    const [randomWordGame, setRandomWordGame] = useState(false)

    function onClick() {
        console.log("onClick")
        setRandomWordGame(!randomWordGame)    }

    function onHide(){
        setRandomWordGame(false)
    }

    return (
        <>
            <h1>Game's Page</h1>

            <span>This will show all available games</span>
            <br />
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

            <WarningModal
            show={randomWordGame}
            onHide={onHide}
            user={props.user}
            />

            {/* <RWGamePage
        {...props}
        /> */}
        </>
    )

}