import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import { useState } from 'react'

import GameBoardContainer from "../../components/GameBoardContainer/GameBoardContainer";
import KeyBoardContainer from "../../components/KeyBoardContainer/KeyBoardContainer";
import InvalidEntryModal from '../../components/InvalidEntryModal/InvalidEntryModal';
import LoadingModal from '../../components/LoadingModal/LoadingModal';
import LoseModal from '../../components/LoseModal/LoseModal';
import StartGameModal from '../../components/StartGameModal/StartGameModal';
import UserScoreDisplay from '../../components/UserScoreDisplay/UserScoreDisplay';
import WinModal from '../../components/WinModal/WinModal';

import * as gamesAPI from "../../utilities/games-api"

export default function RWGamePage(props) {

  let isCorrect = "green"
  let inWord = "rgb(184, 184, 0)"
  let notInWord = "DimGray"
  let blankEntry = "white"

  let isUrbanWord = false
  let gameWon = false

  let tempBG = [notInWord, notInWord, notInWord, notInWord, notInWord]

  const guessInit = ['', '', '', '', '']
  const [entryCount, setEntryCount] = useState(1)//2
  // const [compare, setCompare] = useState(false)//3
  const [answer, setAnswer] = useState(['', '', '', '', ''])//4
  const [answerInfo, setAnswerInfo] = useState({})//4
  const [currentGuess, setCurrentGuess] = useState(['', '', '', '', ''])//5
  const [currentGuessCount, setCurrentGuessCount] = useState(1)//6
  const [isWord, setIsWord] = useState(false)
  const [gameId, setGameId] = useState()
  const [guess1, setGuess1] = useState(['', '', '', '', ''])//7
  const [guess1bg, setGuess1bg] = useState([blankEntry, blankEntry, blankEntry, blankEntry, blankEntry])
  const [guess2, setGuess2] = useState(['', '', '', '', ''])//8
  const [guess2bg, setGuess2bg] = useState([blankEntry, blankEntry, blankEntry, blankEntry, blankEntry])
  const [guess3, setGuess3] = useState(['', '', '', '', ''])//9
  const [guess3bg, setGuess3bg] = useState([blankEntry, blankEntry, blankEntry, blankEntry, blankEntry])
  const [guess4, setGuess4] = useState(['', '', '', '', ''])//10
  const [guess4bg, setGuess4bg] = useState([blankEntry, blankEntry, blankEntry, blankEntry, blankEntry])
  const [guess5, setGuess5] = useState(['', '', '', '', ''])//11
  const [guess5bg, setGuess5bg] = useState([blankEntry, blankEntry, blankEntry, blankEntry, blankEntry])
  const [guess6, setGuess6] = useState(['', '', '', '', ''])//12
  const [guess6bg, setGuess6bg] = useState([blankEntry, blankEntry, blankEntry, blankEntry, blankEntry])
  const [urbanDef, setUrbanDef] = useState()
  const [normalDef, setNormalDef] = useState()
  const [streakCount, setStreakCount] = useState(props.user.streakcount)

  const [winModalShow, setWinModalShow] = useState(false);
  const [loseModalShow, setLoseModalShow] = useState(false);
  const [gameStartModalShow, setGameStartModalShow] = useState(true);
  const [loadingModalShow, setLoadingModalShow] = useState(null)
  const [invalidEntry, setInvalidEntry] = useState(false)

  const [shake, setShake] = useState(false)

  const checkLastGame = async () => {
    let results = await gamesAPI.checkLastGame(props.user.id)
    if (results.lastgame[0].gameWon === true) {
      setStreakCount(results.streakcount[0].streakcount)
    } else {
      setStreakCount(0)
    }
  }

  function hideNew() {
    updateStreakCount()
    checkLastGame(props.user.id)
    setWinModalShow(false)
    setLoseModalShow(false)
    setGameStartModalShow(false)
    // setCompare(false)
    setGuess1(['', '', '', '', ''])
    setGuess1bg([blankEntry, blankEntry, blankEntry, blankEntry, blankEntry])
    setGuess2(['', '', '', '', ''])
    setGuess2bg([blankEntry, blankEntry, blankEntry, blankEntry, blankEntry])
    setGuess3(['', '', '', '', ''])
    setGuess3bg([blankEntry, blankEntry, blankEntry, blankEntry, blankEntry])
    setGuess4(['', '', '', '', ''])
    setGuess4bg([blankEntry, blankEntry, blankEntry, blankEntry, blankEntry])
    setGuess5(['', '', '', '', ''])
    setGuess5bg([blankEntry, blankEntry, blankEntry, blankEntry, blankEntry])
    setGuess6(['', '', '', '', ''])
    setGuess6bg([blankEntry, blankEntry, blankEntry, blankEntry, blankEntry])
    setCurrentGuess(['', '', '', '', ''])
    setUrbanDef()
    setCurrentGuessCount(1)
    setEntryCount(1)
    setIsWord(false)
    getNewAnswer()
  }

  function hideQuit() {
    updateStreakCount(streakCount)
    setGameStartModalShow(false)
    setWinModalShow(false)
    setLoseModalShow(false)
    // setCompare(false)
    setGuess1(['', '', '', '', ''])
    setGuess1bg([blankEntry, blankEntry, blankEntry, blankEntry, blankEntry])
    setGuess2(['', '', '', '', ''])
    setGuess2bg([blankEntry, blankEntry, blankEntry, blankEntry, blankEntry])
    setGuess3(['', '', '', '', ''])
    setGuess3bg([blankEntry, blankEntry, blankEntry, blankEntry, blankEntry])
    setGuess4(['', '', '', '', ''])
    setGuess4bg([blankEntry, blankEntry, blankEntry, blankEntry, blankEntry])
    setGuess5(['', '', '', '', ''])
    setGuess5bg([blankEntry, blankEntry, blankEntry, blankEntry, blankEntry])
    setGuess6(['', '', '', '', ''])
    setGuess6bg([blankEntry, blankEntry, blankEntry, blankEntry, blankEntry])
    setCurrentGuess(['', '', '', '', ''])
    setUrbanDef()
    setCurrentGuessCount(1)
    setEntryCount(1)
    setIsWord(false)
  }

  function shakeInvalidEntry() {

  }

  const getNewAnswer = async () => {
    setLoadingModalShow(true)
    const randomWord = await fetch(`https://api.urbandictionary.com/v0/random`).then(res => res.json());
    let words = randomWord.list
    let newAnswer
    for (let i = 0; i < words.length; i++) {
      if (words[i].word.length === 5) {
        newAnswer = words[i].word.toLowerCase()
        await checkIfUrbanWord(newAnswer)
        break
      }
    }
    if (!isUrbanWord) {
      getNewAnswer()
    }
  }

  const checkIfUrbanWord = async (newAnswer) => {
    let searchUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${newAnswer}`
    let response
    try {
      response = await fetch(searchUrl).then(res => res.json());
      if (response[0].word) {
        isUrbanWord = true
        let tempAnswer = await gamesAPI.addWordToTurtleDB(response[0].word)
        setAnswerInfo(tempAnswer)
        setAnswer(tempAnswer.word.toUpperCase().split(""))
        setNormalDef(response[0].meanings[0].definitions[0].definition)
        getUrbanDef(tempAnswer.word)
        startNewRandomGame()
      }

    } catch (error) {
      console.log("Error: ", error)
    }
  }

  const getUrbanDef = async (word) => {
    let urbanSearchUrl = `https://api.urbandictionary.com/v0/define?term=${word}`
    try {
      const response = await fetch(urbanSearchUrl).then(res => res.json());
      let rndInt = Math.floor(Math.random() * response.list.length) + 1
      setUrbanDef(response.list[rndInt].definition)
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  const checkIfWord = async () => {
    let searchUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${currentGuess.join('')}`
    try {
      const response = await fetch(searchUrl).then(res => res.json());
      if (response[0].word) {
        compareEntry()
      }
    } catch (error) {
      setInvalidEntry(true)
      console.log("Error: ", error)
    }
  }

  const saveRandomScore = async () => {
    let pointsWon = 7 - currentGuessCount
    let score = {
      gameId: gameId,
      wordId: answerInfo.id,
      userId: props.user.id,
      name: props.user.name,
      guess1: guess1.join(''),
      guess2: guess2.join(''),
      guess3: guess3.join(''),
      guess4: guess4.join(''),
      guess5: guess5.join(''),
      guess6: guess6.join(''),
      score: pointsWon,
      gameWon: gameWon,
      streakcount: streakCount
    }
    const newScore = await gamesAPI.saveRandomWordGame(score)
  }

  const startNewRandomGame = async () => {
    let pointsWon = 0
    let score = {
      wordId: answerInfo.id,
      userId: props.user.id,
      name: props.user.name,
      guess1: '',
      guess2: '',
      guess3: '',
      guess4: '',
      guess5: '',
      guess6: '',
      score: pointsWon,
      streakcount: streakCount,
      gameWon: null
    }
    const newGame = await gamesAPI.startRandomWordGame(score)
    setGameId(newGame.id)
    setLoadingModalShow(false)
  }

  function checkGuess(i) {
    if (answer[i] === currentGuess[i]) {
      tempBG.splice(i, 1, isCorrect)
    } else if (answer.find(guess => guess === currentGuess[i])) {
      //find index of answer    
      let indices = answer.map((e, k) => e === currentGuess[i] ? k : '').filter(String)
      let occursMoreThanOnce = false
      indices.every(function (idx) {
        if (answer[idx] === currentGuess[idx]) {
          return occursMoreThanOnce = true;
        }
      })
      if (!occursMoreThanOnce) {
        tempBG.splice(i, 1, inWord)
      }


      if (indices.length === 1 && (answer[indices[0]] === currentGuess[indices[0]])) {
        tempBG.splice(i, 1, notInWord)
      }
      if (indices.length === 1 && (answer[indices[0]] !== currentGuess[indices[0]])) {
        tempBG.splice(i, 1, inWord)
      }
      if (indices.length === 2 && ((answer[indices[0]] === currentGuess[indices[0]]) && answer[indices[1]] !== currentGuess[indices[1]])) {
        tempBG.splice(i, 1, inWord)
      }
      if (indices.length === 2 && ((answer[indices[0]] !== currentGuess[indices[0]]) && answer[indices[1]] === currentGuess[indices[1]])) {
        tempBG.splice(i, 1, inWord)
      }
      console.log(indices)
    } else {
      tempBG.splice(i, 1, notInWord)
    }

    //set background color of entry after evaluated
    if (currentGuessCount === 1) {
      setGuess1bg(tempBG)
    }
    if (currentGuessCount === 2) {
      setGuess2bg(tempBG)
    }
    if (currentGuessCount === 3) {
      setGuess3bg(tempBG)
    }
    if (currentGuessCount === 4) {
      setGuess4bg(tempBG)
    }
    if (currentGuessCount === 5) {
      setGuess5bg(tempBG)
    }
    if (currentGuessCount === 6) {
      setGuess6bg(tempBG)
    }
  }

  function compareEntry() {
    for (let i = 0; i < answer.length; i++) {
      checkGuess(i)
    }

    if (answer.join() === currentGuess.join()) {
      setStreakCount(streakCount + 1)
      // setCompare(true)   
      gameWon = true
      setTimeout(() => {
        setWinModalShow(true)
      }, 2500);
      saveRandomScore()
      props.getUserScores()
    } else if (currentGuessCount === 6) {
      setStreakCount(0)
      gameWon = false
      setTimeout(() => {
        setLoseModalShow(true)
      }, 2500);
      saveRandomScore()
      props.getUserScores()
    }
    else {
      // setCompare(false)      
    }

    setCurrentGuessCount(currentGuessCount + 1)
    setEntryCount(1)
    setCurrentGuess(['', '', '', '', ''])
    setIsWord(false)
  }

  const updateStreakCount = async () => {
    let streakCountJson = {
      userId: props.user.id,
      streakCount: streakCount
    }
    let updatedStreakCount = await gamesAPI.updateStreakCount(streakCountJson)
  }


  return (
    <>
      <UserScoreDisplay
        userScore={props.userScore}
        setUserScore={props.setUserScore}
        user={props.user}
        answer={answer}
        streakCount={streakCount}
        getUserScores={props.getUserScores}
      />

      <div style={{ 'background': "RGB(25,35,25,1)", "height": '100vh' }}>
        <GameBoardContainer
          currentGuess={currentGuess}
          setCurrentGuess={setCurrentGuess}
          guess1={guess1}
          setGuess1={setGuess1}
          guess2={guess2}
          setGuess2={setGuess2}
          guess3={guess3}
          setGuess3={setGuess3}
          guess4={guess4}
          setGuess4={setGuess4}
          guess5={guess5}
          setGuess5={setGuess5}
          guess6={guess6}
          setGuess6={setGuess6}
          compareEntry={compareEntry}
          guessInit={guessInit}
          entryCount={entryCount}
          setEntryCount={setEntryCount}
          currentGuessCount={currentGuessCount}
          setCurrentGuessCount={setCurrentGuessCount}
          checkIfWord={checkIfWord}
          isWord={isWord}
          setIsWord={setIsWord}
          guess1bg={guess1bg}
          guess2bg={guess2bg}
          guess3bg={guess3bg}
          guess4bg={guess4bg}
          guess5bg={guess5bg}
          guess6bg={guess6bg}
          invalidEntry={invalidEntry}
          setInvalidEntry={setInvalidEntry}
          shake={shake}
          setShake={setShake}
        />

        <KeyBoardContainer
          {...props}
          currentGuess={currentGuess}
          setCurrentGuess={setCurrentGuess}
          guess1={guess1}
          setGuess1={setGuess1}
          guess2={guess2}
          setGuess2={setGuess2}
          guess3={guess3}
          setGuess3={setGuess3}
          guess4={guess4}
          setGuess4={setGuess4}
          guess5={guess5}
          setGuess5={setGuess5}
          guess6={guess6}
          setGuess6={setGuess6}
          compareEntry={compareEntry}
          guessInit={guessInit}
          entryCount={entryCount}
          setEntryCount={setEntryCount}
          currentGuessCount={currentGuessCount}
          setCurrentGuessCount={setCurrentGuessCount}
          checkIfWord={checkIfWord}
          isWord={isWord}
          setIsWord={setIsWord}
          guess1bg={guess1bg}
          guess2bg={guess2bg}
          guess3bg={guess3bg}
          guess4bg={guess4bg}
          guess5bg={guess5bg}
          guess6bg={guess6bg}
          invalidEntry={invalidEntry}
          setInvalidEntry={setInvalidEntry}
          shake={shake}
          setShake={setShake}
        />
        <StartGameModal
          userScore={props.userScore}
          user={props.user}
          show={gameStartModalShow}
          hideNew={hideNew}
          hideQuit={hideQuit}
        />

        <WinModal
          getUserScores={props.getUserScores}
          userScore={props.userScore}
          user={props.user}
          show={winModalShow}
          hideNew={hideNew}
          hideQuit={hideQuit}
          urbanDef={urbanDef}
          normalDef={normalDef}
          answer={answer}
        />
        <LoseModal
          getUserScores={props.getUserScores}
          userScore={props.userScore}
          user={props.user}
          show={loseModalShow}
          hideNew={hideNew}
          hideQuit={hideQuit}
          urbanDef={urbanDef}
          normalDef={normalDef}
          answer={answer}
          guess6={guess6}
        />
        <LoadingModal
          show={loadingModalShow}
        />
        <InvalidEntryModal
          show={invalidEntry}
          setInvalidEntry={setInvalidEntry}
          invalidEntry={invalidEntry}
          shake={shake}
          setShake={setShake}
          entryCount={entryCount}
        />

      </div>

    </>
  )
}