import AuthPage from '../AuthPage/AuthPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import { useEffect, useState } from 'react'
import { getUser } from '../../utilities/users-service';
import LandingPage from '../LandingPage/LandingPage';
import NavBar from '../../components/NavBar/NavBar';

function App() {


  const [user, setUser] = useState(getUser());//1
  const [entryCount, setEntryCount] = useState(1)//2

  const [compare, setCompare] = useState(false)//3

  const [answer, setAnswer] = useState(['r', 'o', 'u', 't', 'e'])//4

  const [currentGuess, setCurrentGuess] = useState(['', '', '', '', ''])//5
  const [currentGuessCount, setCurrentGuessCount] = useState()//6

  const [guess1, setGuess1] = useState(['', '', '', '', ''])//7
  const [guess2, setGuess2] = useState(['', '', '', '', ''])//8
  const [guess3, setGuess3] = useState(['', '', '', '', ''])//9
  const [guess4, setGuess4] = useState(['', '', '', '', ''])//10
  const [guess5, setGuess5] = useState(['', '', '', '', ''])//11
  const [guess6, setGuess6] = useState(['', '', '', '', ''])//12

  const guessInit = ['', '', '', '', '']

let background = "white"

  function compareEntry() {
    console.log(
      "answer: ", answer,
      " guess: ", guess1
    )

    // for (let i = 0; i < 5; i++) {
    //   if (answer[i] == guess1[i]) {
    //     // console.log(i, answer[i], guess1[i])
    //     setCompare(true)
    //   } else { setCompare(false) }
    // }

    for (let i = 0; i < 5; i++) {
      console.log(i, answer[i], guess1[i])
      if (answer[i] == guess1[i]) {
        console.log("letter correct")
        background = "green"
      } else if (answer.find(guess => guess === guess1[i])) {
        console.log("letter in word")
        background = "yellow"
      } else {
        console.log("not in word")
        background = "white"
      }
    }

    if(answer.join() === guess1.join()){
      setCompare(true)
      console.log("join compare true")
    }else{
      console.log("join compare false")

      setCompare(false)
    }

    console.log(compare)

  }

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
    compareEntry()
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
            background = {background}

          />

        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
