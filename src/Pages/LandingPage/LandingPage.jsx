import GameBoardContainer from "../../components/GameBoardContainer/GameBoardContainer";
import KeyBoardContainer from "../../components/KeyBoardContainer/KeyBoardContainer";
import LetterCard from "../../components/LetterCard/LetterCard";
import { useState, useEffect } from "react";

import { Container } from "react-bootstrap";

export default function LandingPage(props) {
  console.log("landing page! ", { props }) 


  // const detectKeyPress = (e)=>{
  //   console.log("Yo dawg, you pressed ",  e.key)
  //   console.log("ENTRY COUNT: ", props.entryCount)
    
  //   if (props.entryCount < 6) {
  //     console.log("ENTRY COUNT: ", props.entryCount)
  //     let key = e.key
  //     console.log("TYPEOF ", typeof(key))
  //     props.setEntryCount(props.entryCount + 1)
  //     console.log("ENTRY COUNT: ", props.entryCount)

  //     console.log("Current Guess #: ", props.currentGuessCount)
  //     console.log("keyboard key pressed: ", e.key)
  //     console.log("Current guess state: ", props.currentGuess)
  //     let idx = props.currentGuess.indexOf('')
  //     // console.log(guess1)
  //     console.log("index of the current guess: ", idx)  
  //     if (idx < 5 && idx > -1) {
  //         let temp = props.currentGuess
  //         console.log(temp)
  //         temp.splice(idx, 1, key)
  //         console.log("Temp entry array: ", temp)
  //         props.setCurrentGuess(temp)
  //         console.log("Current guess state: ", props.currentGuess)
  //         if (props.currentGuessCount === 1) {
  //           props.setGuess1(props.currentGuess)
  //             console.log(props.guess1)
  //         }
  //         if (props.currentGuessCount === 2) {
  //           props.setGuess2(props.currentGuess)
  //             console.log(props.guess2)
  //         }
  //         if (props.currentGuessCount === 3) {
  //           props.setGuess3(props.currentGuess)
  //             console.log(props.guess3)
  //         }
  //         if (props.currentGuessCount === 4) {
  //           props.setGuess4(props.currentGuess)
  //             console.log(props.guess4)
  //         }
  //         if (props.currentGuessCount === 5) {
  //           props.setGuess5(props.currentGuess)
  //             console.log(props.guess5)
  //         }
  //         if (props.currentGuessCount === 6) {
  //           props.setGuess6(props.currentGuess)
  //             console.log(props.guess6)
  //         }
  //     }
      
  // } else {
  //     console.log("no more entries")
  // }

  
  // }

  // console.log("ENTRY COUNT: ", props.entryCount)

  // useEffect(() => {
  //   console.log("UseEffect Engaged")
  //   document.addEventListener('keypress', detectKeyPress)
  //   // getNewAnswer()
  //   // compareEntry()
  // })

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
        background={props.background}
        guess1bg={props.guess1bg}
        guess2bg={props.guess2bg}
        guess3bg={props.guess3bg}
        guess4bg={props.guess4bg}
        guess5bg={props.guess5bg}
        guess6bg={props.guess6bg}
        currentGuessCount={props.currentGuessCount}
        setCurrentGuessCount={props.setCurrentGuessCount}
        checkIfWord = {props.checkIfWord}
        isWord={props.isWord}
        setIsWord={props.setIsWord}
      />


      <KeyBoardContainer
        currentGuess={props.currentGuess}
        setCurrentGuess={props.setCurrentGuess}
        // guessInit={guessInit}
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
        currentGuessCount={props.currentGuessCount}
        setCurrentGuessCount={props.setCurrentGuessCount}
        checkIfWord = {props.checkIfWord}
        isWord={props.isWord}
        setIsWord={props.setIsWord}
      />


    </>
  )
}