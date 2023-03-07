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
                        guessInit={props.guessInit}
                        key={letter.toString()}
                        letter={letter}
                        compareEntry={props.compareEntry}
                    />
                ))}

            </div>
            <div>
                {midRow.map((letter) => (
                    <KeyCard
                    currentGuess={props.currentGuess}
                        setCurrentGuess={props.setCurrentGuess}
                        guess1={props.guess1}
                        guessInit={props.guessInit}
                        setGuess1={props.setGuess1}
                        key={letter.toString()}
                        letter={letter}
                        compareEntry={props.compareEntry}
                    />
                ))}

            </div>
            <div>
                <EnterKey />
                {botRow.map((letter) => (
                    <KeyCard
                    currentGuess={props.currentGuess}
                        setCurrentGuess={props.setCurrentGuess}
                        guessInit={props.guessInit}
                        guess1={props.guess1}
                        setGuess1={props.setGuess1}
                        key={letter.toString()}
                        letter={letter}
                        compareEntry={props.compareEntry}
                    />
                ))}
                <BackKey />

            </div>





        </>
    )
}