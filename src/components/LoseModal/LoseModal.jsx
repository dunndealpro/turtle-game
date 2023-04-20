import { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export default function LoseModal(props) {
    // console.log(props.urbanDef)
    let def
    if (props.urbanDef) {
        // let max = props.urbanDef.list.length
        // let rndInt = Math.floor(Math.random() * max) + 1
        // def = props.urbanDef.list[rndInt].definition
        def=props.urbanDef
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

                Really, <span className="strong">{props.guess6}</span>?  Well, since you are the loser of the game, here is a definition of the correct word.  Have fun figuring out what it is/  DEF:  {def}
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
