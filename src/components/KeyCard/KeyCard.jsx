import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook';
import { motion } from "framer-motion";

import './KeyCard.css'


export default function KeyCard(props) {

    useHotkeys(props.letter, () => handleKeyBoardPress(props.letter))

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

    let background 
    let priorGuess
    let idx



    // function getKeyBoardState() {
    //     console.log("keyboard state engaged")
    console.log(props.currentGuessCount)
    if (props.currentGuessCount > 1) {
        // setTimeout(() => {
        console.log("yo dude")
        const isMatch = (element) => element === props.letter

        // background = "LightGrey"

        priorGuess = props.guess1
        if (priorGuess.findIndex(isMatch) > -1) {
            console.log(priorGuess.findIndex(isMatch))
            idx = priorGuess.findIndex(isMatch)
            if (props.guess1bg[idx] !== 'white') {
                // setTimeout(() => {
                background = props.guess1bg[idx]
                console.log("Timeout and react stinks")
                // }, 2000);
                console.log("wierd stuff bro ", props.letter)
            }
        }

        priorGuess = props.guess2

        if (priorGuess.findIndex(isMatch) > -1) {
            console.log(priorGuess.findIndex(isMatch))
            idx = priorGuess.findIndex(isMatch)
            if (props.guess2bg[idx] !== 'white') {
                background = props.guess2bg[idx]
            }
            console.log("wierd stuff bro ", props.letter)
        }

        priorGuess = props.guess3

        if (priorGuess.findIndex(isMatch) > -1) {
            console.log(priorGuess.findIndex(isMatch))
            idx = priorGuess.findIndex(isMatch)
            if (props.guess3bg[idx] !== 'white') {
                background = props.guess3bg[idx]
                console.log("LETTERS, what are they good for?")
            }
            console.log("wierd stuff bro ", props.letter)
        }

        priorGuess = props.guess4

        if (priorGuess.findIndex(isMatch) > -1) {
            console.log(priorGuess.findIndex(isMatch))
            idx = priorGuess.findIndex(isMatch)
            if (props.guess4bg[idx] !== 'white') {
                background = props.guess4bg[idx]
            }
            console.log("wierd stuff bro ", props.letter)
        }

        priorGuess = props.guess5

        if (priorGuess.findIndex(isMatch) > -1) {
            console.log(priorGuess.findIndex(isMatch))
            idx = priorGuess.findIndex(isMatch)
            if (props.guess5bg[idx] !== 'white')
                background = props.guess5bg[idx]
            console.log("wierd stuff bro ", props.letter)
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
                // style={
                //     {
                //         'margin': '1px',
                //         'padding': '8px',
                //         'height': '60px',
                //         'width': '2em',
                //         'border': 'LightGrey',
                //         'color': 'black'
                //     }
                // }
                >
                <div
                    className=''
                    data-key={props.letter}
                    accessKey={props.letter}>
                    <strong>{props.letter}</strong>
                </div>

            </Button>


        </>
    )
}