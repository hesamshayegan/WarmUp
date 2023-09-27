import React from 'react';
import Scoreboard from '../scoreboard/Scoreboard';
import { List, ListItem, Box, Typography, Icon } from "@mui/material";



const QuizAnswer = ({ questionItems, selectedAnswers }) => {
    
  return (
    <div className="quiz-answer">
        
        {questionItems.map((item, index) => (
        <Box key={index}>
          <Typography variant="h6" color="black">{item.question}</Typography>
          <List>

            {Object.keys(item)
            
              .filter((key) => key.startsWith('choice_'))
              .map((choiceKey) => {

                const choice = item[choiceKey];
                const isCorrect = choice.isCorrect || false;
                const selectedChoice = selectedAnswers[item.id]?.choice || ''; 
                const liStyle = {
                    backgroundColor: isCorrect && selectedChoice === choiceKey ? 'rgba(0, 255, 0, 0.3)' : selectedChoice === choiceKey ? 'rgba(255, 0, 0, 0.3)' : null,
                    border: isCorrect ? '2px solid green' : null
                };

                return (
                  <ListItem key={choiceKey} 
                            sx={{...liStyle}}>
                    <Typography variant="h7"> {choice.answer} </Typography>
                  </ListItem>
                );
                
              })}

          </List>
        </Box>
      ))}

      

    </div>
  );
};

export default QuizAnswer;
