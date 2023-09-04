// import React, { useState, useEffect, useContext} from 'react';
// import { useParams } from "react-router-dom";
// import UserContext from '../common/UserContext';
// import QuizCard from './QuizCard';
// import WarmUpApi from '../api/api';


// function Quiz() {

//     const { currentUser } = useContext(UserContext);
//     const [questsions, setQuestions] = useState([]);
//     const { category, id } = useParams();

    

//     useEffect(() => {
//         async function fetchQuestions() {
//             try {
//                 const username = currentUser.username
//                 const fetchedQuestions = await WarmUpApi.getQuestions({ username, category });
//                 setQuestions(fetchedQuestions);

//             } catch (error) {
//                 console.error("Error fetching questions:", error);
//             }
//         }
        
//         fetchQuestions();
        
//     }, []);

//     return (

//         <div className="question-container">
//                 <h1> {category} </h1>
//                 {questsions.map(q => (
//                     <QuizCard
//                         key={q.id}
//                         id={q.id}
//                         question={q.question}
//                     />
//                 ))}

//         </div>

//     )





// }


// export default Quiz

import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import UserContext from '../common/UserContext';
import WarmUpApi from '../api/api';
import QuizQuestion from './QuizQuestion';

function Quiz() {
            const { currentUser } = useContext(UserContext);
            const { category, id } = useParams();

            const [questions, setQuestions] = useState([]);
            const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
            const [selectedAnswers, setSelectedAnswers] = useState({});
            const [score, setScore] = useState(0);
            const [isQuizCompleted, setIsQuizCompleted] = useState(false);


            useEffect(() => {
                console.log("Running Callback")

                async function fetchQuestions() {
                    try {

                        const username = currentUser.username;
                        const fetchedQuestions = await WarmUpApi.getQuestions({ username, category });
                        setQuestions(fetchedQuestions);
                        console.log('Questions state:', questions);
        
                    } catch (error) {
                        console.error('Error fetching questions:', error);
                    }
                }

                fetchQuestions();
            }, []);

            const currentQuestion = questions[currentQuestionIndex];


            const handleAnswerSelect = (choiceId) => {

                setSelectedAnswers({
                    ...selectedAnswers, 
                    [currentQuestion.id]: 
                        {
                            "choice": choiceId,
                            "score": 0
                        }           
                });
                
            };

            const handleNextQuestion = () => {
                debugger;
                if (selectedAnswers){
                    const selectedAnswer = selectedAnswers[currentQuestion.id].choice;
                    if (selectedAnswer && currentQuestion[selectedAnswer].isCorrect) {
                        selectedAnswers[currentQuestion.id] = {
                            ...selectedAnswers[currentQuestion.id],
                            score: 1
                        }
                    }
                }               
                

                // Move to the next question
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                

                // Check if all questions have been answered
                if (currentQuestionIndex === questions.length - 1) {
                setIsQuizCompleted(true);
                }
            };

            const handlePreviousQuestion = () => {

                // Move to the previous question
                setCurrentQuestionIndex(currentQuestionIndex - 1);
                

            }

            
            if (isQuizCompleted) {
                return (

                <div>
                    <button
                    onClick={() =>
                        alert(`Quiz completed! Your score: ${score}/${questions.length}`)
                    }
                    >
                    Show Score
                    </button>
                </div>

                );
            }

            if (questions.length === 0) {

                return <div>Loading...</div>;

            } else {

                return (
                    
                    <div className="quiz">
                        {console.log("currentQuestion Selected", selectedAnswers[currentQuestion.id])}
                        {console.log("selectedAnswer---->", selectedAnswers)}
                    <h1>Quiz</h1>
                    <QuizQuestion
                        questionKey={currentQuestion}
                        selectedAnswer={
                            selectedAnswers && selectedAnswers[currentQuestion.id]
                            ?
                            selectedAnswers[currentQuestion.id].choice
                            :
                            null
                        }
                        onAnswerSelect={handleAnswerSelect}
                    />

                    {currentQuestionIndex > 0
                        ?
                        <button onClick={handlePreviousQuestion}> Previous </button>
                        :
                        null
                    }
                    
                    <button onClick={handleNextQuestion}> Next </button>
                    {/* {console.log("currentQuestion", currentQuestion)} */}
                    {console.log("selectedAnswer", selectedAnswers)}
                    {/* {console.log("Q", questions)}
                    {console.log("score", score)} */}

                        
                    </div>
                );

            }
                
}

export default Quiz;

{/* {console.log("Rendering")}
                        {console.log("currentQuestion", currentQuestion)}
                        {console.log("currentQuestionIndex", currentQuestionIndex)}
                        {console.log("selectedAnswer", selectedAnswer)}
                        {console.log("-->",currentQuestion)}
                        {console.log("selectedAnswer",selectedAnswer)}
                        {console.log("Selected", currentQuestion[selectedAnswer])}
                        {console.log("score", score)} */}
