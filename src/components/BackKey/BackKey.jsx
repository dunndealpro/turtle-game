import Button from 'react-bootstrap/Button';
import { useHotkeys } from 'react-hotkeys-hook';


export default function BackKey(props) {
    useHotkeys('backspace', () => handleKeyPress())

    const handleKeyPress = (e) => {
        if (props.entryCount > 1) {
            
            props.setEntryCount(props.entryCount - 1)
            let temp = props.currentGuess
            
            temp.splice((props.entryCount - 2), 1, '')
            props.setCurrentGuess(temp)
            
        }
    }

    return (
        <>
            <Button onClick={handleKeyPress} className="bg-light text-dark" style={{ 'margin': '1px', 'padding': '10px', 'height': '60px' }}>
                <div accessKey={"Backspace"} >
                    
                    Back
                </div>
            </Button>
        </>
    )
}