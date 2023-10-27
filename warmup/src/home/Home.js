import React, { useState, useContext, useEffect } from "react";
import UserContext from "../common/UserContext";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import 
{ Button, Grid, Box, Typography, Dialog, 
DialogActions,DialogContent, DialogTitle, Paper
}
from "@mui/material";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Grow from '@mui/material/Grow';
import Fade from '@mui/material/Fade';
import theme from "../theme";

import bg1 from "../static/images/bg/bg1.jpg"
import bg2 from "../static/images/bg/bg2.jpg"
import bg3 from "../static/images/bg/bg3.avif"
import bg4 from "../static/images/bg/bg4.jpg"


const Bg1 = styled('div')({
    minHeight: '100vh',
    maxWidth: '100%',
    maxHeight: '100%',
    backgroundImage: `url(${bg1})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
});

const Bg4 = styled('div')({
    maxWidth: '100%',
    maxHeight: '100%',
    backgroundImage: `url(${bg4})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
});

const UnderGreen= styled('div')({
    textDecoration: 'underline',
    textDecorationColor: 'green',
    textDecorationThickness: '8px',
    display: 'inline' 
})

const UnderRed = styled('div')({
    textDecoration: 'underline',
    textDecorationColor: 'red',
    display: 'inline' 
})

const UnderBlue = styled('div')({
    textDecoration: 'underline',
    textDecorationColor: 'blue',
    display: 'inline' 
})

const topSectionStyle = {
    color: '#000000',
    fontWeight: '800',
    textAlign: 'center',
    m: 2
}

const BottomSectionStyle = {
    color: '#000000',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: '50px',
}

const StyledPaper = styled(Paper)`
  border-radius: 30px;
  border: 2mm inset rgba(0, 0, 0, .6);

  @media (max-width: 768px) {
    background-color: rgba(46, 93, 75, 1);
  }

    background-color: rgba(46, 93, 75, 0.95);
`;

const buttonStyle = {
    color: "white",
    borderRadius: "30px",
    border: "2px solid white",
    marginRight: "5px",
    backgroundColor: "#59c6dd",
};

const Home = () => {

    const { currentUser } = useContext(UserContext);
    const trigger = useScrollTrigger();
    const [scrolledOnce, setScrolledOnce] = useState(false);
    const [isSectionInView, setIsSectionInView] = useState(false);
    const { loginMessage, setLoginMessage } = useContext(UserContext);

    // console.debug("Homepage", "currentUser=", currentUser);
    // console.log(theme)

    // Only trigger once when it comes into view
    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    // Update the isSectionInView state when the section is in view
    useEffect(() => {
        if (inView) {
          setIsSectionInView(true);
          
        }
    }, [inView]);


    if (trigger && !scrolledOnce) {
        setScrolledOnce(true);
    }

    
    return (
        <Box className="homepage" >
            <Bg1>
                <Slide direction="up" 
                    in={true} 
                    mountOnEnter 
                    unmountOnExit
                    easing={{
                        enter: 'cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    timeout={{ enter: 1000, exit: 0 }}
                    >           
                        <Box className="home-msg"
                            style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'}}
                        >
                            
                            
                            <Typography variant="h3" sx={topSectionStyle}> Our <UnderGreen> planet</UnderGreen> is calling, let's listen. </Typography>
                            <Typography variant="h3" sx={topSectionStyle}> <UnderGreen>Together, we can make a difference. </UnderGreen> </Typography>
                            <Typography variant="h3" sx={topSectionStyle}> Act today, for a better tomorrow. </Typography>
                            
                            

                    
                        </Box>

                        
                </Slide>
                
                {loginMessage && (
                    <Box>
                        
                        <Dialog
                            onClose={() => setLoginMessage(false)}
                            open={true}                          
                            disableEscapeKeyDown={true}
                            sx={{ borderRadius: "15px"}} 
                            PaperComponent={StyledPaper}                                                  
                        >
                            <DialogTitle>
                                <Typography sx={{ color: "white",
                                                            marginTop: "10px",                                                            
                                                            [theme.breakpoints.down("md")]: {
                                                                width: "90%"}
                                                            }}
                                >
                                Hi {currentUser.username}👋!
                                </Typography>
                            </DialogTitle>
                            <DialogContent sx={{ width: "450px",
                                             [theme.breakpoints.down("md")]: {
                                                 width: "80%"}}}>
                                <Typography sx={{ color: "white",
                                                            marginTop: "10px",
                                                            textAlign: "center",
                                                            [theme.breakpoints.down("md")]: {
                                                                width: "90%"
                                                               }
                                                            }}
                                >
                                 Welcome to WarmUp!🌲🌎
                                </Typography>
                            </DialogContent>

                            <DialogActions>
                                <Box sx={{ marginBottom: "5px"}}>                        
                                    <Button onClick={ () => setLoginMessage(false)} sx={buttonStyle}>
                                        Close
                                    </Button>
                                </Box>
                            </DialogActions>

                        </Dialog>
                    </Box>
                )}
                
            </Bg1>



            <Grid
                container
                justifyContent="center"
                alignItems="center"
                style={{ backgroundColor: 'black' }}
                >
        
                            <Grid  item xs={12} md={4}>
                                
                            <Grow in={scrolledOnce}
                                  style={{ transformOrigin: 'right center'}}
                                  {...(scrolledOnce ? { timeout: 2000 } : {})}
                            >  

                                <Typography variant='h4' 
                                            style={{ 
                                                color: 'white',
                                                marginLeft: "20px",
                                            }}
                                >    
                                        Earth is <UnderRed> warming </UnderRed> at an unprecedented rate and human activity is the principal cause.
                                    
                                </Typography>

                            </Grow>                            
                                
                                

                            </Grid>

                            <Grid  item xs={12} md={8}>

                                <Fade in={scrolledOnce}
                                      style={{ transformOrigin: 'right center'}}
                                      {...(scrolledOnce ? { timeout: 2000 } : {})}
                                >
                                
                                    <img
                                        src={bg2}
                                        style={{ maxWidth: "100%" }}
                                    />
                                </Fade>

                                
                            </Grid>
            </Grid>
            
            
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        style={{ backgroundColor: '#F9E309',
                                minHeight: '200px'}}
                        >
                                    <Typography variant='h4'
                                                style={{
                                                fontWeight: '600',
                                                textAlign: 'center',
                                                margin: '70px'
                                                }}
                                    >    
                                            Every day, the equivalent of 2,000 garbage trucks full of plastic 
                                            are dumped into the world's <UnderBlue> oceans, rivers, and lakes. </UnderBlue>
                                            
                                            <Link to='https://www.unep.org/plastic-pollution#:~:text=Plastic%20pollution%20can%20alter%20habitats,capabilities%20and%20social%20well%2Dbeing.'
                                                style={{textDecoration: 'none'}}
                                            >
                                                <Typography variant='subtitle1'
            
                                                >
                                                    Source: UN environment program
                                                </Typography>
                                            </Link>
                                        
                                    </Typography>
                            
                    </Grid>


            
            <Box ref={ref}>
                    {isSectionInView ? (
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                            >
                                                        
                            <Grid item xs={12} md={6}>
                                <Grow
                                in={scrolledOnce}
                                mountOnEnter
                                style={{ transformOrigin: 'right center' }}
                                {...(scrolledOnce ? { timeout: 3000 } : {})}
                                >
                                <Typography variant='h3' 
                                    style={{ 
                                    color: 'black',
                                    marginLeft: "20px",
                                    textAlign: 'center',
                                    }}
                                >    
                                    The number of people displaced because of natural disasters has increased 
                                    from 17.2 million in 2018 to 30.7 million in 2020, posing significant
                                    challenges to their access to education.

                                    <Link to='https://www.unesco.org/en/right-education/climate-change-displacement'
                                    style={{ textDecoration: 'none' }}
                                    >
                                    <Typography variant='subtitle1'>
                                        Source: UNESCO
                                    </Typography>
                                    </Link>
                                </Typography>
                                </Grow>
                            </Grid>
        
                            <Grid item xs={12} md={6}>
                                <Slide direction="left" 
                                in={true} 
                                mountOnEnter 
                                unmountOnExit
                                easing={{
                                    enter: 'cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                                timeout={{ enter: 3000, exit: 0 }}
                                >    
                                <img
                                    src={bg3}
                                    style={{ maxWidth: "100%" }}
                                />
                                </Slide>
                            </Grid>

                        </Grid>
                    ) : null}
            </Box>

            <Box ref={ref}>
                {isSectionInView ? (
                    <Bg4>
                        <Grow
                            in={scrolledOnce}
                            mountOnEnter
                            style={{ transformOrigin: 'right center' }}
                            {...(scrolledOnce ? { timeout: 5000 } : {})}
                        >
                            <Box 
                                style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                marginBottom: '10px',
                                }}
                            >
                                            
                                <Typography variant='h3' sx ={BottomSectionStyle}> Climate change is a complex issue, </Typography>
                                <Typography variant='h3' sx ={BottomSectionStyle}> but knowledge is the key to tackling it. </Typography>
                                <Typography variant='h3' sx ={BottomSectionStyle}> How much do you know about it? </Typography>
                                <Typography variant='h3' sx ={BottomSectionStyle}> Take the WarmUp quiz to find out! </Typography>
                                    
                                <Button href="/categories" variant="text" size='large' 
                                        sx={{
                                            borderRadius: '30px',
                                            border: "3px solid #BFFFBF",
                                            color: "black",                                   
                                            fontSize: '28px',
                                            marginTop: '30px',
                                            marginBottom: '50px',
                                            [theme.breakpoints.down("md")]: {
                                                border: "3px solid #000000"
                                            }
                                        }}
                                > Start Now 
                                </Button>

                            </Box>
                        </Grow>
                    </Bg4>
                ) : null}
            </Box>

        </Box> 

    )


}

export default Home;