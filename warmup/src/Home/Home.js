import React, { useState, useContext, useEffect } from "react";
import UserContext from "../common/UserContext";
import Button from "@mui/material/Button"
import Slide from '@mui/material/Slide';
import bg1 from "../static/images/home-background.jpg"
import bg2 from "../static/images/bg2.webp"

import { styled } from '@mui/material/styles';
import { Box, Typography } from "@mui/material";




const Bg1 = styled('div')({
    minHeight: '100vh',
    backgroundImage: `url(${bg1})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
});

const Underline = styled('div')({
    textDecoration: 'underline',
    textDecorationColor: 'green', 
})

const Bg2 = styled('div')({
    minHeight: '100vh',
    backgroundImage: `url(${bg2})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
});
  



const Home = () => {

    const { currentUser } = useContext(UserContext);


    console.debug("Homepage", "currentUser=", currentUser);
    
    return (
        <div className="homepage" >
            <Bg1>
            <Slide direction="up" 
                in={true} 
                easing={{
                        enter: "cubic-bezier(0.3, 0.5, 0.5, 0.3)",
                        exit: "linear"}}
                mountOnEnter 
                unmountOnExit
                > 
                        <div className="home-msg" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            fontSize: "22px",
                        }}>
                            
                               <h1> Our planet is calling, let's listen </h1>
                                <Underline>Together, we can make a difference. </Underline>
                                Act today, for a better tomorrow. 
                            
                        </div>
                
                </Slide>
            </Bg1>

            
            <Bg2>
                <Box>

                    <p> 
                            In the heart of a bustling city, where towering skyscrapers scrape the sky, lies a hidden oasis of tranquility. A community garden, nestled among the concrete jungle, offers a sanctuary for weary souls. Vibrant blooms dance in the gentle breeze, their sweet fragrance filling the air, while butterflies flutter from flower to flower, adding a touch of whimsy to the scene.

                            As you stroll through the garden, you are greeted by the sight of lush greenery, meticulously cultivated by caring hands. Herbs and vegetables sprout from raised beds, their earthy aroma mingling with the delicate scent of roses. Fruit trees laden with ripe produce sway gently in the breeze, promising a bountiful harvest.

                            The garden is a testament to the power of community, a place where neighbors come together to nurture life and share knowledge. Children giggle as they dig in the dirt, their tiny hands exploring the wonders of nature. Elders offer sage advice, passing down their wisdom from generation to generation. And in the shared moments of laughter and camaraderie, a sense of belonging blooms, as strong and vibrant as the flowers that surround them.
                    </p>
                    
                </Box>
            </Bg2>
            
        </div> 

    )


}

export default Home;
