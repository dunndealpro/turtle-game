import AuthPage from '../AuthPage/AuthPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import { useEffect, useState } from 'react'
import { getUser } from '../../utilities/users-service';
import LandingPage from '../LandingPage/LandingPage';
import NavBar from '../../components/NavBar/NavBar';

function App() {

  const guessInit = ['', '', '', '', '']

  const [user, setUser] = useState(getUser());

  const [currentGuess, setCurrentGuess] = useState([])
  const [currentGuessCount, setCurrentGuessCount] = useState()

  const [compare, setCompare] = useState(false)


  const [guess1, setGuess1] = useState(['', '', '', '', ''])
  const [guess2, setGuess2] = useState(['', '', '', '', ''])
  const [guess3, setGuess3] = useState(['', '', '', '', ''])
  const [guess4, setGuess4] = useState(['', '', '', '', ''])
  const [guess5, setGuess5] = useState(['', '', '', '', ''])
  const [guess6, setGuess6] = useState(['', '', '', '', ''])

  // function compareEntry() {
  //   console.log(currentGuess, compare, guess1)
  //   if (compare) {
  //     console.log("True")
  //   } else {
  //     console.log("False")
  //   }

  // }

  useEffect(() => {
    console.log("UE HUH")
    // compareEntry()
  },)

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
            // compareEntry={compareEntry}

          />

        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
