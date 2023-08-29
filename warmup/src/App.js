import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom"
import jwt_decode from "jwt-decode";


import MyRoutes from './routes-nav/MyRoutes';
import UserContext from './profile/UserContext';
import WarmUpApi from './api/api';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(null);
  const [userInfoLoaded, setUserInfoLoaded] = useState(false);


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
                  setUserInfoLoaded, loginUser }}>
        </UserContext.Provider >
          
        <main>
          {userInfoLoaded ? <MyRoutes /> : null}
        </main>

      </BrowserRouter>

    </div>
    

  );
}

export default App;
