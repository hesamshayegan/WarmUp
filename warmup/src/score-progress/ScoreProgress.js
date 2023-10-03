import React, { useEffect, useContext, useState } from 'react';
import UserContext from '../common/UserContext';
import ScoreContext from '../common/ScoreContext';
import WarmUpApi from '../api/api';
import ScoreRadar from './ScoreRadar';

import 'react-vis/dist/style.css'
import { Grid, Box, Typography } from "@mui/material";
import ScoreBars from './ScoreBars';
import ScoreCard from './ScoreCard';

const DOMAIN = [
  {name: 'plastic', domain: [0, 100]},
  {name: 'fossilFuels', domain: [0, 100]},
  {name: 'deforestation', domain: [0, 100]},
  {name: 'agriculture', domain: [0, 100]},
  {name: 'transportation', domain: [0, 100]},
  {name: 'foodProduction', domain: [0, 100]}
];


function ScoreProgress() {

        const { currentUser } = useContext(UserContext);
        const { scoreLog, setScoreLog } = useContext(ScoreContext);
                
      
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

        
        return (
           
          <Grid className="container-quiz" container sx={{height: "100%",border: "2px solid red" }}>

            <Grid item md={12} sx={{ border: "2px solid black"}}>
                <Box sx={{ margin: "10px"}}>
                  <Typography variant="h5" sx={{ color: 'blue' }}>
                    {currentUser.username}'s Score Tracker </Typography>
                </Box>
            </Grid>

            <Grid item md={6} sx={{ border: "2px solid green"}}>
              
              <Box> 
                <ScoreCard />
              </Box>

                {/* <Box sx={{ margin: "10px"}}>
                  <Typography variant="h5" sx={{ color: 'blue' }}>
                    {currentUser.username}'s Total Score </Typography>
                </Box>
                <Box sx={{ margin: "10px"}}>
                  <Typography variant="h5" sx={{ color: 'blue' }}>
                    {currentUser.username}'s Average Score </Typography>
                </Box> */}
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