import Modal from 'react-bootstrap/Modal';

export default function InvalidEntryModal(props){
    let response
    let delayTime

    if(props.entryCount < 6){
    response = "keep typing silly"
    delayTime=1000
}else if(props.entryCount === 6){
    response = "that is not a valid word."
    delayTime=1500  
}

    setTimeout(() => {
        props.setInvalidEntry(false)
        props.setShake(false)
    }, delayTime);

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