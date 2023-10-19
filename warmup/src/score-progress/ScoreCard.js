import React, { useEffect, useContext, useState } from 'react';
import UserContext from '../common/UserContext';
import ScoreContext from '../common/ScoreContext';
import WarmUpApi from '../api/api';
import 'react-vis/dist/style.css'
import { Box, Typography } from "@mui/material";
import { motion } from 'framer-motion';
import "./ScoreCard.css"

import leaf from "../static/images/progress/recycle-symbol.png"


const leafStyle = {
    display: "flex",
    justifyContent: "center",                                
    alignItems: "center",
    flexDirection: "column",
    flexWrap: 'wrap',
    width: "250px",
    height: "250px",
    backgroundImage: `url(${leaf})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: "30px", 
}


function ScoreCard() {
        const { currentUser } = useContext(UserContext);
        const { scoreLog, setScoreLog } = useContext(ScoreContext);
        const [isFlipped, setIsFlipped] = useState(false);
        const [isAnimating, setIsAnimating] = useState(false);
                
      
        useEffect(() => {
            async function fetchScoreHistory() {
                try {

                  const username = currentUser.username;
                  const fetchedScoreHistory = await WarmUpApi.getScoreHistory({ username });
                  setScoreLog(fetchedScoreHistory);

                } catch (error) {

                  console.error("Error fetching current scores:", error);

                }
            }
            
            fetchScoreHistory();
            
          }, []);

          
          function handleFlip () {
            if(!isAnimating) {
                setIsFlipped(!isFlipped)
                setIsAnimating(true)
            }
          }

          const totQuiz = scoreLog.length
          const totAverageScore = Math.round((scoreLog.reduce((sum, item) => sum + item.score, 0) / totQuiz) * 100)

          
            return (
                
                <Box sx={{
                    backgroundImage: "radial-gradient(circle, rgba(255,213,0,1) 11%, rgba(241,0,0,1) 61%, rgba(35,255,0,1) 100%)",                    
                    borderRadius: "30px",
                    boxShadow: "10px -5px 30px black",
                    width: '250px',
                    height: '250px',                    
                    
                    }}>
                <Box className="flip-card" onClick={handleFlip} 
                    sx={{                        
                        
                        cursor: "pointer",
                                                                                                                                
                    }}
                >                
                    <motion.div
                        className='flip-card-inner'                        
                        initial={false}
                        animate={{rotateY: isFlipped ? 180 : 360}}
                        transition={{ duration: 0.6, animationDiection: "normal" }}
                        onAnimationComplete={ () => setIsAnimating(false) }                                                                                             
                    >
                        
                        <Box    className="flip-card-front"
                                sx={leafStyle}
                        >                            
                            <Typography variant="h6" sx={{ color: "white", marginLeft: "-20px", marginTop: "30px" }}> Quizzes  </Typography>
                            <Typography variant="h6" sx={{ color: "white", marginLeft: "-20px" }}> Completed </Typography>
                            <Typography variant="h3" sx={{ color: "white", marginLeft: "-20px"}}> N. {totQuiz} </Typography>
                            

                        </Box>
                        

                        <Box    className="flip-card-back"
                                sx={leafStyle}
                        >
                            <Typography variant="h6" sx={{ color: "white", marginLeft: "-20px", marginTop: "30px" }}>
                                 Total   
                            </Typography>
                            <Typography variant="h6" sx={{ color: "white", marginLeft: "-20px" }}>  Average Score </Typography>
                            <Typography variant="h3" sx={{ color: "white", marginLeft: "-20px" }}>
                                {totAverageScore ? totAverageScore : '0'}% 
                            </Typography>

                        </Box>


                    </motion.div>
                </Box>
                </Box>
                        
                    

                    

            )

}

export default ScoreCard;