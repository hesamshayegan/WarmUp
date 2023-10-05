import React, { useContext } from 'react';
import UserContext from '../common/UserContext';
import ScoreRadar from './ScoreRadar';

import 'react-vis/dist/style.css'
import { Grid, Box, Typography } from "@mui/material";
import ScoreBars from './ScoreBars';
import ScoreCard from './ScoreCard';
import Badges from './Badges'

import scoreBg1 from "../static/images/progress/score-bg1.jpg"


function ScoreProgress() {

        const { currentUser } = useContext(UserContext);
        
        return (
           
          <Grid className="container-quiz"
                container 
                sx={{
                  backgroundImage: `url(${scoreBg1})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  height: "100%"}}
          >

            <Grid item md={12} >
                <Box sx={{ margin: "10px"}}>
                  <Typography variant="h5" sx={{ fontWeight: "600", marginLeft: "10px"}}>
                    {currentUser.username}'s Score Tracker 
                  </Typography>                    
                </Box>
                
            </Grid>

            <Grid container>
              <Grid item md={6}>
                
                <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",             
                        height: '100%',
                      }}>                 
                  <ScoreCard />
                  
                  <Typography variant="h4" 
                              sx={{
                                textAlign: "center",
                                textTransform: "uppercase",
                                margin: "10px",
                                marginTop: "20px"
                              }}
                  > 
                    Green Awards
                  </Typography>
                  <Box sx={{
                        border: "3px solid #8ec809",
                        borderRadius: "30px"
                      }}>
                  <Badges />
                  </Box>

                  

                </Box>
                
                
              </Grid>
              <Grid item md={6} >
                  <Box  sx={{
                        display: "flex",
                        justifyContent: "center",                      
                        height: '100%',                      
                      }}
                  >
                      <ScoreRadar />
                  </Box>
                  
              </Grid>
            </Grid>

            

            <Grid item md={12} >
             <Box  sx={{
                      display: "flex",
                      justifyContent: "center",                      
                      height: '100%',
                    }}
              >
                
                  <ScoreBars />

              </Box>
            </Grid>

        </Grid>
        )
}

export default ScoreProgress;