import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import UserContext from "../common/UserContext";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../Home/Home";
import LoginForm from "../auth/LoginForm";
import NewUserForm from "../auth/NewUserForm";
import EditUserForm from "../profile/EditUserForm.js";
import Categories from "../categories/Categories"
import CategoryInfo from "../categories/CategoryInfo";
import Quiz from "../quiz/Quiz";
import ScoreProgress from "../score-progress/ScoreProgress.js";
import Test from "./test";
import TopScores from "../top-scores/TopScores";
import Feedback from "../feedback/Feedback";
import About from "../about/About";




const MyRoutes = () => {


    const contextValue = useContext(UserContext);
    console.log("contextValue", contextValue);

    const { loginUser, registerUser, updateUser }  = useContext(UserContext);
   
    return (
        
            <Routes>
                
                <Route path = "/" element = {<Home />} />

                <Route path="/login" element={<LoginForm loginUser={loginUser}/>} />

                <Route path="/signup" element={<NewUserForm registerUser={registerUser} />} />
                
                <Route path="/categories" element={<Categories />} />

                <Route path="/categories/:category" element={<CategoryInfo />} />                

                <Route path="/topscores" element={<TopScores />} />

                <Route path="/about" element={<About />} />

                <Route path="/test" element={<Test />} />

                <Route element={<PrivateRoutes /> }>

                    <Route path="/profile" element={<EditUserForm updateUser={updateUser} />} />

                    <Route path="/quiz/categories/:category" element={<Quiz />} />

                    <Route path="/progress" element={<ScoreProgress />} />

                    <Route path="/feedback" element={<Feedback />} />

                </Route>

                        
            </Routes>
        

    )

}

export default MyRoutes;