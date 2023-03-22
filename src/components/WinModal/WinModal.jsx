import { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function WinModal(props) {
    console.log(props.urbanDef)
    let def
    
    if (props.urbanDef) {
        let max = props.urbanDef.list.length
        let rndInt = Math.floor(Math.random() * max) + 1
        def = props.urbanDef.list[rndInt].definition
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
                    {props.user.name} is a Winner!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">

                {props.answer}:  {def}
            </Modal.Body>
            <Modal.Footer>
                <Button
                    style={{ backgroundColor: 'rgb(43, 112, 168)', borderColor: 'rgb(43, 112, 168)' }}
                    onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>

    )
}
