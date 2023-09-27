import React, { useEffect, useContext } from 'react'; 
import { useParams } from 'react-router-dom';
import UserContext from '../common/UserContext';
import WarmUpApi from '../api/api';
import ScoreContext from '../common/ScoreContext';
import { Box, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import './Scoreboard.css';

import world from "../static/images/forms/world.jpg"
import plasticBadge from "../static/images/badges/plastic-badge.png"
import fossilBadge from "../static/images/badges/fossil-badge.png"
import deforestationBadge from "../static/images/badges/deforestation-badge.png"
import agricultureBadge from "../static/images/badges/agriculture-badge.png"
import transportationBadge from "../static/images/badges/transportation-badge.png"
import foodBadge from "../static/images/badges/food-badge.png"


const UnderWhite = styled('div')({
  textDecoration: 'underline',
  textDecorationColor: 'white',
  display: 'inline' 
})


function Scoreboard() {

            const { currentUser } = useContext(UserContext);
            const { category } = useParams();
            const { scores, setScores } = useContext(ScoreContext);            
            const { scoreLog, setScoreLog } = useContext(ScoreContext);

            

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


            useEffect(() => {
              async function fetchScoreHistory() {
                  try {

                    const username = currentUser.username;
                    const fetchedScoreHistory = await WarmUpApi.getScoreHistory({ username });
                    setScoreLog(fetchedScoreHistory);

                  } catch (error) {

                    console.error("Error fetching current scores:", error);

                  }
              }
              
              fetchScoreHistory();
              
                  
            }, []);

          console.log("scoreLog",scoreLog)
          console.log("scoreLog",typeof(scoreLog))
          

            return (
              <Box className="scoreboard" sx={{ background: `url(${world})`,
                                              border: "2px solid white",
                                              borderTopRightRadius: "30px",                                              
                                              borderBottomRightRadius: "30px",                                              
                                              padding: 0 }}>
                  
                  <Typography variant="h5" textTransform="uppercase" sx={{ display: "flex",
                                                 justifyContent: "center",
                                                 marginTop: "10px",
                                                 marginBottom: "10px",
                                                 textAlign: "center",                                                                                             
                                                 color: "#Ff5000",                                                                                                                                   
                                                 flexWrap: "wrap"}}
                  >
                     <UnderWhite> Your Current Scores </UnderWhite>
                   </Typography>
                   
                  {scores.map(s => (
                    <div key={s.id}>
                      
                      <Typography variant="h6" textTransform="uppercase" sx={{ textAlign: "center", color: "white", }}>
                         {s.category === 'fossil-fuels' ? 'fossil fuels'
                          :s.category === 'food-production' ? 'food production'
                          : s.category }
                         : {s.currentScore == 0 ? "0" 
                         : `${Math.round(100*s.currentScore)}%`}
                      </Typography>                      
                    </div>
                    
                  ))}
                  
                  
                  <Box> 
                  <Typography variant="h5" textTransform="uppercase" 
                              sx={{textAlign: "center",
                                   color: "#00ff58",
                                   marginTop: "10px" }}>
                    <UnderWhite> Green Awards </UnderWhite>
                  </Typography>                 
                    
                    <Box sx={{ marginLeft: "10px", display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
                      {scoreLog.find((el) => el.cat_id === 1 && el.score >= 0.8) ? (
                          <img src={plasticBadge} width="85px"  style={{ opacity: 1 }} />  
                      ) : (
                          <img src={plasticBadge} width="85px"  style={{ opacity: 0.4 }} />
                      )}
                      {scoreLog.find((el) => el.cat_id === 2 && el.score >= 0.8) ? (
                          <img src={fossilBadge} width="85px" style={{ opacity: 1 }} />  
                      ) : (
                          <img src={fossilBadge} width="85px" style={{ opacity: 0.4 }} />
                      )}
                      {scoreLog.find((el) => el.cat_id === 3 && el.score >= 0.8) ? (
                          <img src={deforestationBadge} width="85px" style={{ opacity: 1 }} />  
                      ) : (
                          <img src={deforestationBadge} width="85px" style={{ opacity: 0.4 }} />
                      )}
                      {scoreLog.find((el) => el.cat_id === 4 && el.score >= 0.8) ? (
                          <img src={agricultureBadge} width="85px" style={{ opacity: 1 }} />  
                      ) : (
                          <img src={agricultureBadge} width="85px" style={{ opacity: 0.4 }} />
                      )}
                      {scoreLog.find((el) => el.cat_id === 5 && el.score >= 0.8) ? (
                          <img src={transportationBadge} width="85px" style={{ opacity: 1 }}  />  
                      ) : (
                          <img src={transportationBadge} width="85px" style={{ opacity: 0.4 }}  />
                      )}
                      {scoreLog.find((el) => el.cat_id === 6 && el.score >= 0.8) ? (
                          <img src={foodBadge} width="85px" style={{ opacity: 1 }} /> 
                      ) : (
                          <img src={foodBadge} width="85px" style={{ opacity: 0.4 }} />
                      )} 
                    </Box>
                    
                </Box>

              </Box>               
              );

}

export default Scoreboard;