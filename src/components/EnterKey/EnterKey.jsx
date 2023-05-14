import Button from 'react-bootstrap/Button';
import { useHotkeys } from 'react-hotkeys-hook';

export default function EnterKey(props) {

    useHotkeys('enter', () => handleKeyPress())

    const handleKeyPress = () => {
        if (props.entryCount === 6) {
            props.checkIfWord()

        } else {
            props.setInvalidEntry(true)
            props.setShake(true)
            console.log("invalid entry")
        }

    }

    return (
        <>
            <Button
                onClick={handleKeyPress}
                className="text-dark enter-btn"
                // style={{ 'margin': '1px', 'padding': '3px', 'height': '60px' }}
                >
                <div className='' >Enter</div>
            </Button>

        </>
    )
}