import React, { useEffect, useContext } from 'react'; 
import UserContext from '../common/UserContext';
import ScoreContext from '../common/ScoreContext';
import WarmUpApi from '../api/api';
import { Box } from "@mui/material";
import BadgePopover from './BadgePopover';

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
            
            function topScore(id) {
                const result = scoreLog.find((el) => el.cat_id === id && el.score >= 0.8)
                return result
            }
            
            return (
                
                <Box sx={{ marginLeft: "10px", display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
                      {topScore(1) ? (
                            <BadgePopover 
                                badgeImage={plasticBadge} 
                                badgeContent={`Your top score of ${Math.round(topScore(1).score * 100)}% is impressive!
                                               You've earned the plastic badge.`}
                            />  
                      ) : (
                          <img src={plasticBadge} width="85px"  style={{ opacity: 0.4 }} />
                      )}
                      {topScore(2) ? (
                            <BadgePopover 
                                badgeImage={fossilBadge} 
                                badgeContent={`Your top score of ${Math.round(topScore(2).score * 100)}% is impressive!
                                               You've earned the fossil fule badge.`}
                            />                          
                      ) : (
                          <img src={fossilBadge} width="85px" style={{ opacity: 0.4 }} />
                      )}
                      {topScore(3) ? (
                            <BadgePopover 
                                badgeImage={deforestationBadge} 
                                badgeContent={`Your top score of ${Math.round(topScore(3).score * 100)}% is impressive!
                                               You've earned the deforestation badge.`}
                            />                           
                      ) : (
                          <img src={deforestationBadge} width="85px" style={{ opacity: 0.4 }} />
                      )}
                      {topScore(4) ? (
                            <BadgePopover 
                                badgeImage={agricultureBadge} 
                                badgeContent={`Your top score of ${Math.round(topScore(4).score * 100)}% is impressive!
                                               You've earned the agriculture badge.`}
                            />                           
                      ) : (
                          <img src={agricultureBadge} width="85px" style={{ opacity: 0.4 }} />
                      )}
                      {topScore(5) ? (
                            <BadgePopover 
                                badgeImage={transportationBadge} 
                                badgeContent={`Your top score of ${Math.round(topScore(5).score * 100)}% is impressive!
                                                You've earned the transportation badge.`}
                            />                           
                      ) : (
                          <img src={transportationBadge} width="85px" style={{ opacity: 0.4 }}  />
                      )}
                      {topScore(6) ? (
                            <BadgePopover 
                                badgeImage={foodBadge} 
                                badgeContent={`Your top score of ${Math.round(topScore(6).score * 100)}% is impressive!
                                        You've earned the food badge.`}
                            />                           
                      ) : (
                          <img src={foodBadge} width="85px" style={{ opacity: 0.4 }} />
                      )} 
                </Box>
            )
}

export default Badges;