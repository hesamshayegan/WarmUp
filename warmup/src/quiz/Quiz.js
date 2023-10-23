import React, { useState, useEffect, useContext, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import UserContext from '../common/UserContext';
import WarmUpApi from '../api/api';
import QuizQuestion from './QuizQuestion';
import QuizAnswer from './QuizAnswer';
import Scoreboard from '../scoreboard/Scoreboard';
import { styled } from '@mui/material/styles';
import { 
Box, Button, Grid, Typography,
Dialog, DialogActions, DialogContent,
DialogTitle, DialogContentText, Paper }
from "@mui/material";
import theme from "../theme";
import "./Quiz.css";
import LoadingSpinner from '../common/LoadingSpinner';

import plastic from "../static/images/forms/plastic-form.jpg";
import fossil from "../static/images/forms/fossil-form.jpg";
import deforestation from "../static/images/forms/deforestation-form.jpeg";
import agriculture from "../static/images/forms/agriculture-form.jpeg";
import transportation from "../static/images/forms/transportation-form.jpeg";
import food from "../static/images/forms/food-form.jpeg";
import climate from "./climate-video.mp4";




const StyledPaper = styled(Paper)`
  border-radius: 30px;
  border: 2mm inset rgba(0, 0, 0, .6);

  @media (max-width: 768px) {
    background-color: rgba(255, 255, 255, 1);
  }

    background-color: rgba(255, 255, 255, 0.5);
`;

const buttonStyle = {
    color: "white",
    borderRadius: "30px",
    border: "2px solid white",
    marginRight: "5px",
    backgroundColor: "#59c6dd",
};


function Quiz() {
            const { currentUser } = useContext(UserContext);
            const { category } = useParams();

            const [questions, setQuestions] = useState([]);
            const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
            const [selectedAnswers, setSelectedAnswers] = useState({});
            const [isQuizCompleted, setIsQuizCompleted] = useState(false);
            const [isSubmitted, setIsSubmitted] = useState(false);
            const [showingAnswers, setShowingAnswers] = useState(false);
            const [isOpen, setIsOpen] = useState(true);
            const [dialogOpen, setDialogOpen] = useState(false);
            const [scroll, setScroll] = useState('paper');


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


            const showAnswers = (scrollType) => () => {

                console.log(questions)
                console.log("selectedAnswers", selectedAnswers)

                setShowingAnswers(true);
                setDialogOpen(true);
                setScroll(scrollType);

            }
           
            const handleCloseAnswers = () => {
                setDialogOpen(false);
            };

            
            const descriptionElementRef = useRef(null);

            useEffect(() => {
                if (dialogOpen) {
                const { current: descriptionElement } = descriptionElementRef;
                if (descriptionElement !== null) {
                    descriptionElement.focus();
                }
                }
            }, [dialogOpen]);


            let score = 0
            if (isQuizCompleted) {
                
                score = Object.values(selectedAnswers).filter(answer => answer.score === 1).length;
                console.log(score)

                return (
        
                    <Grid className="container-quiz" container sx={{height: "100%" }}>

                        <video className="video" autoPlay muted loop>
                            <source src={climate} type='video/mp4' />
                        </video>

                        <Grid item xs={12} md={2} >
                            <Scoreboard />
                        </Grid>

                        <Grid item xs={12} md={10}>
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px"}}>
                        {isSubmitted

                            ? (

                            <>

                                <Box sx={{
                                    width: "40%",
                                    height: "150px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    border: "2px solid white",
                                    borderRadius: "30px",
                                    marginTop: "30px",
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    [theme.breakpoints.down("md")]: {
                                        width: "60%",
                                    }
                                }}>

                                    <Typography variant="h6" sx={{ color: "white",
                                                                marginTop: "10px",
                                                                [theme.breakpoints.down("md")]: {
                                                                    width: "90%",
                                                                }
                                    }}>
                                        You got {score} of {questions.length} questions correctly.
                                    </Typography>
                                    <Box sx={{ marginBottom: "5px" }}>
                                        <Box component={Link} to="/categories" >
                                            <Button  sx={buttonStyle}>
                                                Continue
                                            </Button>
                                        </Box>
                                            <Button onClick={showAnswers('paper')} 
                                                    sx={buttonStyle}>
                                                Show Answers
                                            </Button>
                                    </Box>
                                        
                                    
                                </Box>

                                <Dialog
                                    open={dialogOpen}
                                    onClose={handleCloseAnswers}
                                    scroll={scroll}                                    
                                >
                                    <div class="scrollbar-answers">
                                        <DialogTitle sx={{backgroundColor: "#59c6dd"}}>
                                            <Typography variant="h5" color="white"> Check out the correct answers </Typography>
                                        </DialogTitle>
                                            <DialogContent dividers={scroll === 'paper'}
                                                            sx={{ backgroundColor: '#dcf4fa' }}>
                                                <DialogContentText                                                        
                                                        ref={descriptionElementRef}
                                                        tabIndex={-1}    
                                                >
                                                    <Box   >
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
                                                    </Box>
                                                    
                                                </DialogContentText>
                                            </DialogContent>

                                            <DialogActions sx= {{ backgroundColor: "#f0f4f5"}}>
                                                <Button onClick={handleCloseAnswers} sx={buttonStyle}> Close </Button>          
                                            </DialogActions>
                                    </div>
                                </Dialog>
                                     
                            </>
                            
                            ) : (

                                <Box>

                                    <Dialog
                                        onClose={handlePreviousQuestion}
                                        open={true}
                                        disableEscapeKeyDown={true}
                                        PaperComponent={StyledPaper}
                                    >
                                    
                                        <DialogContent>
                                            <Typography variant="h6" sx={{ color: "black",
                                                                           marginTop: "10px",
                                                                           [theme.breakpoints.down("md")]: {
                                                                            width: "90%"}
                                                                        }}
                                            >
                                            Do you want to submit your answers?
                                            </Typography>
                                        </DialogContent>
                                        
                                        <DialogActions>
                                            <Box sx={{ marginBottom: "5px"}}>
                                            <Button onClick={handlePreviousQuestion} sx={buttonStyle}>
                                                Go Back  
                                            </Button>
                                        
                                            <Button onClick={handleSubmit} sx={buttonStyle}>
                                                Submit
                                            </Button>
                                            </Box>
                                        </DialogActions>
                                    </Dialog>
                                  </Box>

                            )
                            
                        }
                            </Box>
                        </Grid>                       
                        
                    </Grid>

               
                );

            } else if (questions.length === 0) {

                return (
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                      }}>
                
                        <LoadingSpinner />

                    </Box>
                )

            } else {

                return (
                             

                    <Grid className="container-quiz" container sx={{height: "100%" }} >
                        
                        <video className="video" autoPlay muted loop>
                            <source src={climate} type='video/mp4' />
                        </video>

                        <Grid item xs={12} md={2} >
                            <Scoreboard />
                        </Grid>
                        
                        <Grid item xs={12} md={10}>
                            <Box sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    height: "100%",
                                    }}
                            >
                                <Box sx={{                                            
                                           width: "75%",
                                           height: "400px",                                           
                                           marginTop: "75px",
                                           border: "2px solid white",                                           
                                           background: 
                                           currentQuestion.category === 'plastic' ? `url(${plastic})`
                                           : currentQuestion.category === 'fossil-fuels' ? `url(${fossil})`
                                           : currentQuestion.category === 'deforestation' ? `url(${deforestation})`
                                           : currentQuestion.category === 'agriculture' ? `url(${agriculture})`
                                           : currentQuestion.category === 'transportation' ? `url(${transportation})`
                                           : currentQuestion.category === 'food-production' ? `url(${food})`
                                           : null,                                                               
                                           backgroundSize: "cover",
                                           boxShadow: "30px 30px 30px rgba(0, 0, 0, 0.5)",
                                           borderRadius: "30px",
                                           [theme.breakpoints.down("md")]: {
                                            height: "100%"                                            
                                        }
                                        }}                                           
                                >
                                    
                                    
                                    <Box>
                                        <QuizQuestion
                                            key={currentQuestion.id}                                            
                                            questionKey={currentQuestion}
                                            questionIndex={currentQuestionIndex}
                                            selectedAnswer={
                                                selectedAnswers && selectedAnswers[currentQuestion.id]
                                                ?
                                                selectedAnswers[currentQuestion.id].choice
                                                :
                                                null
                                            }
                                            onAnswerSelect={handleAnswerSelect}                                        
                                        />
                                        {console.log(currentQuestionIndex)}
                                    </Box>
                                </Box>
                                <Box sx={{ className: "button-box",
                                               display: "flex",
                                               justifyContent: "center",                                               
                                               margin: "10px",
                                               justifyContent: "center",
                                               margin: "5px",
                                               width: "100%",
                                            }}
                                    >
                                    {currentQuestionIndex > 0
                                        ?
                                        <Button sx={ buttonStyle }
                                            onClick={handlePreviousQuestion}> Previous </Button>
                                        :
                                        null
                                    }
                                        <Button sx={buttonStyle}
                                            onClick={handleNextQuestion}> Next </Button>
                                </Box>
                            </Box>

                        </Grid>
                                            
                    </Grid>

                );

            }
                
}

export default Quiz;

