import KeyCard from "../KeyCard/KeyCard";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import EnterKey from "../EnterKey/EnterKey";
import BackKey from "../BackKey/BackKey";
import { useEffect, useState } from 'react'

export default function KeyBoardContainer(props) {

    const topRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const midRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
    const botRow = ["Z", "X", "C", "V", "B", "N", "M"]

    // let background = "LightGrey"

    const [background, setBackground] = useState("LightGrey")
    let priorGuess
    let idx

    // function getKeyBoardState() {
    //     console.log("keyboard state engaged")
    //     console.log(props.currentGuessCount)
    //     if (props.currentGuessCount > 1) {
    //         // setTimeout(() => {

    //         const isMatch = (element) => element === props.letter

    //         // if (props.currentGuessCount === 1) {
    //             // setBackground("LightGrey")
    //         // }
    //         // if (props.currentGuessCount === 2) {
    //         priorGuess = props.guess1
    //         if (priorGuess.findIndex(isMatch) > -1 && props) {
    //             console.log(priorGuess.findIndex(isMatch))
    //             idx = priorGuess.findIndex(isMatch)
    //             if (props.guess1bg[idx] !== 'white') {
    //                 setBackground(props.guess1bg[idx])
    //                 console.log("wierd stuff bro ", props.letter)
    //             }
    //         }
    //         // }
    //         // if (props.currentGuessCount === 3) {
    //         priorGuess = props.guess2

    //         if (priorGuess.findIndex(isMatch) > -1) {
    //             console.log(priorGuess.findIndex(isMatch))
    //             idx = priorGuess.findIndex(isMatch)
    //             if (props.guess2bg[idx] !== 'white') {
    //                 setBackground(props.guess2bg[idx])
    //             }
    //             console.log("wierd stuff bro ", props.letter)
    //         }
    //         // }
    //         // if (props.currentGuessCount === 4) {
    //         priorGuess = props.guess3

    //         if (priorGuess.findIndex(isMatch) > -1) {
    //             console.log(priorGuess.findIndex(isMatch))
    //             idx = priorGuess.findIndex(isMatch)
    //             if (props.guess3bg[idx] !== 'white') {
    //                 setBackground(props.guess3bg[idx])
    //                 console.log("LETTERS, what are they good for?")
    //             }
    //             console.log("wierd stuff bro ", props.letter)
    //         }
    //         // }
    //         // if (props.currentGuessCount === 5) {
    //         priorGuess = props.guess4

    //         if (priorGuess.findIndex(isMatch) > -1) {
    //             console.log(priorGuess.findIndex(isMatch))
    //             idx = priorGuess.findIndex(isMatch)
    //             if (props.guess4bg[idx] !== 'white') {
    //                 setBackground(props.guess4bg[idx])
    //             }
    //             console.log("wierd stuff bro ", props.letter)
    //         }
    //         // }
    //         // if (props.currentGuessCount === 6) {
    //         priorGuess = props.guess5

    //         if (priorGuess.findIndex(isMatch) > -1) {
    //             console.log(priorGuess.findIndex(isMatch))
    //             idx = priorGuess.findIndex(isMatch)
    //             if (props.guess5bg[idx] !== 'white')
    //             setBackground(props.guess6bg[idx])
    //             console.log("wierd stuff bro ", props.letter)
    //         }
    //     }

    //     // }, 2000);
    // }

    // useEffect(() => {
    //     console.log("UseEffect Engaged")
    //     console.log(background)
    //     // getNewAnswer()
    //     setTimeout(() => {
    //         console.log("Timer Engaged")
    //         getKeyBoardState()

    //     }, 2000);

    // }, [props.currentGuessCount])

    return (
        <>
        {/* <Container fluid> */}


            <div>
                {topRow.map((letter) => (
                    <KeyCard
                        guess1bg={props.guess1bg}
                        guess2bg={props.guess2bg}
                        guess3bg={props.guess3bg}
                        guess4bg={props.guess4bg}
                        guess5bg={props.guess5bg}
                        guess6bg={props.guess6bg}
                        currentGuess={props.currentGuess}
                        setCurrentGuess={props.setCurrentGuess}
                        guess1={props.guess1}
                        setGuess1={props.setGuess1}
                        guess2={props.guess2}
                        setGuess2={props.setGuess2}
                        guess3={props.guess3}
                        setGuess3={props.setGuess3}
                        guess4={props.guess4}
                        setGuess4={props.setGuess4}
                        guess5={props.guess5}
                        setGuess5={props.setGuess5}
                        guess6={props.guess6}
                        setGuess6={props.setGuess6}
                        guessInit={props.guessInit}
                        key={letter.toString()}
                        letter={letter}
                        compareEntry={props.compareEntry}
                        entryCount={props.entryCount}
                        setEntryCount={props.setEntryCount}
                        currentGuessCount={props.currentGuessCount}
                        setCurrentGuessCount={props.setCurrentGuessCount}
                        background={background}
                    // guessInit={props.guessInit}
                    />
                ))}

            </div>
            <div>
                {midRow.map((letter) => (
                    <KeyCard
                        guess1bg={props.guess1bg}
                        guess2bg={props.guess2bg}
                        guess3bg={props.guess3bg}
                        guess4bg={props.guess4bg}
                        guess5bg={props.guess5bg}
                        guess6bg={props.guess6bg}
                        currentGuess={props.currentGuess}
                        setCurrentGuess={props.setCurrentGuess}
                        guessInit={props.guessInit}
                        guess1={props.guess1}
                        setGuess1={props.setGuess1}
                        guess2={props.guess2}
                        setGuess2={props.setGuess2}
                        guess3={props.guess3}
                        setGuess3={props.setGuess3}
                        guess4={props.guess4}
                        setGuess4={props.setGuess4}
                        guess5={props.guess5}
                        setGuess5={props.setGuess5}
                        guess6={props.guess6}
                        setGuess6={props.setGuess6}
                        key={letter.toString()}
                        letter={letter}
                        compareEntry={props.compareEntry}
                        entryCount={props.entryCount}
                        setEntryCount={props.setEntryCount}
                        currentGuessCount={props.currentGuessCount}
                        setCurrentGuessCount={props.setCurrentGuessCount}
                        background={background}
                    // guessInit={props.guessInit}
                    />
                ))}

            </div>
            <div>
                <EnterKey
                    entryCount={props.entryCount}
                    currentGuess={props.currentGuess}
                    setGuess1={props.setGuess1}
                    guess2={props.guess2}
                    setGuess2={props.setGuess2}
                    guess3={props.guess3}
                    setGuess3={props.setGuess3}
                    guess4={props.guess4}
                    setGuess4={props.setGuess4}
                    guess5={props.guess5}
                    setGuess5={props.setGuess5}
                    guess6={props.guess6}
                    setGuess6={props.setGuess6}
                    compareEntry={props.compareEntry}
                    setCurrentGuess={props.setCurrentGuess}
                    setEntryCount={props.setEntryCount}
                    currentGuessCount={props.currentGuessCount}
                    setCurrentGuessCount={props.setCurrentGuessCount}
                    checkIfWord={props.checkIfWord}
                    isWord={props.isWord}
                    setIsWord={props.setIsWord}
                />
                {botRow.map((letter) => (
                    <KeyCard
                        guess1bg={props.guess1bg}
                        guess2bg={props.guess2bg}
                        guess3bg={props.guess3bg}
                        guess4bg={props.guess4bg}
                        guess5bg={props.guess5bg}
                        guess6bg={props.guess6bg}
                        currentGuess={props.currentGuess}
                        setCurrentGuess={props.setCurrentGuess}
                        guessInit={props.guessInit}
                        guess1={props.guess1}
                        setGuess1={props.setGuess1}
                        guess2={props.guess2}
                        setGuess2={props.setGuess2}
                        guess3={props.guess3}
                        setGuess3={props.setGuess3}
                        guess4={props.guess4}
                        setGuess4={props.setGuess4}
                        guess5={props.guess5}
                        setGuess5={props.setGuess5}
                        guess6={props.guess6}
                        setGuess6={props.setGuess6}
                        key={letter.toString()}
                        letter={letter}
                        compareEntry={props.compareEntry}
                        entryCount={props.entryCount}
                        setEntryCount={props.setEntryCount}
                        currentGuessCount={props.currentGuessCount}
                        setCurrentGuessCount={props.setCurrentGuessCount}
                        background={background}
                    // guessInit={props.guessInit}
                    />
                ))}
                <BackKey
                    entryCount={props.entryCount}
                    currentGuess={props.currentGuess}
                    setGuess1={props.setGuess1}
                    guess2={props.guess2}
                    setGuess2={props.setGuess2}
                    guess3={props.guess3}
                    setGuess3={props.setGuess3}
                    guess4={props.guess4}
                    setGuess4={props.setGuess4}
                    guess5={props.guess5}
                    setGuess5={props.setGuess5}
                    guess6={props.guess6}
                    setGuess6={props.setGuess6}
                    compareEntry={props.compareEntry}
                    setCurrentGuess={props.setCurrentGuess}
                    setEntryCount={props.setEntryCount}
                    currentGuessCount={props.currentGuessCount}
                    setCurrentGuessCount={props.setCurrentGuessCount}
                />

            </div>
        {/* </Container> */}





        </>
    )
}