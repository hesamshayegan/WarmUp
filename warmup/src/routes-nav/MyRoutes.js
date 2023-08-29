import React, { useContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom"


import LoginForm from "../auth/LoginForm"
import UserContext from "../profile/UserContext"

const MyRoutes = () => {

    const contextValue = useContext(UserContext);
    console.log("contextValue", contextValue);
    debugger;
    const loginUser  = useContext(UserContext);
   
    return(
        <div>
            <Routes>

                <Route path="/login" element={<LoginForm loginUser={loginUser}/>} />

            </Routes>
        </div>

    )

}

export default MyRoutes;