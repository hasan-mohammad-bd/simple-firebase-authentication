/* 
firebase project steps:
//=========================================
steps:

1. create a project (with meaning full name).
2. fulfill the requirement.
3. go to does right corner of the page > build > web > get started > install the firebase js SDK
> install sdk > npm install firebase > 
4. register to the firebase > and continue > 
5. come to project setting > go to general setting > copy the firebase initialization >
6.  create a file in src > then copy the firebase initialization > export default app > import {getAuth} from "firebase/auth"(to app.js) >
7.  const auth  = getAuth(app) (in App.js) > console.firebase >
8. authentication(below setting) > setStated > go to google sign in > enable this name and save >
9. import google auth provider and take it in a variable>

10. add event handler. here pass the code :
signWithPopup(auth, provider).then(result => {
    const user = result.user;
    console.log(user);
})
.catch(error => {
    condole.error("error", error)
})

11.  to show the user info to ui, need to use state

//to use github authentication
=================================
1. go to authentication > sign in method > go to github

2. go to your personal github account > setting > register a new OAuth application > get authorized classback url from firebase github > copy & paste > "register application"

3. get the client id  and client secret from github and paste them to authentication and save.

4. go does > authentication > web > github

5. copy provider 

6. set the event handler.

=============================
SDK : software development kit 
=============================
 */