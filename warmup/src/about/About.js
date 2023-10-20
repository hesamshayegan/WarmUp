import React from "react";
import { 
Grid, Box, Typography, Slide,
Fade, Link
}

from "@mui/material";
import { styled } from '@mui/material/styles';
import theme from "../theme";
import bg12 from "../static/images/bg/bg12.png";

import PlayArrowIcon from '@mui/icons-material/PlayArrow';

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

const UnderPurple= styled('div')({
    textDecoration: 'underline',
    textDecorationColor: '#ff3bff',
    textDecorationThickness: '8px',
    display: 'inline' 
})

const BackOrange= styled('div')({
    backgroundColor: '#ffdfbd',
    display: 'inline'
})

const BackGreen= styled('div')({
    backgroundColor: '#d7ffbd',
    display: 'inline'
})

const BackBlueGreen= styled('div')({
    backgroundColor: '#c8ffef',
    display: 'inline'
})

const BackPurple= styled('div')({
    backgroundColor: '#ffc8fa',
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
                    <Typography variant="h5" sx={{ m: 2 }}>
                        The WarmUp quiz is a comprehensive educational tool designed to engage users in understanding
                        climate change through <BackOrange>six key categorie</BackOrange>, which include: Plastic, Fossil Fuels, Deforestation,
                        Agriculture, Transportation, and Food Production. Each category includes <BackOrange>15 questions</BackOrange> with a range
                        of complexity from easy to hard.
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
                    <Typography variant="h5" sx={{ m: 2 }}>
                        When users <BackGreen>score over 80%</BackGreen> in a category, they earn the "Green Award" badge. 
                        This badge indicates their excellent grasp of the specific climate change topic. 
                        Having this badge allows them to use the <BackGreen>"Feedback Feature"</BackGreen>, where they can share 
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
                    <Typography variant="h5" sx={{ m: 2 }}>
                    In the "Progress" section, users can monitor their <BackBlueGreen>performance over time</BackBlueGreen>. This allows them 
                    to track their improvement and dedication to enhancing their knowledge of climate change. 
                    It serves as a personal motivator to continuously learn and grow in this crucial area.
                    </Typography>
                    
            </Grid>
            <Grid  item xs={12} md={6}>
                    <Typography variant="h2" sx={{ textAlign: 'center', m: 3}}> 
                        4. <UnderPurple>Top Scores</UnderPurple>
                    </Typography>
                    <Typography variant="h5" sx={{ m: 2 }}>
                        The "Top Scores" section is a hub where all visitors can view the current rankings and highest scores
                        for each WarmUp category. Furthermore, users can find out about other 
                        users' <BackPurple>opinions</BackPurple>, <BackPurple>solutions</BackPurple>, and <BackPurple>insights</BackPurple> about 
                        climate change. This feature fosters a sense of community and collaboration in the shared pursuit of tackling climate change.
                    </Typography>
                    
            </Grid>
            <Grid item md={12} sx={{ backgroundColor: "#96FA68" }}>
                <Box sx={{ m: 1 }}>
                    <Typography variant="h5" sx={{ m: 3 }}>
                    Below is a selection of resources that have been utilized in the creation of quiz themes:
                    </Typography>
                    <Box
                    sx={{
                        marginLeft: "30px",
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    >
                        <Box style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <PlayArrowIcon />
                            <Link href="https://www.edf.org" sx={{ m: 1, textDecoration: 'none' }}>
                            <Typography variant="h6" sx={{ color: "#30660d" }}>Environmental Defense Fund</Typography>
                            </Link>
                        </Box>
                        <Box style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <PlayArrowIcon />
                            <Link href="https://gfi.org" sx={{ m: 1, textDecoration: 'none' }}>
                            <Typography variant="h6" sx={{ color: "#30660d" }}>Good Food Institute</Typography>
                            </Link>
                        </Box>
                        <Box style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <PlayArrowIcon />
                            <Link href="https://www.iea.org" sx={{ m: 1, textDecoration: 'none' }}>
                            <Typography variant="h6" sx={{ color: "#30660d" }}>International Energy Agency</Typography>
                            </Link>
                        </Box>
                        <Box style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <PlayArrowIcon />
                            <Link href="https://climate.mit.edu" sx={{ m: 1, textDecoration: 'none' }}>
                            <Typography variant="h6" sx={{ color: "#30660d" }}>MIT Climate Portal</Typography>
                            </Link>
                        </Box>
                        <Box style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <PlayArrowIcon />
                            <Link href="https://www.oecd.org" sx={{ m: 1, textDecoration: 'none' }}>
                            <Typography variant="h6" sx={{ color: "#30660d" }}>Organisation for Economic Co-operation and Development</Typography>
                            </Link>
                        </Box>
                        <Box style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <PlayArrowIcon />
                            <Link href="https://www.soils.org" sx={{ m: 1, textDecoration: 'none' }}>
                            <Typography variant="h6" sx={{ color: "#30660d" }}>Soil Science Society for America</Typography>
                            </Link>
                        </Box>
                        <Box style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <PlayArrowIcon />
                            <Link href="https://sustainablefisheries-uw.org" sx={{ m: 1, textDecoration: 'none' }}>
                            <Typography variant="h6" sx={{ color: "#30660d" }}>Sustainable Fisheries UW - University of Washington</Typography>
                            </Link>
                        </Box>
                        <Box style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <PlayArrowIcon />
                            <Link href="https://www.energy.gov" sx={{ m: 1, textDecoration: 'none' }}>
                            <Typography variant="h6" sx={{ color: "#30660d" }}>U.S. Department of Energy (DOE)</Typography>
                            </Link>
                        </Box>
                        <Box style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <PlayArrowIcon />
                            <Link href="https://stories.undp.org" sx={{ m: 1, textDecoration: 'none' }}>
                            <Typography variant="h6" sx={{ color: "#30660d" }}>United Nations Development Programme</Typography>
                            </Link>
                        </Box>
                        <Box style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <PlayArrowIcon />
                            <Link href="https://www.epa.gov" sx={{ m: 1, textDecoration: 'none' }}>
                            <Typography variant="h6" sx={{ color: "#30660d" }}>United States Environmental Protection Agency</Typography>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>


    )

}

export default About;