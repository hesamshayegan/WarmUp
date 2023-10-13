import React from 'react';
import { Box, Typography, Radio, FormControlLabel, FormControl, RadioGroup } from "@mui/material";
import { AnimatePresence, motion } from 'framer-motion';

function QuizQuestion({ key, questionKey, selectedAnswer, onAnswerSelect }) {
  
  return (

    <Box sx={{  maxWidth: "100%", 
               margin: "15px" }}
    >
      
      <motion.div
        key={key}
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 0}}
        transition={{ type: 'spring', velocity: 5, damping: 8 }}
        exit={{ opacity: 0, x: +50 }}
      >
        <Typography variant="h5" sx={{ color: "white"}} >{questionKey.question}</Typography>
      </motion.div>

      
      <Box sx={{ display: "flex", margin: "5px" }}>
      <Typography variant="subtitle2" sx={{ color: "white", 
                                            borderRadius: "30px",
                                            border: "2px solid white",
                                            padding: "5px",
                                            background: 'radial-gradient(circle, rgba(0,0,0,1) 39%, rgba(255,255,255,1) 100%)'                                            
                                            }}
      > 
      {questionKey.category === "fossil-fuels" ? "fossil fuels"
      : questionKey.category === "food-production" ? "food production"
      : questionKey.category }
      </Typography>
      
      <Typography variant="subtitle2" sx={{
                                        color: "white",
                                        borderRadius: "30px",                                        
                                        border: "2px solid white",
                                        background: questionKey.complexity === 'medium' ? '#d3ea29' :
                                                    questionKey.complexity === 'hard' ? '#28fa1e' :
                                                    questionKey.complexity === 'easy' ? '#ea5629':
                                                          null,
                                        marginLeft: "5px",
                                        padding: "5px",
                                  }}
      >
        {questionKey.complexity} 
      </Typography>

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