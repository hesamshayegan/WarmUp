import React from 'react';

function QuizQuestion({ questionKey, selectedAnswer, onAnswerSelect }) {
  return (
    <div className="quiz-question">
      {console.log(questionKey)}
      <h2>{questionKey.question}</h2>
      <h3>{questionKey.category}</h3>
      <h3>{questionKey.complexity}</h3>
      {/* {console.log("questionKey-->",questionKey)} */}
      <ul>
        {/* {console.log(Object.keys(questionKey))} */}

        {Object.keys(questionKey)
          .filter((key) => key.startsWith('choice_'))
          .map((choiceKey) => {
            const choice = questionKey[choiceKey];
            // {console.log("-->",questionKey[choiceKey])}
            // {console.log(selectedAnswer)}
            return (
              <li key={choiceKey}>
                <label>
                  <input
                    type="radio"
                    value={choice.answer}
                    checked={selectedAnswer === choiceKey}
                    onChange={() => onAnswerSelect(choiceKey)}
                  />
                  {choice.answer}
                </label>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default QuizQuestion;
