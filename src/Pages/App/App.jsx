import AuthPage from '../AuthPage/AuthPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Routes, Route } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar';
import WinModal from '../../components/WinModal/WinModal';
import LoseModal from '../../components/LoseModal/LoseModal';
import LandingPage from '../LandingPage/LandingPage';
import RWGamePage from '../RWGamePage/RWGamePage';

function App() {


  const [user, setUser] = useState(getUser());

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
            <Route path="/random-turtles" element={<RWGamePage  user={user}/>}/>
          </Routes>
          {/* <LandingPage
            user={user}
          /> */}
          {/* <LandingPage
            user={user}
          /> */}
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
