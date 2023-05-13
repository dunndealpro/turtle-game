import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import AuthPage from '../AuthPage/AuthPage';
import AboutPage from '../AboutPage/AboutPage';
import Footer from '../../components/Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';
import NavBar from '../../components/NavBar/NavBar';
import RWGamePage from '../RWGamePage/RWGamePage';
import ScoreBoardPage from '../ScoreBoardPage/ScoreBoardPage';

import { getUser } from '../../utilities/users-service';
import * as gamesAPI from "../../utilities/games-api"

import './App.css';

function App() {


  const [user, setUser] = useState(getUser());
  const [userScore, setUserScore] = useState([])

  const getUserScores = async (userId) => {
    let tempUserScore = await gamesAPI.getUserScores(userId)
    setUserScore(tempUserScore)
  }


  useEffect(() => {
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
          <div className="flex-grow-1 overflow-auto">
            <Routes>
              <Route path="/" element={<LandingPage user={user} />} />
              <Route path="/random-turtles" element={<RWGamePage user={user} userScore={userScore} getUserScores={getUserScores} setUserScore={setUserScore} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/score-board" element={<ScoreBoardPage user={user} userScore={userScore} getUserScores={getUserScores} setUserScore={setUserScore} />} />
            </Routes>

          </div>
          <Footer />
        </>
        :
        <AuthPage className="flex-grow-1 overflow-auto"
          setUser={setUser}
        />
      }
    </main>
  );
}

export default App;
