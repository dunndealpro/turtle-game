import { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export default function StartGameModal(props){

    console.log(props.userScore, props.user)
    let totalScore
    let longStreak
    let bestScore
    let currentStreak
    // if(props.userScore.totalScore[0].total_score){
    //     totalScore = props.userScore.totalScore[0].total_score
    // }
    // if(props.userScore.playerLongStreak){
        longStreak = props.userScore.playerLongStreak
    // }
    // if(props.userScore.playerHighScore){
    //     bestScore = props.userScore.playerHighScore[0].score
    // }
    if(props.userScore.playerCurrentStreak){
        currentStreak= props.userScore.playerCurrentStreak
    }else{currentStreak = 0}

    console.log("CURRENT STREAK FROM START MODAL: ", currentStreak)
    


    return(
       <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.user.name} - are you ready to play?!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {currentStreak === 0 &&
                <>                
                Looks like you need to work on your game a bit...
                </>
                }
                {(currentStreak > 0 && currentStreak < 5) &&
                <>
                    Thats a cute little streak you got there
                </>
                }
                 {(currentStreak > 5 && currentStreak < 10) &&
                <>
                    your streak...not bad.  
                </>
                }
                 {currentStreak > 10 &&
                <>
                    You know what they say about people with a big streak...
                </>
                }

            </Modal.Body>
            {/* <Modal.Body className="show-grid">

                The Users stats will go here:
                <br />
                Longest Streak: {longStreak}
                <br />
                Total Score: {totalScore}
                
                
                <br />
                Best Score {bestScore}
                <br />
                Current Streak: {currentStreak}
            </Modal.Body> */}
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