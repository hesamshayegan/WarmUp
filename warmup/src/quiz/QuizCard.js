import React from 'react';

const QuizCard = ({ question, id }) => {

    return (
        <div className="card-container">
            <div className="card-wrapper">
                <div className="card-header">
                    <div className="card-title"> 

                    </div>
                    <div className="card-content"> 
                        <li> {question} </li>
                </div>
                </div>
                
            </div>
        </div>
    )
    
}

export default QuizCard;