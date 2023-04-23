import Button from 'react-bootstrap/Button';
import { useHotkeys } from 'react-hotkeys-hook';


export default function BackKey(props) {
    useHotkeys('backspace', () => handleKeyPress())

    const handleKeyPress = (e) => {
        if (props.entryCount > 1) {
            console.log("back key clicked")
            props.setEntryCount(props.entryCount - 1)
            let temp = props.currentGuess
            console.log(temp)
            temp.splice((props.entryCount - 2), 1, '')
            props.setCurrentGuess(temp)
            console.log(props.currentGuess)
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