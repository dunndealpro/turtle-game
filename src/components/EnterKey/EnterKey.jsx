import Button from 'react-bootstrap/Button';
import { useHotkeys } from 'react-hotkeys-hook';

export default function EnterKey(props) {

    useHotkeys('enter', () => handleKeyPress())

    const handleKeyPress = () => {
        if (props.entryCount === 6) {           
            props.checkIfWord()            
        } else (
            console.log("invalid entry")
        )
    }

    return (
        <>
            <Button  onClick={handleKeyPress} className="bg-light text-dark" style={{ 'margin': '1px', 'padding': '10px', 'height': '60px' }}>
                <div className='' >Enter</div>
            </Button>
            
        </>
    )
}