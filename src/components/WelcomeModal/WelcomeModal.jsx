import { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function WelcomeModal(props){
    console.log("Welcome Modal!")

    return(
        <>
         <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Welcome {props.user.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">

                {props.answer}:  {def}

                <Button onClick={createNewGame}>Click to Play!</Button>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    style={{ backgroundColor: 'rgb(43, 112, 168)', borderColor: 'rgb(43, 112, 168)' }}
                    onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}