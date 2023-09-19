import React, { useState }from 'react';
import { Box, Button, Grid, Typography, ListItem, List, Radio, FormControlLabel, FormControl, RadioGroup } from "@mui/material";
import { AnimatePresence, motion } from 'framer-motion';

// function QuizQuestion({ questionKey, selectedAnswer, onAnswerSelect }) {

  
//   return (

//     <Box sx={{ border: "2px solid green", maxWidth: "100%", margin: "15px"}}>
//       <Typography>{questionKey.question}</Typography>
//       <Typography>{questionKey.category}</Typography>
//       <Typography>{questionKey.complexity}</Typography>

//       <FormControl >
//         <RadioGroup sx={{ margin: "15px" }}>
//             {Object.keys(questionKey)
//               .filter((key) => key.startsWith('choice_'))
//               .map((choiceKey) => {
//                 const choice = questionKey[choiceKey];
//                 return (
//                     <FormControlLabel
//                       control={<Radio />}
//                       value={choice.answer}
//                       checked={selectedAnswer === choiceKey}
//                       onChange={() => onAnswerSelect(choiceKey)}
//                       label={choice.answer}
//                     />                
//                 );
//               })}
//         </RadioGroup>
//       </FormControl> 

//     </Box>
//   );
// }

// export default QuizQuestion;


{/* <li key={choiceKey}>                
                  <Radio
                    value={choice.answer}
                    checked={selectedAnswer === choiceKey}
                    onChange={() => onAnswerSelect(choiceKey)}
                  />
                  <Typography>
                      {choice.answer}
                  </Typography>
                
</li> */}

function QuizQuestion({ key, questionKey, selectedAnswer, onAnswerSelect }) {

  console.log("Q", (questionKey))

  
  return (

    <Box sx={{  maxWidth: "100%", 
               margin: "15px" }}>
      
      <motion.div
        key={key}
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 0}}
        transition={{ type: 'spring', velocity: 5, damping: 8 }}
        exit={{ opacity: 0, x: +50 }}
      >
        <Typography variant="h5" sx={{ color: "white"}} >{questionKey.question}</Typography>
      </motion.div>

      

      <Typography variant="subtitle1" sx={{ color: "white"}}>{questionKey.category}</Typography>
      <Box>
      <Typography variant="subtitle1" sx={{ color: "white", 
                                            borderRadius: "30px",
                                            border: "2px solid white",
                                            disply: "flex",
                                            justifyContent: "center"}} >
      {questionKey.complexity}</Typography>
      </Box>
      <FormControl >
        <RadioGroup sx={{ margin: "15px" }}>
        <AnimatePresence>
            {Object.keys(questionKey)
              .filter((key) => key.startsWith('choice_'))
              .map((choiceKey, i) => {
                const choice = questionKey[choiceKey];
                
                return (                  
                    <motion.li
                      key={choiceKey}
                      variants = {{
                        hidden: {
                          opacity: 0,
                          y: -50
                        },                        
                        visibile:{
                          opacity: 1,
                          y: 0,
                          transition: {
                            delay: i * 0.075 
                          }
                        }
                      }}
                      initial='hidden'
                      animate='visibile'
                      exit="hidden"
                      custom={i}
                      style={{ listStyleType: "none" }}                                      
                      >
                          <FormControlLabel                     
                            control={<Radio sx={{ color: "white"}} />}
                            value={choice.answer}
                            checked={selectedAnswer === choiceKey}
                            onChange={() => onAnswerSelect(choiceKey)}
                            label={choice.answer}
                            sx={{ color: "white"}}                            
                          />
                    </motion.li>
                              
                );
              })}
              </AnimatePresence>  
        </RadioGroup>
      </FormControl> 

    </Box>
  );
}

export default QuizQuestion;