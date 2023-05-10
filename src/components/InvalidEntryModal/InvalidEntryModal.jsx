import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function InvalidEntryModal(props){
    console.log(props.invalidEntry)
    console.log(props.entryCount)
    let response

    if(props.entryCount < 6){
    response = "keep typing silly"
}else if(props.entryCount === 6){
    response = "oh, that is not a valid word."
}

    setTimeout(() => {
        props.setInvalidEntry(false)
        props.setShake(false)
    }, 1000);

    return(
        <>
    <Modal
        size="sm"
        show={props.invalidEntry}                
      >
        
        <Modal.Body>
            {response}
        </Modal.Body>
      </Modal>    
        </>
    )
}