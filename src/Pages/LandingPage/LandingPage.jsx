import GameBoardContainer from "../../components/GameBoardContainer/GameBoardContainer";
import KeyBoardContainer from "../../components/KeyBoardContainer/KeyBoardContainer";
import LetterCard from "../../components/LetterCard/LetterCard";
import { useState, useEffect } from "react";

import { Container } from "react-bootstrap";

export default function LandingPage(props) {
  console.log("landing page! ", { props })

  return (
    <>
      <div style={{'background': "RGB(25,35,25,1)", "height": '100vh'}}>

        <GameBoardContainer
        {...props}

        />

        <KeyBoardContainer
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
          compareEntry={props.compareEntry}
          guessInit={props.guessInit}
          entryCount={props.entryCount}
          setEntryCount={props.setEntryCount}
          currentGuessCount={props.currentGuessCount}
          setCurrentGuessCount={props.setCurrentGuessCount}
          checkIfWord={props.checkIfWord}
          isWord={props.isWord}
          setIsWord={props.setIsWord}
        />
      </div>
    </>
  )
}