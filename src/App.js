import "./App.css";
import app from "./firebase.init";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

//google sign in
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  //github sign in

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then(result => {
      const user = result.user
      setUser(user);
      console.log(user);
    })
    .catch(error => {
      console.error(error)
    })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setUser({});
      });
  };
  return (
    <div className="App">
      {user.uid ? (
        <button onClick={handleSignOut}>sign out</button>
      ) : (
        //empty div is called fragment 
        <>
          <button onClick={handleGoogleSignIn}>Google sign in</button>
          <button onClick={handleGithubSignIn}>Github sign in</button>
        </>
      )}
      <h2>name: {user.displayName}</h2>
      <p>i know your emil address {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
