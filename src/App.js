import logo from './logo.svg';
import './App.css';
import app from './firebase.init';
import {getAuth} from "firebase/auth"

const auth = getAuth = getAuth(app);

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
