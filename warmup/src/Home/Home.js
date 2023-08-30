import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from "../common/UserContext";


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
                    
                        <Link to="/login"> Login </Link>
                    
                   
                        <Link to="/signup"> Signup </Link>
                    
                    
                  </p>
                  
              )}
        </div> 
    </div>  
    )


}

export default Home;