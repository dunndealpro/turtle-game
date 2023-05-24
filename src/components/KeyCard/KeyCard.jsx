
import Button from 'react-bootstrap/Button';
import { useHotkeys } from 'react-hotkeys-hook';

import './KeyCard.css'

export default function KeyCard(props) {

    //allows user to type guess instead of using mouse to click screen
    useHotkeys(props.letter, () => handleKeyBoardPress(props.letter))

    // sets the state for the current guess as it is typed
    const handleKeyBoardPress = (event) => {
        if (props.entryCount < 6) {
            let key = event
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
        }
    }

     // sets the state for the current guess as it is clicked
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
        }
    }

    //determines the letter/key has been guessed and determines if it is in the word or correct spot
    let background
    let priorGuess
    let idx  

    if (props.currentGuessCount > 1) {
        const isMatch = (element) => element === props.letter
        priorGuess = props.guess1
        if (priorGuess.findIndex(isMatch) > -1) {
            idx = priorGuess.findIndex(isMatch)
            if (props.guess1bg[idx] !== 'white') {
                background = props.guess1bg[idx]
            }
        }

        priorGuess = props.guess2

        if (priorGuess.findIndex(isMatch) > -1) {
            idx = priorGuess.findIndex(isMatch)
            if (props.guess2bg[idx] !== 'white') {
                background = props.guess2bg[idx]
            }
        }

        priorGuess = props.guess3

        if (priorGuess.findIndex(isMatch) > -1) {

            idx = priorGuess.findIndex(isMatch)
            if (props.guess3bg[idx] !== 'white') {
                background = props.guess3bg[idx]
            }
        }

        priorGuess = props.guess4

        if (priorGuess.findIndex(isMatch) > -1) {

            idx = priorGuess.findIndex(isMatch)
            if (props.guess4bg[idx] !== 'white') {
                background = props.guess4bg[idx]
            }
        }

        priorGuess = props.guess5

        if (priorGuess.findIndex(isMatch) > -1) {

            idx = priorGuess.findIndex(isMatch)
            if (props.guess5bg[idx] !== 'white') {
                background = props.guess5bg[idx]
            }
        }
    }

    let classDisplay = "key"
    if (background === "green") {
        classDisplay = "is-correct key"
    }

    if (background === "rgb(184, 184, 0)") {
        classDisplay = "in-word key"
    }
    if (background === "DimGray") {
        classDisplay = "not-in-word key"
    }

    return (
        <>
            <Button
                wait={1000}
                data-key={props.letter}
                className={classDisplay}
                onClick={handleKeyPress}
            >
                <div
                    className='fs-4'
                    data-key={props.letter}
                    accessKey={props.letter}
                >
                    <strong>{props.letter}</strong>
                </div>
            </Button>
        </>
    )
}