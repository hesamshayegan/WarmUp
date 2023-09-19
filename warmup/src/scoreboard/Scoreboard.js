import React, { useEffect, useContext } from 'react';
import UserContext from '../common/UserContext';
import WarmUpApi from '../api/api';
import ScoreContext from '../common/ScoreContext';
import { Box, Grid, Typography } from "@mui/material";
import './Scoreboard.css';




function Scoreboard() {

            const { currentUser } = useContext(UserContext);
            const { scores, setScores } = useContext(ScoreContext);

            
            useEffect(() => {
                async function fetchCurrentSores() {
                    try {

                        const username = currentUser.username;
                        const fetchedCurrentScores = await WarmUpApi.getCurrentScores(username);
                        setScores(fetchedCurrentScores);

                    } catch (error) {

                        console.error("Error fetching current scores:", error);

                    }
                }
                
                fetchCurrentSores();
                
            }, []);



            return (
                <Box sx={{ margin: "10px", border: "2px solid green", backgroundColor: "green" }}>
                  <Typography variant="h5" sx={{ display: "flex",
                                                 justifyContent: "center",
                                                 marginTop: "25px",
                                                 textAlign: "center" }}
                  >
                     Your Current Scores
                   </Typography> <hr/>
                  {scores.map(s => (
                    <div key={s.id}>
                      <Typography variant="h6" sx={{ textAlign: "center" }}> {s.category} : {s.currentScore == 0 ? "--" : `${Math.round(100*s.currentScore)}%`} </Typography>
                    </div>
                  ))}
                </Box>
              );
              

}

export default Scoreboard;