import React, { useEffect, useContext } from 'react';
import UserContext from '../common/UserContext';
import ScoreContext from '../common/ScoreContext';
import WarmUpApi from '../api/api';
import theme from "../theme";


import {
  RadarChart,
  CircularGridLines,
} from 'react-vis' ;


import 'react-vis/dist/style.css'
import { Box, Typography } from "@mui/material";

const DOMAIN = [
    {name: 'plastic', domain: [0, 100]},
    {name: 'fossilFuels', domain: [0, 100]},
    {name: 'deforestation', domain: [0, 100]},
    {name: 'agriculture', domain: [0, 100]},
    {name: 'transportation', domain: [0, 100]},
    {name: 'foodProduction', domain: [0, 100]}
  ];

function ScoreRadar() {

    const { currentUser } = useContext(UserContext);
    const { scoreLog, setScoreLog } = useContext(ScoreContext);
            
  
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

    // Calculate max scores for a given category
    function maxScore(cat_id) {
      const max = Math.max(...scoreLog.filter(item => item.cat_id === cat_id).map(el => el.score));
      if (max <= 0) {
        return 0
      } else {
        return Math.round(max * 100)
      }
    }


    const maxScores = [
      {
        plastic: maxScore(1),
        fossilFuels: maxScore(2),
        deforestation: maxScore(3),
        agriculture: maxScore(4),
        transportation: maxScore(5),
        foodProduction: maxScore(6)
      }
    ];


        return (

            <Box sx={{ 
                backgroundColor: 'white',
                width: '90vw',
                height: '80vh',
                [theme.breakpoints.down("md")]: { 
                    width: '89vw',
                    height: '60vh'
                    },
                }}>
                    <Typography variant="h4"
                                sx={{
                                    textAlign: "center",
                                    textTransform: "uppercase"
                                    }}
                    >
                        Max scores
                    </Typography>
                    <Box sx={{ 
                            display: "flex",
                            justifyContent: "center"
                            
                         }}
                    >
                    <RadarChart
                    data={maxScores}
                    domains={DOMAIN}
                    style={{
                        polygons: {
                            fillOpacity: 0.35,
                            strokeWidth: 3,
                            strokeOpacity: 1,
                            fill: 'green',
                            stroke: 'darkgreen'  
                        },
                        axes: {
                            text: { opacity: 1, fill: 'red', stroke: "red" },
                            
                        },
                        labels: {
                            textAnchor: 'middle',
                            fontSize: 12,
                            fontFamily: "\"Poppins\", \"Helvetica\", \"Arial\", sans-serif",
                            fontWeight: 500,
                            fill: 'red',                                                                                                         
                        },     
                    }}
                    margin={{
                        left: 70,
                        top: 70,
                        bottom: 70,
                        right: 70
                    }}
                    width={400}
                    height={500}
                    >

                    <CircularGridLines
                        style={{fill: 'orange', fillOpacity: .3, opacity: 0.5, stroke: 'green'}}
                        tickValues={[...new Array(10)].map((v, i) => i / 10 - 1)}
                    />
                </RadarChart>
                </Box>
            </Box>

        )
}

export default ScoreRadar;