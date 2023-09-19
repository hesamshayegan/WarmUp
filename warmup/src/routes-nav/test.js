import React, { useState, useContext } from "react";
import Box from '@mui/material/Box';
import bg2 from "../static/images/bg2.jpg"
import AnimCursor from "../common/AnimatedCursor";
import { motion, useDragControls } from "framer-motion";


function Test() {
    
    return (
      <>
         <div className="App">
            <motion.h1
                animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
               
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.2 }}
            >
                Animation made easy with Framer Motion
            </motion.h1>
        </div>
      </>
    ) 

    
    
} 

export default Test;

 // // Create a new div element.
        // const newDiv = document.createElement('div');
        
        // // Add the text "hello" to the div element.
        // newDiv.textContent = 'hello';

        // // Add the new div element to the page.
        // document.body.appendChild(newDiv);