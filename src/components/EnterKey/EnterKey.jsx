import Button from 'react-bootstrap/Button';

export default function EnterKey(props) {

    const handleKeyPress = () => {
        if (props.entryCount === 6) {
            console.log("enter button clicked")
            props.checkIfWord()            
        } else (
            console.log("invalid entry")
        )
    }

    return (
        <>
            <Button  onClick={handleKeyPress} className="bg-light text-dark" style={{ 'margin': '1px', 'padding': '10px', 'height': '60px' }}>
                <div className='' >enter</div>
            </Button>
            
        </>
    )
}