import AuthPage from '../AuthPage/AuthPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import {useState} from 'react'
import { getUser } from '../../utilities/users-service';

function App() {
  const [user, setUser] = useState(getUser());


  return (
    <main className="App">
    App!
    <AuthPage setUser={setUser}/>
    </main>
  );
}

export default App;
