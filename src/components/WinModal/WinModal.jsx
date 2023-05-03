import { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import BarChart from "../GuessDistribution/GuessDistribution"
import GuessDistribution from '../GuessDistribution/GuessDistribution';

export default function WinModal(props) {
    // console.log(props.urbanDef)
    // props.getUserScores()
    let winPercent
    let totalGames
    let longStreak
    let bestScore
    let currentStreak

    if (props.userScore.totalWinPercent) {
        winPercent = props.userScore.totalWinPercent
    }
    if (props.userScore.totalScore) {
        totalGames = props.userScore.totalGames
    }
    // if(props.userScore.playerLongStreak){
    longStreak = props.userScore.playerLongStreak
    // }
    if (props.userScore.playerHighScore) {
        bestScore = props.userScore.playerHighScore[0].score
    }
    if (props.userScore.playerCurrentStreak) {
        currentStreak = props.userScore.playerCurrentStreak
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
    let totalScore
    if(props.userScore.totalScore){
        totalScore = props.userScore.totalScore[0].total_score}

    // useEffect(() => {
    //     // console.log("USerScrore UseEffect Engaged ", props.user.id)
    //     props.getUserScores(props.user.id)

    // }, props.userScore)
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.user.name} is a Winner!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <div className="m-2 p-4">
                    <strong>{props.answer}</strong> is the correct answer!

                </div>



                <Accordion defaultActiveKey="">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><strong>Standard Definition</strong></Accordion.Header>
                        <Accordion.Body>
                            {props.answer}:  {normalDef}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><strong>Urban Dictionary Definition</strong></Accordion.Header>
                        <Accordion.Body>
                            {props.answer}:  {def}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><strong>Player Stats</strong></Accordion.Header>
                        <Accordion.Body>

                            <Table>
                                <thead>
                                    <tr>
                                        <th>Total Games</th>
                                        <th>Win %</th>
                                        <th>Current Streak</th>
                                        <th>Longest Streak</th>
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
                            <GuessDistribution
                                testStuff={props.userScore.guessDist}
                                totalScore={totalScore}
                            ></GuessDistribution>
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
