import React, { useState, useContext } from "react";
import Box from '@mui/material/Box';
import bg2 from "../static/images/bg2.jpg"
import AnimCursor from "../common/AnimatedCursor";
import { motion, useDragControls } from "framer-motion";


function Test() {

    const [loggedOnce, setLoggedOnce] = useState(false);
    
    const handleNextQuestion = () => {
        if (!loggedOnce) {
          console.log("works");
          setLoggedOnce(true);
        }
      };
    
    return (
      <>
        <div>
        <motion.div drag="x"
                    dragMomentum={false}
                    dragConstraints= {{
                        left: 0,
                        right: 50
                    }}
                    dragElastic={0.5}
                    onDrag={handleNextQuestion}                  

        >
            <div>
            <button >Next</button>
            
            </div>
        </motion.div>

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