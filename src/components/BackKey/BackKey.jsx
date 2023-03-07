import Button from 'react-bootstrap/Button';

export default function BackKey(props){

    const handleKeyPress = (e) => {
        if(props.entryCount > 1){
        console.log("back key clicked")
        props.compareEntry()
        // props.setCurrentGuess(["b","u","n","c","h"])
        props.setEntryCount(props.entryCount-1)
        let temp = props.currentGuess
        console.log(temp)
        temp.splice((props.entryCount-2), 1, '')
        props.setCurrentGuess(temp)
        console.log(props.currentGuess)
       props.setGuess1(props.currentGuess)
       }
    }

    return(
        <>
         <Button onClick ={handleKeyPress} className="bg-light text-dark" style={{ 'margin': '1px', 'padding': '10px', 'height':'60px'}}>
                {/* <Card className='m-2 align-center' style={{ width: '4em', height: '4em' }}>{props.letter}</Card> */}
               <div  >
                Back
                </div>
            </Button>
        </>
    )
}