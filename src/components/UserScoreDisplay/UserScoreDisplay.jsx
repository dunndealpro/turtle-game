import { useEffect } from 'react'
import { Row } from "react-bootstrap";

import './UserScoreDisplay.css';

export default function UserScoreDisplay(props) {

    useEffect(() => {
        props.getUserScores(props.user.id)
    }, [])

    return (
        <>
            <Row  >
                <div className='fs-4 streak-bg'>
                    Current win streak: {props.userScore.playerCurrentStreak} games!
                </div>
            </Row>
            {props.answer}
        </>
    )
}