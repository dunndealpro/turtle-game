import KeyCard from "../KeyCard/KeyCard";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import EnterKey from "../EnterKey/EnterKey";
import BackKey from "../BackKey/BackKey";

export default function KeyBoardContainer(props) {

    const topRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
    const midRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"]
    const botRow = ["z", "x", "c", "v", "b", "n", "m"]

    console.log(props.guess1)


    return (
        <>


            <div>
                {topRow.map((letter) => (
                    <KeyCard
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
                    // guessInit={props.guessInit}
                    />
                ))}

            </div>
            <div>
                {midRow.map((letter) => (
                    <KeyCard
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
                    checkIfWord = {props.checkIfWord}
                    isWord={props.isWord}
                    setIsWord={props.setIsWord}
                />
                {botRow.map((letter) => (
                    <KeyCard
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





        </>
    )
}