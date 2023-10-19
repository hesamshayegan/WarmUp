import React, { useState, useContext, useEffect } from "react";
import UserContext from "../common/UserContext";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import { Button, Grid, Typography } from "@mui/material";
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


const Home = () => {

    const { currentUser } = useContext(UserContext);
    const trigger = useScrollTrigger();
    const [scrolledOnce, setScrolledOnce] = useState(false);
    const [isSectionInView, setIsSectionInView] = useState(false);

    console.debug("Homepage", "currentUser=", currentUser);
    console.log(theme)

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
        <div className="homepage" >
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
                        <div className="home-msg"
                            style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'}}
                        >
                            
                            <Typography variant='h3' 
                                        style={{
                                        color: '#000000',
                                        fontWeight: '800',
                                        textAlign: 'center',
                                        }}
                            >   
                                <p> Our <UnderGreen> planet</UnderGreen> is calling, let's listen. </p>
                                <p> <UnderGreen>Together, we can make a difference. </UnderGreen> </p>
                                <p> Act today, for a better tomorrow. </p>
                            </Typography>
                            

                    
                        </div>

                        
                </Slide>
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


            
            <div ref={ref}>
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
            </div>

            <div ref={ref}>
                {isSectionInView ? (
                    <Bg4>
                        <Grow
                            in={scrolledOnce}
                            mountOnEnter
                            style={{ transformOrigin: 'right center' }}
                            {...(scrolledOnce ? { timeout: 5000 } : {})}
                        >
                            <div 
                                style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                marginBottom: '10px',
                                }}
                            >
                                            
                                    <Typography variant='h3' 
                                                style={{
                                                color: '#000000',
                                                fontWeight: '500',
                                                textAlign: 'center',
                                                marginTop: '30px',
                                                }}
                                    >   
                                        <p> Climate change is a complex issue,</p>
                                        <p>  but knowledge is the key to tackling it. </p>
                                        <p> How much do you know about it? </p>
                                        <p> Take the WarmUp quiz to find out! </p>
                                    </Typography>
                                    
                                    <Button href="/categories" variant="text" size='large' 
                                            sx={{
                                                borderRadius: '30px',
                                                border: "3px solid #BFFFBF",
                                                color: "black",                                   
                                                fontSize: '28px',
                                                marginBottom: '50px',
                                                [theme.breakpoints.down("md")]: {
                                                    border: "3px solid #000000"
                                                }
                                            }}
                                    > Start Now 
                                    </Button>

                            </div>
                        </Grow>
                    </Bg4>
                ) : null}
            </div>

        </div> 

    )


}

export default Home;