import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

export default function WarningModal(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.user.name} - one more warning!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                This website uses information from www.urbandictionary.com.  Some(most) of the content from www.urbandictionary.com may be considered inappropriate for younger users and/or “not safe for work.”  By clicking the button below, you are acknowledging that you may read disturbing and/or offensive content and you will not hold the developers and creators of Turtle and DDP responsible.
            </Modal.Body>
            <Modal.Footer>
                <Link to="/random-turtles">
                    <Button
                        className='game-button'
                        onClick={props.onHide}>I understand
                    </Button>
                </Link>
            </Modal.Footer>
        </Modal>
    )
}