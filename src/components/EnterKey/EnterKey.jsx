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
        }
    }

    return (
        <>
            <Button
                onClick={handleKeyPress}
                className="text-dark enter-btn"
            >
                <div className='' >Enter</div>
            </Button>
        </>
    )
}