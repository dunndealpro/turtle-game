import LetterCard from "../LetterCard/LetterCard";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { useState } from "react";
import './GameBoardContainer.css'

export default function GameBoardContainer(props) {

    let shake1
    let shake2
    let shake3
    let shake4
    let shake5
    let shake6
  
    if (props.shake) {
        if(props.currentGuessCount===1){
            shake1="shake"
        }
        if(props.currentGuessCount===2){
            shake2="shake"
        }
        if(props.currentGuessCount===3){
            shake3="shake"
        }
        if(props.currentGuessCount===4){
            shake4="shake"
        }
        if(props.currentGuessCount===5){
            shake5="shake"
        }
        if(props.currentGuessCount===6){
            shake6="shake"
        }       
    }
    else { 
        if(props.currentGuessCount===1){
        shake1=""
    }
    if(props.currentGuessCount===2){
        shake2=""
    }
    if(props.currentGuessCount===3){
        shake3=""
    }
    if(props.currentGuessCount===4){
        shake4=""
    }
    if(props.currentGuessCount===5){
        shake5=""
    }
    if(props.currentGuessCount===6){
        shake6=""
    } }

    return (
        <>
            <div >
                <Container >
                    <div className={shake1}>
                        <Row className='justify-content-center'>
                            {props.guess1.map((letter, index) => (
                                <LetterCard
                                    key={letter.toString() + '_' + index}
                                    letter={letter}
                                    background={props.guess1bg[index]}
                                    index={index}
                                />
                            ))}
                        </Row>
                    </div>
                    <div className={shake2}>
                    <Row className='justify-content-center'>
                        {props.guess2.map((letter, index) => (
                            <LetterCard
                                key={letter.toString() + '_' + index}
                                letter={letter}
                                background={props.guess2bg[index]}
                                index={index}
                            />
                        ))}
                    </Row>
                    </div>
                    <div className={shake3}>
                    <Row className='justify-content-center'>
                        {props.guess3.map((letter, index) => (
                            <LetterCard
                                key={letter.toString() + '_' + index}
                                letter={letter}
                                background={props.guess3bg[index]}
                                index={index}
                            />
                        ))}
                    </Row>
                    </div>
                    <div className={shake4}>
                    <Row className='justify-content-center'>
                        {props.guess4.map((letter, index) => (
                            <LetterCard
                                key={letter.toString() + '_' + index}
                                letter={letter}
                                background={props.guess4bg[index]}
                                index={index}
                            />
                        ))}
                    </Row>
                    </div>
                    <div className={shake5}>
                    <Row className='justify-content-center'>
                        {props.guess5.map((letter, index) => (
                            <LetterCard
                                key={letter.toString() + '_' + index}
                                letter={letter}
                                background={props.guess5bg[index]}
                                index={index}
                            />
                        ))}
                    </Row>
                    </div>
                    <div className={shake6}> 
                    <Row className='justify-content-center'>
                        {props.guess6.map((letter, index) => (
                            <LetterCard
                                key={letter.toString() + '_' + index}
                                letter={letter}
                                background={props.guess6bg[index]}
                                index={index}
                            />
                        ))}
                    </Row>

                    </div>

                </Container>

            </div>
        </>
    )
}