import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import { useEffect, useState } from 'react'

import WinModal from '../../components/WinModal/WinModal';
import LoseModal from '../../components/LoseModal/LoseModal';
import StartGameModal from '../../components/StartGameModal/StartGameModal';

import GameBoardContainer from "../../components/GameBoardContainer/GameBoardContainer";
import KeyBoardContainer from "../../components/KeyBoardContainer/KeyBoardContainer";

import * as gamesAPI from "../../utilities/games-api"
import UserScoreDisplay from '../../components/UserScoreDisplay/UserScoreDisplay';


export default function RWGamePage(props) {
  console.log("RWGamePage! ", { props })
  // console.log("User Streak Count on page load: ", props.user.streakcount)

  let isCorrect = "green"
  let inWord = "yellow"
  let notInWord = "gray"
  let blankEntry = "white"

  let isUrbanWord = false

  const guessInit = ['', '', '', '', '']
  const [entryCount, setEntryCount] = useState(1)//2
  const [compare, setCompare] = useState(false)//3
  // const [answer, setAnswer] = useState(['c', 'a', 'r', 'e', 's'])//4
  // const [answer, setAnswer] = useState(['t', 'r', 'e', 'e', 's'])//4
  const [answer, setAnswer] = useState(['', '', '', '', ''])//4
  const [answerInfo, setAnswerInfo] = useState({})//4
  const [currentGuess, setCurrentGuess] = useState(['', '', '', '', ''])//5
  const [currentGuessCount, setCurrentGuessCount] = useState(1)//6
  const [isWord, setIsWord] = useState(false)
  const [gameId, setGameId] = useState()
  // const [gameWon, setGameWon] = useState(false)

  let gameWon = false

  // const [randomUrbanWord, setRandomUrbanWord] = useState('')
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
  

  // let streakCountInit
 
  // console.log("gameWon: ", gameWon)

  const [userScore, setUserScore] = useState([])


  const [winModalShow, setWinModalShow] = useState(false);
  const [loseModalShow, setLoseModalShow] = useState(false);
  const [gameStartModalShow, setGameStartModalShow] = useState(true);

  const checkLastGame = async () => {
    let results = await gamesAPI.checkLastGame(props.user.id)
    console.log("CHECK LAST GAME*****   ", results.lastgame[0].gameWon)
    console.log("****USER STREAK COUNT:  ", results.streakcount[0].streakcount)    
    console.log("****+----****:  ", results.getLongStreak)
    if (results.lastgame[0].gameWon === true) {      
      setStreakCount(results.streakcount[0].streakcount)
    } else {
      setStreakCount(0)
    }
  }

  function hideNew() {
    // saveRandomScore()
    updateStreakCount()
    checkLastGame(props.user.id)
    setWinModalShow(false)
    setLoseModalShow(false)
    setGameStartModalShow(false)
    setCompare(false)
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
    // console.log("Im hiding up in this ish")
    setEntryCount(1)
    setIsWord(false)
    // getUserScores(props.user.userId)
    // updateStreakCount(streakCount)
    getNewAnswer()
    
  }

  function hideQuit() {
    // saveRandomScore()
    updateStreakCount(streakCount)
    setGameStartModalShow(false)

    setWinModalShow(false)
    setLoseModalShow(false)
    setCompare(false)
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
    // console.log("Im hiding up in this ish")
    setEntryCount(1)
    setIsWord(false)
    // getNewAnswer()
    // getUserScores(props.user.userId)
    updateStreakCount()
  }

  const getNewAnswer = async () => {
    const randomWord = await fetch(`https://api.urbandictionary.com/v0/random`).then(res => res.json());
    let words = randomWord.list
    let newAnswer
    for (let i = 0; i < words.length; i++) {
      if (words[i].word.length === 5) {
        newAnswer = words[i].word.toLowerCase()
        await checkIfUrbanWord(newAnswer)
        break
        // if (isUrbanWord) {
        //   newAnswer = newAnswer.split("")
        //   break
        // }
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
        setAnswer(tempAnswer.word.split(""))
        console.log(response[0].meanings[0].definitions[0].definition)
        setNormalDef(response[0].meanings[0].definitions[0].definition)
        getUrbanDef(tempAnswer.word)
        startNewRandomGame()
      }
      
    } catch (error) {
      
      console.log("Error: ", error)
    }
  }

  const getUrbanDef = async (word) => {
    console.log(word)
    let urbanSearchUrl = `https://api.urbandictionary.com/v0/define?term=${word}`
    try {
      const response = await fetch(urbanSearchUrl).then(res => res.json());
      console.log("URBAN DEFINITION: ", response)
      let rndInt = Math.floor(Math.random() * 10) + 1
      setUrbanDef(response.list[rndInt].definition)
      console.log(response.list[rndInt].definition)
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
      console.log("Error: ", error)
    }
  }

  const saveRandomScore = async () => {

    let pointsWon = 7 - currentGuessCount
    console.log("saving random score", pointsWon)

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
    console.log(newScore)
    // updateStreakCount(streakCount)
  }

  // startNewRandomGame 
  // checkLastGame

  const startNewRandomGame = async () => {
    // let streakC 
    // let results = await gamesAPI.checkLastGame(props.user.id)
    // if (results.gameWon === true){
    //    streakC = props.user.streakcount
    // }else if (results.gameWon === false){
    //   streakC = 0
    // }

    let pointsWon = 0
    console.log("STARTING random word game")

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
    console.log(newGame)
    setGameId(newGame.id)
    // setGameWon(false)
    // updateStreakCount(streakCount)
  }

  function compareEntry() {
    // console.log("COMPARE START: LOADED ANSWER = ", answer)
    let tempBG = [notInWord, notInWord, notInWord, notInWord, notInWord]
    let tempBG1 = tempBG
    // console.log(tempBG)
    for (let i = 0; i < answer.length; i++) {
      // console.log(i, answer[i], currentGuess[i])
      if (answer[i] === currentGuess[i]) {
        // console.log("letter correct  ", tempBG.splice(i, 1, isCorrect))
        tempBG.splice(i, 1, isCorrect)
      } else if (answer.find(guess => guess === currentGuess[i])) {
        //find index of answer
        // console.log("letter in word", currentGuess[i])
        // console.log(answer)
        let indices = answer.map((e, k) => e === currentGuess[i] ? k : '').filter(String)
        let occursMoreThanOnce = false
        indices.every(function (idx) {
          if (answer[idx] === currentGuess[idx]) {
            return occursMoreThanOnce = true;
          }
        })
        if (!occursMoreThanOnce) {
          // console.log(tempBG1[i])
          // console.log(tempBG1)
          tempBG.splice(i, 1, inWord)
          // console.log("turn yellow! ", tempBG)
        }
        // console.log(occursMoreThanOnce)

        if (indices.length === 1 && (answer[indices[0]] === currentGuess[indices[0]])) {
          tempBG.splice(i, 1, notInWord)
          // console.log("turn gray ", tempBG)
        }
        if (indices.length === 1 && (answer[indices[0]] !== currentGuess[indices[0]])) {
          tempBG.splice(i, 1, inWord)
          // console.log("turn yellow ", tempBG)
        }
        if (indices.length === 2 && ((answer[indices[0]] === currentGuess[indices[0]]) && answer[indices[1]] !== currentGuess[indices[1]])) {
          tempBG.splice(i, 1, inWord)
          // console.log("turn yellow ", tempBG)
        }
        if (indices.length === 2 && ((answer[indices[0]] !== currentGuess[indices[0]]) && answer[indices[1]] === currentGuess[indices[1]])) {
          tempBG.splice(i, 1, inWord)
          // console.log("turn yellow ", tempBG)
        }
        console.log(indices)
      } else {
        // console.log("not in word, turn gray ", currentGuess[i])
        tempBG.splice(i, 1, notInWord)
        // console.log(tempBG)
      }
    }

    // console.log("current guess count: ", currentGuessCount)
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

    if (answer.join() === currentGuess.join()) {
      setStreakCount(streakCount + 1)
      setCompare(true)
      // console.log("join compare true")
      // getUrbanDef(answer)
      // setGameWon(true)
      gameWon = true
      setWinModalShow(true)
      saveRandomScore()
    } else if (currentGuessCount === 6) {
      setStreakCount(0)
      // getUrbanDef()
      // setGameWon(false)
      gameWon = false

      setLoseModalShow(true)
      saveRandomScore()

    }
    else {
      // console.log("join compare false")
      setCompare(false)
      // setGameWon(false)
      // setStreakCount(0)
    }

    // console.log(compare)
    setCurrentGuessCount(currentGuessCount + 1)
    setEntryCount(1)
    setCurrentGuess(['', '', '', '', ''])
    setIsWord(false)
  }

  const getUserScores = async (userId) => {
    let tempUserScore = await gamesAPI.getUserScores(userId)
    // console.log(tempUserScore)
    setUserScore(tempUserScore)
  }

  const updateStreakCount = async () => {
    // console.log("streak count: ", streakCount)
    let streakCountJson = {
      userId: props.user.id,
      streakCount: streakCount
    }
    let updatedStreakCount = await gamesAPI.updateStreakCount(streakCountJson)
    // console.log("UPDATED STREAK: ", updatedStreakCount)
  }

  // console.log("False")
  // console.log(userScore)

  // useEffect(() => {
  //   console.log("UseEffect Engaged")
  //   getNewAnswer()

  // }, [])

  return (
    <>
      <UserScoreDisplay
        userScore={userScore}
        setUserScore={setUserScore}
        user={props.user}
        answer={answer}
        streakCount={streakCount}
        getUserScores={getUserScores}
      />

      <div style={{ 'background': "RGB(25,35,25,1)", "height": '100vh' }}>
        <GameBoardContainer
          // {...props}
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
        />
        <StartGameModal
        userScore={userScore}
          user={props.user}
          show={gameStartModalShow}
          hideNew={hideNew}
          hideQuit={hideQuit}
        />

        <WinModal
          user={props.user}
          show={winModalShow}
          hideNew={hideNew}
          hideQuit={hideQuit}
          urbanDef={urbanDef}
          normalDef = {normalDef}
          answer={answer}
        />
        <LoseModal
          user={props.user}
          show={loseModalShow}
          hideNew={hideNew}
          hideQuit={hideQuit}
          urbanDef={urbanDef}
          answer={answer}
          guess6={guess6}
        />
      </div>
    </>
  )
}