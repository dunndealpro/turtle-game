import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

export default function StartGameModal(props) {

    let currentStreak
    if (props.userscore.playerCurrentStreak) {
        currentStreak = props.userscore.playerCurrentStreak
    } else { currentStreak = 0 }

    return (
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
                {(currentStreak > 0 && currentStreak <= 5) &&
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

            <Modal.Footer>
                <Button
                    className='game-button'
                    onClick={props.hideNew}>New Game</Button>
                <Link to="/">
                    <Button
                        className='game-btn-neg'
                        onClick={props.hideQuit}>I am not ready to play</Button>
                </Link>
            </Modal.Footer>
        </Modal>
    )
}