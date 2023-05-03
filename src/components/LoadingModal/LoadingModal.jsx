import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function LoadingModal(props) {

    return (
        <>

            <Modal
                {...props}

                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Container>
                    <div className='p-2 text-center'>
                        <Spinner animation="border" variant="primary" />
                        <span className='p-2 fs-4 ' >Finding that perfect word...</span>
                    </div>
                </Container>

            </Modal>
        </>
    )
}