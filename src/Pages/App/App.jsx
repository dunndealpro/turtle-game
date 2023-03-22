import AuthPage from '../AuthPage/AuthPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import { useEffect, useState } from 'react'
import { getUser } from '../../utilities/users-service';
import LandingPage from '../LandingPage/LandingPage';
import NavBar from '../../components/NavBar/NavBar';
import WinModal from '../../components/WinModal/WinModal';
import LoseModal from '../../components/LoseModal/LoseModal';

function App() {
  let isCorrect = "green"
  let inWord = "yellow"
  let notInWord = "gray"
  let blankEntry = "white"
  const guessInit = ['', '', '', '', '']

  const [user, setUser] = useState(getUser());//1
  const [entryCount, setEntryCount] = useState(1)//2

  const [compare, setCompare] = useState(false)//3

  // const [answer, setAnswer] = useState(['c', 'a', 'r', 'e', 's'])//4
  const [answer, setAnswer] = useState(['t', 'r', 'e', 'e', 's'])//4

  const [currentGuess, setCurrentGuess] = useState(['', '', '', '', ''])//5
  const [currentGuessCount, setCurrentGuessCount] = useState(1)//6
  const [isWord, setIsWord] = useState(false)
  // const [isUrbanWord, setIsUrbanWord] = useState(false)
  const [randomUrbanWord, setRandomUrbanWord] = useState('')

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
  const [urbandDef, setUrbanDef] = useState()
  const [winModalShow, setWinModalShow] = useState(false);
  const [loseModalShow, setLoseModalShow] = useState(false);

  let isUrbanWord = false

  function onHide() {
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
    console.log("Im hiding up in this ish")
    setEntryCount(1)
    setIsWord(false)
    getNewAnswer()
  }

  const getNewAnswer = async () => {
    const randomWord = await fetch(`https://api.urbandictionary.com/v0/random`).then(res => res.json());
    console.log(randomWord)
    let words = randomWord.list
    console.log(words)
    let isFiveLetters = false
    let newAnswer

    for (let i = 0; i < words.length; i++) {
      if (words[i].word.length === 5) {
        console.log("YES")
        newAnswer = words[i].word.toLowerCase()
        checkIfUrbanWord(newAnswer)
        if (isUrbanWord) {
          newAnswer = newAnswer.split("")
          console.log(newAnswer)
          isFiveLetters = true
          break
        }
      }
    }

    if (!isUrbanWord) {
      getNewAnswer()
    }
  }

  const checkIfUrbanWord = async (newAnswer) => {
    let searchUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${newAnswer}`
    console.log(searchUrl)
    try {
      const response = await fetch(searchUrl).then(res => res.json());
      console.log("URBAN ", response)
      if (response[0].word) {
        console.log("OH URBAN YEA")
        isUrbanWord = true
        console.log(response[0].word)
        setAnswer(response[0].word.split(""))

      }
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  const getUrbanDef = async () => {
    let urbanSearchUrl = `https://api.urbandictionary.com/v0/define?term=${currentGuess.join('')}`
    try {
      const response = await fetch(urbanSearchUrl).then(res => res.json());
      setUrbanDef(response)
      let rndInt = Math.floor(Math.random() * 10) + 1
      console.log(response.list[rndInt].definition)
    } catch (error) {
      console.log("Error: ", error)
      
    }
  }

  const checkIfWord = async () => {
    let searchUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${currentGuess.join('')}`
    console.log(searchUrl)
    try {
      const response = await fetch(searchUrl).then(res => res.json());
      console.log(response)
      if (response[0].word) {
        console.log("OH YEA")
        
        compareEntry()
      }

    } catch (error) {
      console.log("Error: ", error)
    }
  }

  function compareEntry() {
    let tempBG = [notInWord, notInWord, notInWord, notInWord, notInWord]
    let tempBG1 = tempBG
    console.log(tempBG)
    for (let i = 0; i < answer.length; i++) {
      console.log(i, answer[i], currentGuess[i])
      if (answer[i] === currentGuess[i]) {
        console.log("letter correct  ", tempBG.splice(i, 1, isCorrect))
        tempBG.splice(i, 1, isCorrect)
      } else if (answer.find(guess => guess === currentGuess[i])) {
        //find index of answer
        console.log("letter in word", currentGuess[i])
        console.log(answer)
        let indices = answer.map((e, k) => e === currentGuess[i] ? k : '').filter(String)
        let occursMoreThanOnce = false
        indices.every(function (idx) {
          if (answer[idx] === currentGuess[idx]) {
            return occursMoreThanOnce = true;
          }
        })
        if (!occursMoreThanOnce) {
          console.log(tempBG1[i])
          console.log(tempBG1)
          tempBG.splice(i, 1, inWord)
          console.log("turn yellow! ", tempBG)
        }
        console.log(occursMoreThanOnce)

        if (indices.length === 1 && (answer[indices[0]] === currentGuess[indices[0]])) {
          tempBG.splice(i, 1, notInWord)
          console.log("turn gray ", tempBG)
        }
        if (indices.length === 1 && (answer[indices[0]] !== currentGuess[indices[0]])) {
          tempBG.splice(i, 1, inWord)
          console.log("turn yellow ", tempBG)
        }
        if (indices.length === 2 && ((answer[indices[0]] === currentGuess[indices[0]]) && answer[indices[1]] !== currentGuess[indices[1]])) {
          tempBG.splice(i, 1, inWord)
          console.log("turn yellow ", tempBG)
        }
        if (indices.length === 2 && ((answer[indices[0]] !== currentGuess[indices[0]]) && answer[indices[1]] === currentGuess[indices[1]])) {
          tempBG.splice(i, 1, inWord)
          console.log("turn yellow ", tempBG)
        }
        console.log(indices)
      } else {
        console.log("not in word, turn gray ", currentGuess[i])
        tempBG.splice(i, 1, notInWord)
        console.log(tempBG)
      }
    }

    console.log("current guess count: ", currentGuessCount)
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
      setCompare(true)
      console.log("join compare true")
      getUrbanDef()
      setWinModalShow(true)
    } else if (currentGuessCount === 6) {
      setLoseModalShow(true)
      getUrbanDef()
    }

    else {
      console.log("join compare false")
      setCompare(false)
    }

    console.log(compare)
    setCurrentGuessCount(currentGuessCount + 1)
    setEntryCount(1)
    setCurrentGuess(['', '', '', '', ''])
    setIsWord(false)
  }

  console.log("False")

  useEffect(() => {
    console.log("UseEffect Engaged")
  }, [compare])

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <LandingPage
            currentGuess={currentGuess}
            setCurrentGuess={setCurrentGuess}
            guess1={guess1}
            guess2={guess2}
            guess3={guess3}
            guess4={guess4}
            guess5={guess5}
            guess6={guess6}
            setGuess1={setGuess1}
            setGuess2={setGuess2}
            setGuess3={setGuess3}
            setGuess4={setGuess4}
            setGuess5={setGuess5}
            setGuess6={setGuess6}
            compareEntry={compareEntry}
            guessInit={guessInit}
            setEntryCount={setEntryCount}
            entryCount={entryCount}
            guess1bg={guess1bg}
            guess2bg={guess2bg}
            guess3bg={guess3bg}
            guess4bg={guess4bg}
            guess5bg={guess5bg}
            guess6bg={guess6bg}
            currentGuessCount={currentGuessCount}
            setCurrentGuessCount={setCurrentGuessCount}
            checkIfWord={checkIfWord}
            isWord={isWord}
            setIsWord={setIsWord}
            user={user}
          />
          <WinModal
          user={user}
            show={winModalShow}
            onHide={onHide}
            urbanDef={urbandDef}
            answer={answer}
          />
          <LoseModal
          user={user}
            show={loseModalShow}
            onHide={onHide}
            urbanDef={urbandDef}
            answer={answer}
            guess6={guess6}
          />
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
