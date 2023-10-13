import React, { useEffect, useContext } from 'react';
import UserContext from '../common/UserContext';
import WarmUpApi from '../api/api';
import ScoreContext from '../common/ScoreContext';
import { Box, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import './Scoreboard.css';
import Badges from "../score-progress/Badges.js"

import world from "../static/images/forms/world.jpg"

const UnderWhite = styled('div')({
  textDecoration: 'underline',
  textDecorationColor: 'white',
  display: 'inline' 
})


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
              <Box className="scoreboard" sx={{ background: `url(${world})`,
                                              border: "2px solid white",
                                              borderTopRightRadius: "30px",                                              
                                              borderBottomRightRadius: "30px",                                              
                                              padding: 0 }}>
                  
                  <Typography variant="h5" textTransform="uppercase" sx={{ display: "flex",
                                                 justifyContent: "center",
                                                 marginTop: "10px",
                                                 marginBottom: "10px",
                                                 textAlign: "center",                                                                                             
                                                 color: "#Ff5000",                                                                                                                                   
                                                 flexWrap: "wrap"}}
                  >
                     <UnderWhite> Your Current Scores </UnderWhite>
                   </Typography>
                   
                  {scores.map(s => (
                    <div key={s.id}>
                      
                      <Typography variant="h6" textTransform="uppercase" sx={{ textAlign: "center", color: "white", }}>
                         {s.category === 'fossil-fuels' ? 'fossil fuels'
                          :s.category === 'food-production' ? 'food production'
                          : s.category }
                         : {s.currentScore == 0 ? "0" 
                         : `${Math.round(100*s.currentScore)}%`}
                      </Typography>                      
                    </div>
                    
                  ))}
                  
                  
                  <Box>

                    <Typography variant="h5" textTransform="uppercase" 
                                sx={{textAlign: "center",
                                    color: "#00ff58",
                                    marginTop: "10px" }}>
                      <UnderWhite> Green Awards </UnderWhite>
                    </Typography>

                    <Badges />   

                </Box>

              </Box>

            );
}

export default Scoreboard;