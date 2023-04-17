import { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export default function StartGameModal(props){

    console.log(props.userScore, props.user)
    let totalScore
    let longStreak
    let bestScore
    if(props.userScore.totalScore){
        totalScore = props.userScore.totalScore[0].total_score
    }
    if(props.userScore.playerLongStreak){
        longStreak = props.userScore.playerLongStreak[0].count
    }
    if(props.userScore.playerHighScore){
        bestScore = props.userScore.playerHighScore[0].score
    }

    


    return(
       <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.user.name} Are you ready to Play!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">

                The Users stats will go here:
                <br />
                Longest Streak: {longStreak}
                <br />
                Total Score: {totalScore}
                
                
                <br />
                Best Score {bestScore}
                <br />
                Current Streak: {props.user.streakcount}
            </Modal.Body>
            <Modal.Footer>
                <Button
                    style={{ backgroundColor: 'rgb(43, 112, 168)', borderColor: 'rgb(43, 112, 168)' }}
                    onClick={props.hideNew}>New Game</Button>
                    <Link to="/">
                    <Button
                    style={{ backgroundColor: 'rgb(43, 112, 168)', borderColor: 'rgb(43, 112, 168)' }}
                    onClick={props.hideQuit}>i am not ready to play</Button>
                        
                    </Link>
            </Modal.Footer>
        </Modal>
    )
}