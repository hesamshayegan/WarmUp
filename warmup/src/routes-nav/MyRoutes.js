import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UserContext from "../common/UserContext";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../Home/Home";
import LoginForm from "../auth/LoginForm";
import NewUserForm from "../auth/NewUserForm";
import EditUserForm from "../profile/EditUserForm.js";
import Categories from "../categories/Categories"
import CategoryInfo from "../categories/CategoryInfo";
import Quiz from "../quiz/Quiz";



const MyRoutes = () => {


    const contextValue = useContext(UserContext);
    console.log("contextValue", contextValue);

    const { loginUser, registerUser, updateUser }  = useContext(UserContext);
   
    return (
        <div>
            <Routes>
                
                <Route path = "/" element = {<Home />} />

                <Route path="/login" element={<LoginForm loginUser={loginUser}/>} />

                <Route path="/signup" element={<NewUserForm registerUser={registerUser} />} />
                
                <Route path="/categories" element={<Categories />} />

                <Route path="/categories/:category" element={<CategoryInfo />} />

                <Route element={<PrivateRoutes /> }>

                    <Route path="/profile" element={<EditUserForm updateUser={updateUser} />} />

                    <Route path="/quiz/categories/:category" element={<Quiz />} />

                </Route>

                        
            </Routes>
        </div>

    )

}

export default MyRoutes;