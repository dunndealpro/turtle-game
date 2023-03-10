import LetterCard from "../LetterCard/LetterCard";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { useState } from "react";

export default function GameBoardContainer(props) {

    //     const [guess1, setGuess1] = useState(['', '', '', '', ''])
    //   const [guess2, setGuess2] = useState(['', '', '', '', ''])
    //   const [guess3, setGuess3] = useState(['', '', '', '', ''])
    //   const [guess4, setGuess4] = useState(['', '', '', '', ''])
    //   const [guess5, setGuess5] = useState(['', '', '', '', ''])
    //   const [guess6, setGuess6] = useState(['', '', '', '', ''])


    console.log("huh ")

    return (
        <>
            <div >
                <Container >
                    <Row className='justify-content-center'>
                        {props.guess1.map((letter, index) => (
                            <LetterCard
                                key={letter.toString() + '_' + index}
                                letter={letter}
                                background={props.background}
                            />
                        ))}
                    </Row>
                    <Row className='justify-content-center'>
                        {props.guess2.map((letter, index) => (
                            <LetterCard
                            key={letter.toString() + '_' + index}
                            letter={letter}
                            background={props.background}
                        />
                        ))}
                    </Row>
                    <Row className='justify-content-center'>
                        {props.guess3.map((letter, index) => (
                            <LetterCard
                            key={letter.toString() + '_' + index}
                            letter={letter}
                            background={props.background}
                        />
                        ))}
                    </Row>
                    <Row className='justify-content-center'>
                        {props.guess4.map((letter, index) => (
                             <LetterCard
                             key={letter.toString() + '_' + index}
                             letter={letter}
                             background={props.background}
                         />
                        ))}
                    </Row>
                    <Row className='justify-content-center'>
                        {props.guess5.map((letter, index) => (
                            <LetterCard
                            key={letter.toString() + '_' + index}
                            letter={letter}
                            background={props.background}
                        />
                        ))}
                    </Row>
                    <Row className='justify-content-center'>
                        {props.guess6.map((letter, index) => (
                            <LetterCard
                            key={letter.toString() + '_' + index}
                            letter={letter}
                            background={props.background}
                        />
                        ))}
                    </Row>

                </Container>

            </div>
        </>
    )
}