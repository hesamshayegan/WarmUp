import React from "react";
import { Grid, Box, Typography,  } from "@mui/material";
import { styled } from '@mui/material/styles';
import theme from "../theme";
import bg12 from "../static/images/bg12.png";
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';

const UnderOrange= styled('div')({
    textDecoration: 'underline',
    textDecorationColor: '#ff9d4c',
    textDecorationThickness: '8px',
    display: 'inline' 
})

const UnderGreen= styled('div')({
    textDecoration: 'underline',
    textDecorationColor: '#93FF00',
    textDecorationThickness: '8px',
    display: 'inline' 
})

const UnderBlueGreen= styled('div')({
    textDecoration: 'underline',
    textDecorationColor: '#00ffca',
    textDecorationThickness: '8px',
    display: 'inline' 
})

const UnderPink= styled('div')({
    textDecoration: 'underline',
    textDecorationColor: '#ff3bff',
    textDecorationThickness: '8px',
    display: 'inline' 
})

function About () {

    return (
        <Grid container>
            <Grid  item xs={12} md={6} sx = {{ backgroundColor: "#35495c" }} >
                <Slide direction="left" 
                        in={true} 
                        mountOnEnter 
                        unmountOnExit
                        easing={{
                            enter: 'cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                        timeout={{ enter: 1500, exit: 0 }}
                > 
                    <Box sx={{ 
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",                      
                        alignItems: "center"
                    }}>
                        
                        <Typography variant="h2" sx={{ textAlign: 'center', marginTop: "30px", color: "white" }}> 
                            Why Climate Change is Important?
                        </Typography>
                        <Typography variant="h5" sx={{ textAlign: 'center', m: 3, color: "white" }}>
                            Climate change is a critical global issue with profound implications for the environment,
                            economy, and our general welfare. Addressing this challenge is essential to mitigate the 
                            effects of rising temperatures, extreme weather events, and sea-level rise. A deep understanding
                            of climate change, from its causes to potential solutions, is key to informed decision-making and
                            taking active steps to combat this existential threat.
                        </Typography>                 
                    </Box>
                </Slide>
            </Grid>
            <Grid  item xs={12} md={6}>
                <Fade in={true}
                    easing="linear"
                    timeout={2000}
                >
                    <Box sx={{ 
                        display: "flex",
                        justifyContent: "center",                        
                        alignItems: "center"
                    }}>
                            <img
                                src={bg12}
                                style={{ width: "70%", height: "70%" }}
                            />
                    </Box>
                </Fade>
            </Grid>

            <Grid  item md={12} 
                   sx={{ 
                    backgroundColor: "#F9E309",
                    minHeight: '180px',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                    }}
            >
                    <Typography variant="h2" sx={{ textAlign: 'center', m: 2}}> 
                        How WarmUp quiz works?
                    </Typography>
            </Grid>
            <Grid  item xs={12} md={6} 
                   sx={{ 
                    borderRight: 1,
                    borderBottom: 1,
                    [theme.breakpoints.down("md")]: {
                        borderRight: 0,
                        borderBottom: 0,
                    }}}
            >
                    <Typography variant="h2" sx={{ textAlign: 'center', m: 3 }}> 
                         1. <UnderOrange>WarmUp Themes</UnderOrange>
                    </Typography>
                    <Typography variant="h5" sx={{ textAlign: 'center', m: 2 }}>
                        The WarmUp quiz is a comprehensive educational tool designed to engage users in understanding
                        climate change through six key categories, which include: Plastic, Fossil Fuels, Deforestation
                        Agriculture, Transportation, and Food Production.
                    </Typography>
                    
            </Grid>
            <Grid  item xs={12} md={6} 
                   sx={{ 
                    borderBottom: 1,
                    [theme.breakpoints.down("md")]: {
                        borderBottom: 0,
                    }}}>
                    <Typography variant="h2" sx={{ textAlign: 'center', m: 3 }}> 
                        2. <UnderGreen>Green Award Badge</UnderGreen>
                    </Typography>
                    <Typography variant="h5" sx={{ textAlign: 'center', m: 2 }}>
                        When users score over 80% in a category, they earn the "Green Award" badge. 
                        This badge indicates their excellent grasp of the specific climate change topic. 
                        Having this badge allows them to use the "Feedback Feature," where they can share 
                        their thoughts, solutions, and opinions about that particular climate issue.
                    </Typography>
                    
            </Grid>
            <Grid  item xs={12} md={6} 
                   sx={{ 
                    borderRight: 1,
                    [theme.breakpoints.down("md")]: {
                        borderRight: 0,
                    }
                    }}>
                    <Typography variant="h2" sx={{ textAlign: 'center', m: 3}}> 
                        3. <UnderBlueGreen>Progress Tracking</UnderBlueGreen>
                    </Typography>
                    <Typography variant="h5" sx={{ textAlign: 'center', m: 2 }}>
                    In the "Progress" section, users can monitor their performance over time. This allows them 
                    to track their improvement and dedication to enhancing their knowledge of climate change. 
                    It serves as a personal motivator to continuously learn and grow in this crucial area.
                    </Typography>
                    
            </Grid>
            <Grid  item xs={12} md={6} >
                    <Typography variant="h2" sx={{ textAlign: 'center', m: 3}}> 
                        4. <UnderPink>Top Scores</UnderPink>
                    </Typography>
                    <Typography variant="h5" sx={{ textAlign: 'center', m: 2 }}>
                        The "Top Scores" section is a hub where all visitors can view the current rankings and highest scores
                        for each WarmUp category. Furthermore, users can find out about other users' opinions, solutions,
                        and insights about climate change. This feature fosters a sense of community and collaboration in the 
                        shared pursuit of tackling climate change.
                    </Typography>
                    
            </Grid>
        </Grid>


    )

}

export default About;