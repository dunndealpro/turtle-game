import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Routes, Route } from 'react-router-dom'

import { useState, useEffect } from 'react'
import { getUser } from '../../utilities/users-service';

import AuthPage from '../AuthPage/AuthPage';
import AboutPage from '../AboutPage/AboutPage';
import LandingPage from '../LandingPage/LandingPage';
import NavBar from '../../components/NavBar/NavBar';
import RWGamePage from '../RWGamePage/RWGamePage';
import ScoreBoardPage from '../ScoreBoardPage/ScoreBoardPage';

import * as gamesAPI from "../../utilities/games-api"

import './App.css';

function App() {


  const [user, setUser] = useState(getUser());
  const [userScore, setUserScore] = useState([])

  const getUserScores = async (userId) => {
    let tempUserScore = await gamesAPI.getUserScores(userId)
    console.log(tempUserScore)
    setUserScore(tempUserScore)
  }
  console.log(userScore)

 useEffect(() => {
    console.log("UseEffect Engaged")
     getUserScores()

  }, [])

  return (
    <main className="App">
      {user ?
        <>
          <NavBar
            user={user}
            setUser={setUser}
          />
          <Routes>
            <Route path="/" element={<LandingPage  user={user}/>}/>
            <Route path="/random-turtles" element={<RWGamePage  user={user} userScore={userScore} getUserScores={getUserScores} setUserScore={setUserScore}/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/score-board" element={<ScoreBoardPage user={user} userScore={userScore} getUserScores={getUserScores} setUserScore={setUserScore}/>}/>
          </Routes>         
        </>
        :
        <AuthPage
          setUser={setUser}
        />
      }
    </main>
  );
}

export default App;
