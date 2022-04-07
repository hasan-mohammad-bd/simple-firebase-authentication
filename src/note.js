/* 
firebase project steps:
//=========================================
steps:


1. create a project

2. create a web project

3. run npm install firebase

4. copy the init and save it in a folder

5. go to authentication 

6. enable github or google

7. fulfill the requirement and save

8. go to does > build > web >get started> and copy the line of code to App.js : const auth = getAuth(app);(also import)(above the function component)

9. go to does > build > web > google/github > copy the code: provider = googleAuthProvider() (also import)

10. create a button for event handler. use googleSigninPopup function :
  signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    setUser(user);
    console.log(user);
  })
  .catch(error => {
    console.log(error)
  })

11. create a button for google/github sign in. place the event handler

12.  to show to UI use useState

13. show to ui ex: name is  user.displayName



6. set the event handler.

=============================
SDK : software development kit 
=============================
 */