
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react'


export default function KeyCard(props) {
  
    const handleKeyPress = (e) => {
        console.log(props.entryCount)


        // e.preventDefault();
        if (props.entryCount < 6) {
            let key = e.target.innerText || e.key
            console.log("TYPEOF ", typeof(key))
            props.setEntryCount(props.entryCount + 1)
            console.log("Current Guess #: ", props.currentGuessCount)
            console.log("keyboard key pressed: ", e.target.innerText)
            console.log("Current guess state: ", props.currentGuess)
            let idx = props.currentGuess.indexOf('')
            // console.log(props.guess1)
            console.log("index of the current guess: ", idx)  
            if (idx < 5 && idx > -1) {
                let temp = props.currentGuess
                temp.splice(idx, 1, key)
                console.log("Temp entry array: ", temp)
                props.setCurrentGuess(temp)
                console.log("Current guess state: ", props.currentGuess)
                if (props.currentGuessCount === 1) {
                    props.setGuess1(props.currentGuess)
                    console.log(props.guess1)
                }
                if (props.currentGuessCount === 2) {
                    props.setGuess2(props.currentGuess)
                    console.log(props.guess2)
                }
                if (props.currentGuessCount === 3) {
                    props.setGuess3(props.currentGuess)
                    console.log(props.guess3)
                }
                if (props.currentGuessCount === 4) {
                    props.setGuess4(props.currentGuess)
                    console.log(props.guess4)
                }
                if (props.currentGuessCount === 5) {
                    props.setGuess5(props.currentGuess)
                    console.log(props.guess5)
                }
                if (props.currentGuessCount === 6) {
                    props.setGuess6(props.currentGuess)
                    console.log(props.guess6)
                }
            }
            
        } else {
            console.log("no more entries")
        }
    }

    return (
        <>
            <Button className="" onClick={handleKeyPress}  style={{ 'margin': '1px', 'padding': '10px', 'height': '60px' }}>
                <div className='' accessKey={props.letter}>{props.letter}</div>
            </Button>


        </>
    )
}