import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import categoryData from "./CategoryData";
import WarmUpApi from "../api/api";
import UserContext from "../common/UserContext";



const CategoryInfo = () => {

    const navigate = useNavigate();
    const {  currentUser } = useContext(UserContext);
    const [record, setRecord] = useState({});
    const { category, id } = useParams();
    const categories = categoryData


        useEffect(() => {
            
            async function getRecord() {

                try {   
                        if(currentUser) {

                            const username = currentUser.username;
                            const response = await WarmUpApi.getRecord({ username, category });
                            setRecord(response)

                        }
                    
                 } catch (err) {
                        console.error("Error fetching record:", err)
                    }

            }
            
            getRecord();
        }, []);



        const handleRestartQuiz = async () => {
            
            const username = currentUser.username;
            await WarmUpApi.deleteRecord({ username, category });
            navigate(`../quiz/categories/${category}`)

        }


    const categoryInfo = categories.find(cat => cat.name === category);    


    return (
        <div className="category-container">
            <div className="category-info">
                <h1> {categoryInfo.name} </h1>
                <p> {categoryInfo.info} </p>
            </div>

            <div className="category-container">
                {record ? (
                    <>
                    {record.current_complexity === "easy" && (
                        <>
                        <p>Wanna try the medium questions?</p>
                        <Link to={`../quiz/categories/${category}`} key={id}>
                            Start
                        </Link>
                        </>
                    )}

                    {record.current_complexity === "medium" && (
                        <>
                        <p>Wanna try the hard questions?</p>
                        <Link to={`../quiz/categories/${category}`} key={id}>
                            Start
                        </Link>
                        </>
                    )}

                    {record.current_complexity === "hard" && (
                        <>
                        <p>Your previous score is {Math.round(100*(record.correct_answers / record.questions_per_category))}% </p>
                        <p>Wanna retake the quiz?</p>
                        <button onClick={handleRestartQuiz}> Start </button>
                        </>
                    )}
                    </>
                ) : (
                    <>
                    <p>Wanna take a quiz?</p>
                    <Link to={`../quiz/categories/${category}`} key={id}>
                        Play
                    </Link>
                    </>
                )}

                {!currentUser ? (
                    <>
                    <p>Wanna take a quiz?</p>
                    <Link to={`../quiz/categories/${category}`} key={id}>
                        Play
                    </Link>
                    </>
                ) : (
                    null
                    )   
                }
            </div>

        

        </div>
        
    )

}

export default CategoryInfo
