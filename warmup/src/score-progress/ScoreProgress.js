import React, { useEffect, useContext, useState } from 'react';
import UserContext from '../common/UserContext';
import ScoreContext from '../common/ScoreContext';
import WarmUpApi from '../api/api';


import {
  RadarChart,
  CircularGridLines,
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  DiscreteColorLegend,
} from 'react-vis' ;


import 'react-vis/dist/style.css'
import { Grid, Box, Typography } from "@mui/material";
import Test from '../routes-nav/test.js'
import ScoreBars from './ScoreBars';

const DOMAIN = [
  {name: 'plastic', domain: [0, 100]},
  {name: 'fossilFuels', domain: [0, 100]},
  {name: 'deforestation', domain: [0, 100]},
  {name: 'agriculture', domain: [0, 100]},
  {name: 'transportation', domain: [0, 100]},
  {name: 'foodProduction', domain: [0, 100]}
];




const initial = [
  {x: 'Sep 23, 2023', y: 0},
  {x: 'Sep 25, 2023', y: 0},
  {x: 'Sep 25, 2023', y: 0},
  ]

const initial2 =  [
    {x: 'Sep 22, 2023', y: 0},
    {x: 'Sep 22, 2023', y: 0},
    {x: 'Sep 23, 2023', y: 0}, 
    {x: 'Sep 25, 2023', y: 0}
    ]

function ScoreProgress() {

        const { currentUser } = useContext(UserContext);
        const { scoreLog, setScoreLog } = useContext(ScoreContext);
        const BarSeries = VerticalBarSeries;
        const [plasticData, setPlasticData] = useState(initial);
        const [deforestationData, setDeforestationData] = useState(initial2);
        
       console.log(scoreCat(2))
        

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


        function formatDate(dateString) {
          const options = { year: 'numeric', month: 'short', day: '2-digit' };
          return new Date(dateString).toLocaleDateString(undefined, options);
        }
        
        function scoreCat(cat_id) {
            const data = [];
            const scoreLogCat = scoreLog.filter(item => item.cat_id === cat_id);
            
            for (let log of scoreLogCat) {
              data.push({ x: formatDate(log.time_stamp), y: Math.round(log.score * 100) });
            }

            const initialData = dataInitial(data);

            return { originalData: data, initialData };
        }

        function dataInitial (data) {
          return ( 
              data.map(item => ({
                  x: item.x,
                  y: 0,
            }))
          )
        }

        // useEffect(() => {
                 
        //   setTimeout(() => {
        //     setPlasticData([
        //       {x: 'Sep 23, 2023', y: 10},
        //       {x: 'Sep 25, 2023', y: 3},
        //       {x: 'Sep 25, 2023', y: 5},
        //       ], 20);
        //     setDeforestationData([
        //       {x: 'Sep 22, 2023', y: 20},
        //       {x: 'Sep 22, 2023', y: 15},
        //       {x: 'Sep 23, 2023', y: 6}, 
        //       {x: 'Sep 25, 2023', y: 10}
        //       ]);
        //   });
        // }, [scoreLog]);

        
        
        


        
        return (
          
          
          
          <Grid className="container-quiz" container sx={{height: "100%",border: "2px solid red" }}>

            <Grid item md={12} sx={{ border: "2px solid black"}}>
                <Box sx={{ margin: "10px"}}>
                  <Typography variant="h5" sx={{ color: 'blue' }}>
                    {currentUser.username}'s Score Tracker </Typography>
                </Box>
            </Grid>

            <Grid item md={6} sx={{ border: "2px solid green"}}>

                <Box sx={{ margin: "10px"}}>
                  <Typography variant="h5" sx={{ color: 'blue' }}>
                    {currentUser.username}'s Total Score </Typography>
                </Box>
            </Grid>
            <Grid item md={6} sx={{ border: "2px solid green"}}>

                <Box sx={{ margin: "10px"}}>
                  <Typography variant="h5" sx={{ color: 'blue' }}>
                    {currentUser.username}'s Average Score </Typography>
                </Box>
            </Grid>

            

            <Grid item xs={12} md={4} sx={{ border: "2px solid black"}}>
        
                <Box sx={{ backgroundColor: 'white'}}>
                    <Typography variant="h4"sx={{textAlign: "center",
                                                 textTransform: "uppercase" }}>
                     Max scores
                    </Typography>
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
                    width={500}
                    height={500}
                    >

                    <CircularGridLines
                        style={{fill: 'orange', fillOpacity: .3, opacity: 0.5, stroke: 'green'}}
                        tickValues={[...new Array(10)].map((v, i) => i / 10 - 1)}
                    />
                </RadarChart>

              </Box>
            </Grid>

            <Grid item xs={12} md={8} sx={{ border: "2px solid orange"}}>

              {/* <Test /> */}
              <ScoreBars />
              {/* <Box sx={{ display: "flex", justifyContent: "center", alignContent: "center", marginTop: '10px'}}>
                <XYPlot margin={{bottom: 70}} xType="ordinal" width={300} height={300}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis tickLabelAngle={-45} />
                <YAxis />
                
                
                 <BarSeries
                  data={plasticData}
                  color="#59b830"
                  stroke="red"
                  animation={{ damping: 10, stiffness: 20 }}                
                />

                <BarSeries
                  data={deforestationData}
                  color="#ba4fb9"
                  animation={{ damping: 10, stiffness: 20 }} 
                />

                
                {/* <BarSeries
                  data={scoreCat(4)}
                  color="#fff153"
                />
                <BarSeries
                  data={scoreCat(5)}
                  color="#59b953"
                />
                <BarSeries
                  data={scoreCat(6)}
                  color="#ba4fb9"
                /> */}
                {/* </XYPlot>
                <DiscreteColorLegend height={250}
                                     width={150}
                                     items={CATEGORIES} 
                                     colors={["#cd3b54",
                                              "#59b830",
                                              "#ba4fb9",
                                              "#fff153",
                                              "#59b953", 
                                              "#ba4fb9" ]}
                />
              </Box> */}

            </Grid>

        </Grid>
        )
}

export default ScoreProgress;





{/* <Grid item xs={12} md={8} sx={{ border: "2px solid orange"}}>
<Box sx={{ display: "flex", justifyContent: "center", alignContent: "center", marginTop: '10px'}}>
  <XYPlot margin={{bottom: 70}} xType="ordinal" width={300} height={300}>
  <VerticalGridLines />
  <HorizontalGridLines />
  <XAxis tickLabelAngle={-45} />
  <YAxis />
  <VerticalBarSeries
    data={scoreCat(1)}
    color="#cd3b54"
    stroke="blue"
  />
  <VerticalBarSeries
    data={scoreCat(2)}
    color="#59b830"
  />
  <VerticalBarSeries
    data={scoreCat(3)}
    color="#ba4fb9"
  />
  <VerticalBarSeries
    data={scoreCat(4)}
    color="#fff153"
  />
  <VerticalBarSeries
    data={scoreCat(5)}
    color="#59b953"
  />
  <VerticalBarSeries
    data={scoreCat(6)}
    color="#ba4fb9"
  />
  </XYPlot>
  <DiscreteColorLegend height={250}
                       width={150}
                       items={CATEGORIES} 
                       colors={["#cd3b54",
                                "#59b830",
                                "#ba4fb9",
                                "#fff153",
                                "#59b953", 
                                "#ba4fb9" ]}
  />
</Box>
</Grid> */}