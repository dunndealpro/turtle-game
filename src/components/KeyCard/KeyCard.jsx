
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

export default function KeyCard(props) {

    const handleKeyPress = (e) => {
        // e.preventDefault();
        if(props.entryCount <6){
        let key = e.target.innerText
        props.setEntryCount(props.entryCount+1)
        console.log(e.target.innerText)
        console.log(props.currentGuess)
        let idx = props.currentGuess.indexOf('')
        console.log(props.guess1)
        console.log(idx)
        if (idx<5 && idx > -1){
            let temp = props.currentGuess
           temp.splice(idx, 1, key)
           console.log(temp)
           props.setCurrentGuess(temp)
           console.log(props.currentGuess)
          props.setGuess1(props.currentGuess)
        }
        console.log(props.guess1)
}else{
    console.log("no more entries")
}
        // props.compareEntry()
    }

    return (
        <>       
            <Button className="" onClick ={handleKeyPress}style={{ 'margin': '1px', 'padding': '10px', 'height':'60px'}}>
                {/* <Card className='m-2 align-center' style={{ width: '4em', height: '4em' }}>{props.letter}</Card> */}
                {/* <div className='' >{props.letter}</div> */}
                {props.letter}
            </Button>
        
            
        </>
    )
}