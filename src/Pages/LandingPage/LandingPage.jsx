import GameBoardContainer from "../../components/GameBoardContainer/GameBoardContainer";
import KeyBoardContainer from "../../components/KeyBoardContainer/KeyBoardContainer";
import LetterCard from "../../components/LetterCard/LetterCard";
import { useState, useEffect } from "react";

import { Container } from "react-bootstrap";

export default function LandingPage(props) {

  // const guessInit = ['', '', '', '', '']

  // const [currentGuess, setCurrentGuess] = useState(['', '', '', '', ''])
  // const [currentGuessCount, setCurrentGuessCount] = useState()



  // const [guess1, setGuess1] = useState(['', '', '', '', ''])
  // const [guess2, setGuess2] = useState(['', '', '', '', ''])
  // const [guess3, setGuess3] = useState(['', '', '', '', ''])
  // const [guess4, setGuess4] = useState(['', '', '', '', ''])
  // const [guess5, setGuess5] = useState(['', '', '', '', ''])
  // const [guess6, setGuess6] = useState(['', '', '', '', ''])

  // function compareEntry() {
  //   console.log(props.currentGuess, props.guess1)
  //   if (props.compare) {
  //     console.log("True")
  //   } else {
  //     console.log("False")
  //   }

  // }

 

  console.log("landing page! ", { props })

  return (
    <>

      <GameBoardContainer
        guess1={props.guess1}
        guess2={props.guess2}
        guess3={props.guess3}
        guess4={props.guess4}
        guess5={props.guess5}
        guess6={props.guess6}
        setGuess1={props.setGuess1}
        setGuess2={props.setGuess2}
        setGuess3={props.setGuess3}
        setGuess4={props.setGuess4}
        setGuess5={props.setGuess5}
        setGuess6={props.setGuess6}
        compareEntry={props.compareEntry}
        guessInit={props.guessInit}
        entryCount={props.entryCount}
        setEntryCount={props.setEntryCount}
        background = {props.background}
        guess1bg={props.guess1bg}


      />


      <KeyBoardContainer
        currentGuess={props.currentGuess}
        setCurrentGuess={props.setCurrentGuess}
        // guessInit={guessInit}
        guess1={props.guess1}
        guess2={props.guess2}
        guess3={props.guess3}
        guess4={props.guess4}
        guess5={props.guess5}
        guess6={props.guess6}
        setGuess1={props.setGuess1}
        setGuess2={props.setGuess2}
        setGuess3={props.setGuess3}
        setGuess4={props.setGuess4}
        setGuess5={props.setGuess5}
        setGuess6={props.setGuess6}
        // guess1={guess1}
        // guess2={guess2}
        // guess3={guess3}
        // guess4={guess4}
        // guess5={guess5}
        // guess6={guess6}

        // setGuess1={setGuess1}
        // setGuess2={setGuess2}
        // setGuess3={setGuess3}
        // setGuess4={setGuess4}
        // setGuess5={setGuess5}
        // setGuess6={setGuess6}
        compareEntry={props.compareEntry}
        guessInit={props.guessInit}
        entryCount={props.entryCount}
        setEntryCount={props.setEntryCount}
      />


    </>
  )
}