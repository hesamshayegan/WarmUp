import React, { useEffect, useContext } from 'react'; 
import { useParams } from 'react-router-dom';
import UserContext from '../common/UserContext';
import ScoreContext from '../common/ScoreContext';
import WarmUpApi from '../api/api';
import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';

import world from "../static/images/forms/world.jpg"
import plasticBadge from "../static/images/badges/plastic-badge.png"
import fossilBadge from "../static/images/badges/fossil-badge.png"
import deforestationBadge from "../static/images/badges/deforestation-badge.png"
import agricultureBadge from "../static/images/badges/agriculture-badge.png"
import transportationBadge from "../static/images/badges/transportation-badge.png"
import foodBadge from "../static/images/badges/food-badge.png"




function Badges() {


            const { currentUser } = useContext(UserContext);            
            const { scoreLog, setScoreLog } = useContext(ScoreContext);;

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

            return (

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
            )
}

export default Badges;