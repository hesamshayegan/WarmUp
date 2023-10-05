import React, { useState, useEffect, useContext, useRef } from 'react';
import { Box, Button, Grid, Typography, 
    Dialog, DialogActions, DialogContent, 
    DialogTitle, DialogContentText, Paper }
from "@mui/material";
import Ranks from './Ranks';



function TopScores() {


    return (

        <Grid container>

            <Grid   item md={4} 
                    sx={{ backgroundImage: "linear-gradient(90deg, rgba(12,225,255,1) 0%, rgba(0,230,107,1) 71%, rgba(188,255,12,1) 100%)",
                          height: "100vh"}}>
                <Typography variant="h3" 
                              sx={{
                                textAlign: "center",                                
                                margin: "10px",
                                marginTop: "20px",
                                color: "white"
                              }}
                > 
                WarmUp Top Players
                </Typography>
                <Typography variant="h6" 
                              sx={{
                                textAlign: "center",                               
                                margin: "10px",
                                marginTop: "20px",
                                color: "white"
                              }}
                > 
                Discover Top Achievements: Explore remarkable accomplishments across categories from Plastic Reduction to Food Production!
                </Typography>
                <Typography variant="h6" 
                              sx={{
                                textAlign: "center",                               
                                margin: "10px",
                                marginTop: "20px",
                                color: "white"
                              }}
                > 
                Join us in celebrating those who are making an impact on climate change
                </Typography>
            </Grid>

            <Grid item md={8} sx={{ backgroundColor: "#41548c" }}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "30px",
                    
                    }}
                >
                    <Ranks /> 
                </Box>
            </Grid>
        </Grid>
    )
}

export default TopScores;





