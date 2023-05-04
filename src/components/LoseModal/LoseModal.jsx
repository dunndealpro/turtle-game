import { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';



export default function LoseModal(props) {
    // console.log(props.urbanDef)
    let winPercent
    let totalGames
    let longStreak
    let bestScore
    let currentStreak

    if (props.userScore.totalLossPercent){
        winPercent = props.userScore.totalLossPercent
    }
    if (props.userScore.totalScore) {
        totalGames = props.userScore.totalGames
    }
    // if(props.userScore.playerLongStreak){
    longStreak = props.userScore.playerLossLongStreak
    // }
    // if (props.userScore.playerHighScore) {
    //     bestScore = props.userScore.playerHighScore[0].score
    // }
    if (props.userScore.playerCurrentLoseStreak) {
        currentStreak = props.userScore.playerCurrentLoseStreak
    } else { currentStreak = 0 }

    let def
    let normalDef
    if (props.urbanDef) {
        // let max = props.urbanDef.list.length
        // let rndInt = Math.floor(Math.random() * max) + 1
        // def = props.urbanDef.list[rndInt].definition
        def = props.urbanDef
    }

    if (props.normalDef) {
        normalDef = props.normalDef
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                {props.user.name} is a Loser!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">

                Really, <strong>{props.guess6}</strong>?  Well, since you are the loser of the game, here is a definition of the correct word.  Have fun figuring out what it is:
           
                <Accordion defaultActiveKey="">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><strong>Standard Definition</strong></Accordion.Header>
                        <Accordion.Body>
                            ?????:  {normalDef}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><strong>Urban Dictionary Definition</strong></Accordion.Header>
                        <Accordion.Body>
                            ?????:  {def}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><strong>Player Stats</strong></Accordion.Header>
                        <Accordion.Body>
                            
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Total Games</th>
                                        <th>Loss %</th>
                                        <th>Current Loss Streak</th>
                                        <th>Longest Loss Streak</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{totalGames}</td>
                                        <td>{winPercent}</td>
                                        <td>{currentStreak}</td>
                                        <td>{longStreak}</td>


                                    </tr>
                                </tbody>
                            </Table>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    style={{ backgroundColor: 'rgb(43, 112, 168)', borderColor: 'rgb(43, 112, 168)' }}
                    onClick={props.hideNew}>New Game</Button>
                    <Link to="/">
                    <Button
                    style={{ backgroundColor: 'rgb(43, 112, 168)', borderColor: 'rgb(43, 112, 168)' }}
                    onClick={props.hideQuit}>No More!</Button>
                        
                    </Link>
            </Modal.Footer>
        </Modal>

    )
}
