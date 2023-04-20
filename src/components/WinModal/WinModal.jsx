import { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';


export default function WinModal(props) {
    // console.log(props.urbanDef)
    let def
    let normalDef
    if (props.urbanDef) {
        // let max = props.urbanDef.list.length
        // let rndInt = Math.floor(Math.random() * max) + 1
        // def = props.urbanDef.list[rndInt].definition
        def=props.urbanDef
    }

    if (props.normalDef){
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
                    {props.user.name} is a Winner!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <div className="m-2 p-4">
            <strong>{props.answer}</strong> is the correct answer!

                </div>
            
            <Accordion defaultActiveKey="0">
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
