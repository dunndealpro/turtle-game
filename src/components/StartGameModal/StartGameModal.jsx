import { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export default function StartGameModal(props){




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
                Longest Streak
                <br />
                Total Score
                <br />
                Best Score
            </Modal.Body>
            <Modal.Footer>
                <Button
                    style={{ backgroundColor: 'rgb(43, 112, 168)', borderColor: 'rgb(43, 112, 168)' }}
                    onClick={props.onHideNew}>New Game</Button>
                    <Link to="/">
                    <Button
                    style={{ backgroundColor: 'rgb(43, 112, 168)', borderColor: 'rgb(43, 112, 168)' }}
                    onClick={props.onHideQuit}>i am not ready to play</Button>
                        
                    </Link>
            </Modal.Footer>
        </Modal>
    )
}