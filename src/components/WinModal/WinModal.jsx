import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import GuessDistribution from '../GuessDistribution/GuessDistribution';
import PlayerStats from '../PlayerStats/PlayerStats';
import LeaderBoardQuick from '../LeaderBoardQuick/LeaderBoardQuick';

export default function WinModal(props) {

    let totalGames
    let def
    let normalDef

    if (props.userScore.totalScore) {
        totalGames = props.userScore.totalGames
    }

    if (props.urbanDef) {
        def = props.urbanDef
    }

    if (props.normalDef) {
        normalDef = props.normalDef
    }

    if (props.currentGuessCount === 2) {

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
                {props.currentGuessCount === 2 ?
                    <div className="m-2 p-2">
                        Yea, right, lucky guess... <br /><br />
                        <strong>{props.answer}</strong> is the correct answer!
                    </div>
                    :
                    <div className="m-2 p-2">
                        It only took you <strong>{props.currentGuessCount - 1}</strong> guesses but, <br />
                        <strong>{props.answer}</strong> is the correct answer!
                    </div>}

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
                                guessDist={props.userScore.guessDist}
                                totalGames={totalGames}
                                currentGuessCount={props.currentGuessCount}
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
                    className='game-button'
                    onClick={props.hideNew}>New Game</Button>
                <Link to="/">
                    <Button
                        className='game-btn-neg'
                        onClick={props.hideQuit}>No More!</Button>
                </Link>
            </Modal.Footer>
        </Modal>

    )
}
