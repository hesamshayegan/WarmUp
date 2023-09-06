import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import UserContext from '../common/UserContext';
import WarmUpApi from '../api/api';
import QuizQuestion from './QuizQuestion';
import QuizAnswer from './QuizAnswer';

function Quiz() {
            const { currentUser } = useContext(UserContext);
            const { category } = useParams();

            const [questions, setQuestions] = useState([]);
            const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
            const [selectedAnswers, setSelectedAnswers] = useState({});
            const [isQuizCompleted, setIsQuizCompleted] = useState(false);
            const [isSubmitted, setIsSubmitted] = useState(false);
            const [showingAnswers, setShowingAnswers] = useState(false);


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

                if (!isSubmitted) {

                    setSelectedAnswers({
                        ...selectedAnswers, 
                        [currentQuestion.id]: 
                            {
                                "choice": choiceId,
                                "score": 0
                            }           
                    });

                }
                
                
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
                
                if (!isSubmitted) {

                    // Move to the next question
                    setCurrentQuestionIndex(currentQuestionIndex + 1);

                    // Check if all questions are seen (answered or not)
                    if (currentQuestionIndex === questions.length - 1) {
                        setIsQuizCompleted(true);
                    }
                }
                
                

                
            };

            const handlePreviousQuestion = () => {

                // Move to the previous question
                setCurrentQuestionIndex(currentQuestionIndex - 1);
                setIsQuizCompleted(false);

            }


            const handleSubmit = async () => {


                const username = currentUser.username;
                const dataRecord = 
                            {
                                "correct_answers": score,
                                "current_complexity": questions[currentQuestionIndex -1].complexity    
                            }
                
                try {

                    const record = await WarmUpApi.getRecord({ username, category });

                    if (record == undefined) {

                        await WarmUpApi.recordScore({ username, category }, dataRecord);
                        setIsSubmitted(true)
                        
                    } else {

                        const dataUpdate = 
                            {
                                "correct_answers": record.correct_answers + score,         
                            }

                        await WarmUpApi.updateScore({ username, category }, dataUpdate);
                        setIsSubmitted(true)
                        
                    } 

                } catch (errors) {

                    console.error("record score failed", errors);

                }
            }


            const showAnswers = () => {

                console.log(questions)
                console.log("selectedAnswers", selectedAnswers)

                setShowingAnswers(true);
                
            }


            let score = 0
            if (isQuizCompleted) {
                
                score = Object.values(selectedAnswers).filter(answer => answer.score === 1).length;
                console.log(score)
                return (

                    <div>

                        {isSubmitted

                            ? (

                            <>
                            {showingAnswers
                                ? (
                                    <div>
                                        <QuizAnswer
                                            questionItems={questions}
                                            selectedAnswers={
                                                selectedAnswers
                                                ?
                                                selectedAnswers
                                                :
                                                null
                                            }
                                        />
                                    </div>
                                ) : (

                                    <div>
                                        <p> You answered {score} of {questions.length} questions correctly. </p>
                                        <button onClick={showAnswers}>Show Answers</button>
                                    </div>
                                )
                            }
                                
                            </>
                            
                            ) : (

                            <>
                                <button onClick={handlePreviousQuestion}> Previous </button>

                                <button onClick={handleSubmit}> Submit </button>
                            </>
                        
                            )
                        }

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
                 
                
                    </div>
                );

            }
                
}

export default Quiz;

