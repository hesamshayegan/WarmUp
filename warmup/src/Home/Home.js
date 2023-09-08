import React, { useContext, useEffect } from "react";
import UserContext from "../common/UserContext";
import Button from "@mui/material/Button"


const Home = () => {

    const { currentUser } = useContext(UserContext);
     console.debug("Homepage", "currentUser=", currentUser);


    useEffect(() => {

            document.body.classList.add("overflow-hidden");

        return () => {
            document.body.classList.remove("overflow-hidden");
        };

    }, []);

    
    return (
        <div className="Home-container">
           <div>
            <h1> Homepage</h1>
            <p>
            Quiz description...
            </p>
            
          {currentUser
              ? <h2>
                Welcome Back, {currentUser.firstName || currentUser.username}!
              </h2>
              : (
                  <p className="home">

                        <Button href="/login" variant="contained" color="primary"> Login </Button>

                        <Button href="/signup" variant="outlined" color="secondary"> Signup </Button>
                        
                  </p>
                  
              )}
        </div> 
    </div>  
    )


}

export default Home;