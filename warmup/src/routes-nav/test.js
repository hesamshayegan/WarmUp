import React, { useState, useContext } from "react";
import Box from '@mui/material/Box';
import bg2 from "../static/images/bg2.jpg"
import AnimCursor from "../common/AnimatedCursor";



function Test() {

    const [hover, setHover] = useState(false);

    return (

        <>
        <AnimCursor />
            <Box            
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                sx={{
                    border: "10px solid rgb(255, 247, 0)",
                    width: "800px",
                    height: "800px",
                    filter: !hover && 'grayscale(100%)',
                    }}                
            >
            <img
                src={bg2}
                style={{ maxWidth: "100%" }}
            />
            </Box>
        </>


        
    )
} 

export default Test;