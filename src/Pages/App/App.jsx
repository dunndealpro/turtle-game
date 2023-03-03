import AuthPage from '../AuthPage/AuthPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import {useState} from 'react'
import { getUser } from '../../utilities/users-service';
import LandingPage from '../LandingPage/LandingPage';
import NavBar from '../../components/NavBar/NavBar';

function App() {
  const [user, setUser] = useState(getUser());


  return (
    <main className="App">
    {user ? 
    <>
    <NavBar user={user} setUser={setUser}/>
    <LandingPage />

    </>
:
    <AuthPage setUser={setUser}/>
  }
  </main>
  );
}

export default App;
