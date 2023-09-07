import React from 'react';
import Scoreboard from '../scoreboard/Scoreboard';


const QuizAnswer = ({ questionItems, selectedAnswers }) => {
    
  return (
    <div className="quiz-answer">
      {questionItems.map((item, index) => (
        <div key={index}>
          <h1>{item.question}</h1>
          <ul>

            {Object.keys(item)
            
              .filter((key) => key.startsWith('choice_'))
              .map((choiceKey) => {

                const choice = item[choiceKey];
                const isCorrect = choice.isCorrect || false;
                const selectedChoice = selectedAnswers[item.id]?.choice || ''; 
                const liStyle = {
                    backgroundColor: isCorrect && selectedChoice === choiceKey ? 'green' : selectedChoice === choiceKey ? 'red' : null,
                    border: isCorrect ? '2px solid green' : null
                };

                return (
                  <li key={choiceKey} style={liStyle}>
                    {choice.answer}
                  </li>
                );
                
              })}

          </ul>
        </div>
      ))}

      <Scoreboard />

    </div>
  );
};

export default QuizAnswer;
