import React from 'react';
import { Box, Grid, Typography } from "@mui/material";
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import Ranks from './Ranks';

const UnderOrange = styled('div')({
    textDecoration: 'underline',
    textDecorationColor: '#fa6915',
    textDecorationThickness: '8px',
    display: 'inline' 
})

function TopScores() {


    return (

        <Grid container>

            <Grid   item md={4} 
                    sx={{ 
                        backgroundImage: "linear-gradient(90deg, rgba(12,225,255,1) 0%, rgba(0,230,107,1) 71%, rgba(188,255,12,1) 100%)",
                    }}
            >
                <Slide direction="right" 
                    in={true} 
                    mountOnEnter 
                    unmountOnExit
                    easing={{
                        enter: 'cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    timeout={{ enter: 1000, exit: 0 }}
                >
                    <Box>
                        <Typography variant="h3" 
                                    sx={{
                                        textAlign: "center",                                
                                        margin: "10px",
                                        marginTop: "20px",
                                        color: "white"
                                    }}
                        > 
                            <UnderOrange> WarmUp </UnderOrange> Top Players 
                        </Typography>
                        <Typography variant="h6" 
                                    sx={{
                                        textAlign: "center",                               
                                        margin: "10px",
                                        marginTop: "20px",
                                        color: "white"
                                    }}
                        > 
                        Discover Top Achievements: Explore remarkable accomplishments 
                        across categories from Plastic Reduction to Food Production!
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
                    </Box>
                </Slide>
            </Grid>

            <Grid item md={8} 
                  sx={{ 
                    backgroundColor: "#41548c",
                    height: "100vh"
                  }}
            >
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





