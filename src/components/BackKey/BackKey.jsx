import Button from 'react-bootstrap/Button';
import { useHotkeys } from 'react-hotkeys-hook';
import {BsBackspace }from 'react-icons/bs'


export default function BackKey(props) {
    useHotkeys('backspace', () => handleKeyPress())

    const handleKeyPress = () => {
        if (props.entryCount > 1) {
            
            props.setEntryCount(props.entryCount - 1)
            let temp = props.currentGuess
            
            temp.splice((props.entryCount - 2), 1, '')
            props.setCurrentGuess(temp)
            
        }
    }

    return (
        <>
            <Button onClick={handleKeyPress} className="back-btn text-dark back-space" 
            // style={{ 'margin': '1px', 'padding': '3px', 'height': '60px' }}
            >
                <div style={{'font-weight': 'bold'}} className='' accessKey={"Backspace"} >
                    
                    <BsBackspace  size={30}/>
                </div>
            </Button>
        </>
    )
}