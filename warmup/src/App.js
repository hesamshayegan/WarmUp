import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom"
import jwt_decode from "jwt-decode"
import MyRoutes from './routes-nav/MyRoutes';
import UserContext from './common/UserContext';
import WarmUpApi from './api/api';
import useLocalStorage from './hooks/useLocalStorage';
import MyNav from './routes-nav/MyNav'
import ScoreContext from './scoreboard/ScoreContext';




function App() {
  
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(null);
  const [userInfoLoaded, setUserInfoLoaded] = useState(false);
  const [scores, setScores] = useState([])


  async function loginUser(data) {
   
    try {
      const res = await WarmUpApi.loginUser(data);
      setToken(res);
      setCurrentUser(res);
      return { success: true };

    } catch (errors) {

      console.error("login failed", errors);
      return { success: false, errors };

    }
    
    
  }



  async function registerUser(data) {

    try {

      const res = await WarmUpApi.registerUser(data);
      setToken(res);
      setCurrentUser(res);
      return { success: true };

    } catch (errors) {

      console.error("sign up failed", errors);
      return { success: false, errors }

    }
    
  }


  async function updateUser(data) {

    try {

      const user = await WarmUpApi.updateUser(currentUser.username, data);
      setCurrentUser(user);
      return { success: true };

    } catch (errors) {

      console.error("edit profile failed", errors);
      return { success: false, errors }

    }
    
  }

  function logout() {

    try {
      console.log("************currentUser", currentUser.username)
      console.log('logging out')
      setCurrentUser(null);
      setToken(null);
    } catch(errors) {

      console.error("logging out failed", errors);
      return { success: false, errors }

    }
    

  }


  async function deleteUser() {
    
    try {
      console.log("************currentUser", currentUser.username)
      const user = await WarmUpApi.deleteUser(currentUser.username);
      setCurrentUser(null);
      return { success: true }; 

    } catch (errors) {

      console.error("delete user failed", errors);
      return { success: false, errors }

    }

  }






  // Load user info from API. Until a user is logged in and they have a token,
  // this should not run. It only needs to re-run when a user logs out, so
  // the value of the token is a dependency for this effect.
  useEffect(() => {
    async function checkToken() {
      if (token) {
        try {
          let { username } = jwt_decode(token);
          WarmUpApi.token = token;
          const user = await WarmUpApi.getUser(username)
          setCurrentUser(user);

        } catch(err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      }
      setUserInfoLoaded(true)
    }

    // set infoLoaded to false while async getCurrentUser runs; once the
    // data is fetched (or even if an error happens!), this will be set back
    // to false to control the spinner.
    setUserInfoLoaded(false)
    checkToken();

  }, [token]) 
  

  return (
    <div className="App">
      <BrowserRouter>

        
        <UserContext.Provider 
          value={{  currentUser, setCurrentUser,
                  setToken, token, userInfoLoaded, 
                  setUserInfoLoaded, loginUser,
                  registerUser, updateUser,
                  deleteUser, logout }}>

          <MyNav logout={logout}/>

          <ScoreContext.Provider value={{ scores, setScores }}>

          <main>
          {userInfoLoaded ? <MyRoutes /> : null}
          </main>

          </ScoreContext.Provider>

        </UserContext.Provider >

      </BrowserRouter>



    </div>
  );
}

export default App;
