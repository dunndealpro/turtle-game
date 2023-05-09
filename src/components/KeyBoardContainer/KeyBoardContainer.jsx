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

    // const [background, setBackground] = useState("LightGrey")
    let priorGuess
    let idx

   

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
                        // background={background}
                    
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
                        // background={background}
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
                        // background={background}                    
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