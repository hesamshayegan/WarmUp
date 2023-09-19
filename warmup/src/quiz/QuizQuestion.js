import React from 'react';
import { Box, Button, Grid, Typography, ListItem, List, Radio, FormControlLabel, FormControl, RadioGroup } from "@mui/material";

function QuizQuestion({ questionKey, selectedAnswer, onAnswerSelect }) {
  return (

    <Box sx={{ border: "2px solid green", maxWidth: "100%", margin: "15px"}}>    
      <Typography>{questionKey.question}</Typography>
      <Typography>{questionKey.category}</Typography>
      <Typography>{questionKey.complexity}</Typography>

      <FormControl >
        <RadioGroup sx={{ margin: "15px" }}>
            {Object.keys(questionKey)
              .filter((key) => key.startsWith('choice_'))
              .map((choiceKey) => {
                const choice = questionKey[choiceKey];
                return (
                    <FormControlLabel
                      control={<Radio />}
                      value={choice.answer}
                      checked={selectedAnswer === choiceKey}
                      onChange={() => onAnswerSelect(choiceKey)}
                      label={choice.answer}
                    />                
                );
              })}
        </RadioGroup>
      </FormControl>  

    </Box>
  );
}

export default QuizQuestion;


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