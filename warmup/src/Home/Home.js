import React, { useState, useContext } from "react";
import UserContext from "../common/UserContext";
import { Link } from "react-router-dom";
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import { Grid, Typography } from "@mui/material";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Grow from '@mui/material/Grow';
import Fade from '@mui/material/Fade';
import theme from "../theme";

import bg1 from "../static/images/bg1.jpg"
import bg2 from "../static/images/bg2.jpg"
import bg3 from "../static/images/bg3.avif"



const Bg1 = styled('div')({
    minHeight: '100vh',
    backgroundImage: `url(${bg1})`,
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

    console.debug("Homepage", "currentUser=", currentUser);
    console.log(theme)


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



            <Grid
                container
                justifyContent="center"
                alignItems="center"
                >
        
                            <Grid  item xs={12} md={6}>
                                
                            <Grow in={scrolledOnce}
                                  style={{ transformOrigin: 'right center'}}
                                  {...(scrolledOnce ? { timeout: 2000 } : {})}
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
                                          style={{textDecoration: 'none'}}
                                        >
                                            <Typography variant='subtitle1'

                                            >
                                                Source: UNESCO
                                            </Typography>
                                         </Link>


                                    
                                </Typography>

                            </Grow>                            
                                
                                

                            </Grid>

                            <Grid  item xs={12} md={6}>



                            <Fade in={scrolledOnce}
                                style={{ transformOrigin: 'right center'}}
                                {...(scrolledOnce ? { timeout: 2000 } : {})}
                            >

                                <img
                                    src={bg3}
                                    style={{ maxWidth: "100%" }}
                                />
                            </Fade>



                            </Grid>


            </Grid> 
                                    

  
        </div> 

    )


}

export default Home;


{/* <Bg2>
                <Box>

                    <p> 
                            In the heart of a bustling city, where towering skyscrapers scrape the sky, lies a hidden oasis of tranquility. A community garden, nestled among the concrete jungle, offers a sanctuary for weary souls. Vibrant blooms dance in the gentle breeze, their sweet fragrance filling the air, while butterflies flutter from flower to flower, adding a touch of whimsy to the scene.

                            As you stroll through the garden, you are greeted by the sight of lush greenery, meticulously cultivated by caring hands. Herbs and vegetables sprout from raised beds, their earthy aroma mingling with the delicate scent of roses. Fruit trees laden with ripe produce sway gently in the breeze, promising a bountiful harvest.

                            The garden is a testament to the power of community, a place where neighbors come together to nurture life and share knowledge. Children giggle as they dig in the dirt, their tiny hands exploring the wonders of nature. Elders offer sage advice, passing down their wisdom from generation to generation. And in the shared moments of laughter and camaraderie, a sense of belonging blooms, as strong and vibrant as the flowers that surround them.
                    </p>
                    
                </Box>
            </Bg2> */}
