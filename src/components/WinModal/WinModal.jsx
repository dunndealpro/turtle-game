import { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import BarChart from "../GuessDistribution/GuessDistribution"
import GuessDistribution from '../GuessDistribution/GuessDistribution';
import PlayerStats from '../PlayerStats/PlayerStats';
import LeaderBoard from '../LeaderBoard/LeaderBoard';
import LeaderBoardQuick from '../LeaderBoardQuick/LeaderBoardQuick';
import Container from 'react-bootstrap/Container'

export default function WinModal(props) {

    let totalGames

    if (props.userScore.totalScore) {
        totalGames = props.userScore.totalGames
    }

    let def
    let normalDef
    if (props.urbanDef) {
        def = props.urbanDef
    }

    if (props.normalDef) {
        normalDef = props.normalDef
    }


    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.user.name} is a Winner!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <div className="m-2 p-2">
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
                            <PlayerStats
                                userScore={props.userScore}                          
                            />
                            <GuessDistribution
                                testStuff={props.userScore.guessDist}
                                totalGames={totalGames}
                            />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item>
                        <Accordion.Header><strong>Leader Board</strong></Accordion.Header>
                        <Accordion.Body>
                            <LeaderBoardQuick
                                userScore={props.userScore}
                            />
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
