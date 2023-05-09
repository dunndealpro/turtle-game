import { useEffect } from 'react'

import './UserScoreDisplay.css';

export default function UserScoreDisplay(props) {

    useEffect(() => {
        props.getUserScores(props.user.id)
    }, [])

    return (
        <>
            <div className='fs-3 p-1 streak-bg'>
                Current win streak: {props.userScore.playerCurrentStreak} games!
            </div>
            {props.answer}
        </>
    )
}