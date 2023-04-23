
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook';

export default function KeyCard(props) {

    useHotkeys(props.letter, () => handleKeyBoardPress(props.letter))

    const handleKeyBoardPress = (event) => {
        if (props.entryCount < 6) {
            let key =event 
            props.setEntryCount(props.entryCount + 1)
            let idx = props.currentGuess.indexOf('')

            if (idx < 5 && idx > -1) {
                let temp = props.currentGuess
                temp.splice(idx, 1, key)
                props.setCurrentGuess(temp)
                if (props.currentGuessCount === 1) {
                    props.setGuess1(props.currentGuess)
                }
                if (props.currentGuessCount === 2) {
                    props.setGuess2(props.currentGuess)
                }
                if (props.currentGuessCount === 3) {
                    props.setGuess3(props.currentGuess)
                }
                if (props.currentGuessCount === 4) {
                    props.setGuess4(props.currentGuess)
                }
                if (props.currentGuessCount === 5) {
                    props.setGuess5(props.currentGuess)
                }
                if (props.currentGuessCount === 6) {
                    props.setGuess6(props.currentGuess)
                }
            }

        } else {
            console.log("no more entries")
        }
    }

    const handleKeyPress = (event) => {
        if (props.entryCount < 6) {
            let key = event.target.innerText || event.key
            props.setEntryCount(props.entryCount + 1)
            let idx = props.currentGuess.indexOf('')

            if (idx < 5 && idx > -1) {
                let temp = props.currentGuess
                temp.splice(idx, 1, key)
                props.setCurrentGuess(temp)
                if (props.currentGuessCount === 1) {
                    props.setGuess1(props.currentGuess)
                }
                if (props.currentGuessCount === 2) {
                    props.setGuess2(props.currentGuess)
                }
                if (props.currentGuessCount === 3) {
                    props.setGuess3(props.currentGuess)
                }
                if (props.currentGuessCount === 4) {
                    props.setGuess4(props.currentGuess)
                }
                if (props.currentGuessCount === 5) {
                    props.setGuess5(props.currentGuess)
                }
                if (props.currentGuessCount === 6) {
                    props.setGuess6(props.currentGuess)
                }
            }

        } else {
            console.log("no more entries")
        }
    }

    // if (){

    // }

    let background = "LightGrey"

    let priorGuess
    let idx


    const isMatch = (element) => element === props.letter
    if (props.currentGuessCount === 1) {
        background = "LightGrey"
    }
    if (props.currentGuessCount === 2) {
        priorGuess = props.guess1
        if (priorGuess.findIndex(isMatch) > -1) {
            console.log(priorGuess.findIndex(isMatch))
            idx = priorGuess.findIndex(isMatch)
            background = props.guess1bg[idx]
            console.log("wierd stuff bro ", props.letter)
        }
    }
    if (props.currentGuessCount === 3) {
        priorGuess = props.guess2

        if (priorGuess.findIndex(isMatch) > -1) {
            console.log(priorGuess.findIndex(isMatch))
            idx = priorGuess.findIndex(isMatch)
            background = props.guess2bg[idx]

            console.log("wierd stuff bro ", props.letter)
        }
    }
    if (props.currentGuessCount === 4) {
        priorGuess = props.guess3

        if (priorGuess.findIndex(isMatch) > -1) {
            console.log(priorGuess.findIndex(isMatch))
            idx = priorGuess.findIndex(isMatch)
            background = props.guess3bg[idx]
            console.log("wierd stuff bro ", props.letter)
        }
    }
    if (props.currentGuessCount === 5) {
        priorGuess = props.guess4

        if (priorGuess.findIndex(isMatch) > -1) {
            console.log(priorGuess.findIndex(isMatch))
            idx = priorGuess.findIndex(isMatch)
            background = props.guess4bg[idx]
            console.log("wierd stuff bro ", props.letter)
        }
    }
    if (props.currentGuessCount === 6) {
        priorGuess = props.guess5

        if (priorGuess.findIndex(isMatch) > -1) {
            console.log(priorGuess.findIndex(isMatch))
            idx = priorGuess.findIndex(isMatch)
            background = props.guess5bg[idx]
            console.log("wierd stuff bro ", props.letter)
        }
    }

    // if (priorGuess.findIndex(props.letter)) {
    //     console.log("wierd stuff bro")
    // }
   

    return (
        <>
            <Button data-key={props.letter} className="" onClick={handleKeyPress} style={{ 'margin': '1px', 'padding': '8px', 'height': '60px', 'width': '2em', 'background-color': `${background}`, 'border': 'LightGrey', 'color': 'black' }}>
                <div className='' data-key={props.letter} accessKey={props.letter}><strong>{props.letter}</strong></div>
                
            </Button>


        </>
    )
}