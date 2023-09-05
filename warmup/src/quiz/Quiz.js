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
            const [isQuizCompleted, setIsQuizCompleted] = useState(false);


            useEffect(() => {


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
                
                if (selectedAnswers && selectedAnswers[currentQuestion.id]){
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
                

                // Check if all questions are seen (answered or not)
                if (currentQuestionIndex === questions.length - 1) {
                setIsQuizCompleted(true);

                }
            };

            const handlePreviousQuestion = () => {

                // Move to the previous question
                setCurrentQuestionIndex(currentQuestionIndex - 1);
                setIsQuizCompleted(false);

            }


            const handleSubmit = async () => {


                const username = currentUser.username;
                const data = 
                            {
                                "correct_answers": score,
                                "current_complexity": questions[currentQuestionIndex -1].complexity    
                            }

                try {

                    await WarmUpApi.recordScore({ username, category }, data);

                } catch (errors) {

                    console.error("record score failed", errors);

                }
            }


            let score = 0
            if (isQuizCompleted) {
                
                score = Object.values(selectedAnswers).filter(answer => answer.score === 1).length;
                console.log(score)
                return (

                <div>
                    
                    <button onClick={handlePreviousQuestion}> Previous </button>

                    <button onClick={handleSubmit}> Submit </button>

                </div>

               
                );

            } else if (questions.length === 0) {

                return <div>Loading...</div>;

            } else {

                return (
                    
                    <div className="quiz">

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
                 
                    

                    {console.log("selectedAnswer", selectedAnswers)}


                    </div>
                );

            }
                
}

export default Quiz;

