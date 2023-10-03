import React, { useEffect, useContext, useState } from 'react';
import UserContext from '../common/UserContext';
import ScoreContext from '../common/ScoreContext';
import WarmUpApi from '../api/api';
import theme from "../theme";
import 'react-vis/dist/style.css'
import { Box, Typography } from "@mui/material";
import { motion } from 'framer-motion';
import "./ScoreCard.css"


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

            return (
                    
                    <Box  sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        flowDirection: "column"   
                        }}
                    > 
                        <Box sx={{ margin: "10px"}}>
                    <       Typography variant="h5" sx={{ color: 'blue' }}>
                                {currentUser.username}'s Total Score
                            </Typography>
                        </Box>
                        <Box sx={{ margin: "10px"}}>
                            <Typography variant="h5" sx={{ color: 'blue' }}>
                                {currentUser.username}'s Average Score
                            </Typography>
                        </Box>

                        <Box className="flip-card" onClick={handleFlip} 
                            sx={{
                                display: "flex",
                                justifyContent: "center",                                
                                border: "2px solid red",
                                cursor: "pointer",
                                width: "300px",
                                height: "300px",
                            }}
                        >
                            <motion.div
                            className='flip-card-inner'
                            height={100}
                            width={100}
                            initial={false}
                            animate={{rotateY: isFlipped ? 180 : 360}}
                            transition={{ duration: 0.6, animationDiection: "normal" }}
                            onAnimationComplete={ () => setIsAnimating(false) }
                            >
                                <Box className="flip-card-front" sx={{ width: "150px", height: "150px", background: "green"}}>
                                    <Typography> Plastic </Typography>

                                </Box>

                                <Box className="flip-card-back" sx={{ width: "150px", height: "150px", background: "yellow"}}>
                                    <Typography> Deforestation </Typography>

                                </Box>


                        </motion.div>
                        </Box>
                    </Box>

                    

            )

}

export default ScoreCard;