import './App.css';
import app from './firebase.init';
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import { useState } from 'react';


const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({})
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      setUser(user)
      console.log(user);
    })
    .catch(error => {
      console.log("error", error);
    })
  }

  const handleSignOut = () => {
    signOut(auth)
    .then( () =>{
      setUser({});
    })
    .catch(error =>{
      setUser({});
    })

  }
  return (
    <div className="App">
    {
        user.email ? <button onClick={handleSignOut}>sign out</button> : <button onClick={handleGoogleSignIn}>Google sign in</button>
            
    }
      <h2>name: {user.displayName}</h2>
      <p>i know your emil address {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
