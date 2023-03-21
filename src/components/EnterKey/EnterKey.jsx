import Button from 'react-bootstrap/Button';

export default function EnterKey(props) {

    const handleKeyPress = () => {
        if (props.entryCount === 6) {
            console.log("enter key clicked")
            props.checkIfWord()
            // if(props.isWord){
            // props.compareEntry()}
            // props.setCurrentGuess(["b","u","n","c","h"])
            //     props.setEntryCount(props.entryCount-1)
            //     let temp = props.currentGuess
            //     console.log(temp)
            //     temp.splice((props.entryCount-2), 1, '')e
            //     props.setCurrentGuess(temp)
            //     console.log(props.currentGuess)
            //    props.setGuess1(props.currentGuess)
        } else (
            console.log("invalid entry")
        )
    }

    return (
        <>
            <Button  onClick={handleKeyPress} className="bg-light text-dark" style={{ 'margin': '1px', 'padding': '10px', 'height': '60px' }}>
                {/* <Card className='m-2 align-center' style={{ width: '4em', height: '4em' }}>{props.letter}</Card> */}
                <div className='' >enter</div>
            </Button>
            
        </>
    )
}