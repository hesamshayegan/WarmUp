import React, { useEffect, useContext } from 'react';
import UserContext from '../common/UserContext';
import WarmUpApi from '../api/api';
import ScoreContext from '../common/ScoreContext';
import './Scoreboard.css';




function Scoreboard() {

            const { currentUser } = useContext(UserContext);
            const { scores, setScores } = useContext(ScoreContext);

            
            useEffect(() => {
                async function fetchCurrentSores() {
                    try {

                        const username = currentUser.username;
                        const fetchedCurrentScores = await WarmUpApi.getCurrentScores(username);
                        setScores(fetchedCurrentScores);

                    } catch (error) {

                        console.error("Error fetching current scores:", error);

                    }
                }
                
                fetchCurrentSores();
                
            }, []);



            return (
                <div className="scores-container">
                  <h1> Your Current Scores </h1>
                  {scores.map(s => (
                    <div key={s.id}>
                      <p> {s.category} : {s.currentScore == 0 ? "--" : `${Math.round(100*s.currentScore)}%`} </p>
                    </div>
                  ))}
                </div>
              );
              

}

export default Scoreboard;