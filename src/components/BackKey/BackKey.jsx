import Button from 'react-bootstrap/Button';
import { useHotkeys } from 'react-hotkeys-hook';


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
            <Button onClick={handleKeyPress} className="back-btn text-dark" 
            // style={{ 'margin': '1px', 'padding': '3px', 'height': '60px' }}
            >
                <div className='fs-5' accessKey={"Backspace"} >
                    
                    Back
                </div>
            </Button>
        </>
    )
}