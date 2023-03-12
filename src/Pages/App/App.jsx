import AuthPage from '../AuthPage/AuthPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import { useEffect, useState } from 'react'
import { getUser } from '../../utilities/users-service';
import LandingPage from '../LandingPage/LandingPage';
import NavBar from '../../components/NavBar/NavBar';

function App() {
  let isCorrect = "green"
  let inWord = "yellow"
  let notInWord = "gray"
  let blankEntry = "white"


  const [user, setUser] = useState(getUser());//1
  const [entryCount, setEntryCount] = useState(1)//2

  const [compare, setCompare] = useState(false)//3

  // const [answer, setAnswer] = useState(['c', 'a', 'r', 'e', 's'])//4
  const [answer, setAnswer] = useState(['t', 'r', 'e', 'e', 's'])//4

  const [currentGuess, setCurrentGuess] = useState(['', '', '', '', ''])//5
  const [currentGuessCount, setCurrentGuessCount] = useState(1)//6

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

  const guessInit = ['', '', '', '', '']


  const checkIfWord = async () => {
    let searchUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${guess1.join('')}`
    console.log(searchUrl)
    try {
      const response = await fetch(searchUrl).then(res => res.json());
      console.log(response)
      if (response[0].word) {
        console.log("OH YEA")
      }

    } catch (error) {
      console.log("Error: ", error)
    }
  }

  // function checkIfLetterGuessed(){
  function compareEntry() {
    // checkIfWord()

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
        //   answer.reduce(function(a, e, k) {
        //     if (e ===currentGuess[i])
        //         a.push(k);
        //     return a ;
        // }, []); 

        console.log(indices)
      } else {
        console.log("not in word, turn gray ", currentGuess[i])
        tempBG.splice(i, 1, notInWord)
        console.log(tempBG)
      }


    }
    // setGuess1bg(tempBG1)
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
    } else {
      console.log("join compare false")

      setCompare(false)
    }

    console.log(compare)
    setCurrentGuessCount(currentGuessCount + 1)
    setEntryCount(1)
    setCurrentGuess(['', '', '', '', ''])
  }

  // function compareEntry() {
  //   // checkIfLetterGuessed()
  //   checkIfWord()

  //   let tempBG = [notInWord, notInWord, notInWord, notInWord, notInWord]
  //   console.log(
  //     "answer: ", answer,
  //     " guess: ", guess1,
  //     " BACKGROUND: ", guess1bg,
  //     " tempBG: ", tempBG
  //   )

  //   // for (let i = 0; i < 5; i++) {
  //   //   if (answer[i] == guess1[i]) {
  //   //     // console.log(i, answer[i], guess1[i])
  //   //     setCompare(true)
  //   //   } else { setCompare(false) }
  //   // }

  //   // let tempBG1 = tempBG
  //   for (let i = 0; i < 5; i++) {
  //     console.log(i, answer[i], guess1[i])
  //     if (answer[i] == guess1[i]) {
  //       console.log("letter correct")
  //       tempBG.splice(i, 1, isCorrect)
  //       console.log(tempBG)
  //       // console.log(tempBG1)

  //     } else if (answer.find(guess => guess === guess1[i])) {
  //       console.log("letter in word")
  //       tempBG.splice(i, 1, inWord)
  //       console.log(tempBG)
  //       // console.log(tempBG1)

  //     } else {
  //       console.log("not in word")
  //       tempBG.splice(i, 1, notInWord)
  //       console.log(tempBG)
  //       // console.log(tempBG1)
  //     }
  //   }
  //   console.log("tempBG: ", tempBG)
  //   setGuess1bg(tempBG)
  //   if (answer.join() === guess1.join()) {
  //     setCompare(true)
  //     console.log("join compare true")
  //   } else {
  //     console.log("join compare false")

  //     setCompare(false)
  //   }

  //   console.log(compare)

  // }

  // console.log("BG: ", guess1bg)
  console.log(compare)
  if (compare) {
    console.log("True")
  } else {
    console.log("False")
  }


  // useEffect(function () {
  //   console.log("UE HUH")
  //   // compareEntry()
  //   console.log("Entry count: ", entryCount)
  // }, [entryCount]);

  useEffect(() => {
    console.log("UseEffect Engaged")
    // compareEntry()
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
            // background = {background}
            guess1bg={guess1bg}
            guess2bg={guess2bg}
            guess3bg={guess3bg}
            guess4bg={guess4bg}
            guess5bg={guess5bg}
            guess6bg={guess6bg}
            currentGuessCount={currentGuessCount}
            setCurrentGuessCount={setCurrentGuessCount}

          />

        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
