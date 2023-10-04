import React, { useState, useContext, useEffect } from "react";
import UserContext from '../common/UserContext';
import ScoreContext from '../common/ScoreContext';
import WarmUpApi from '../api/api';
import theme from "../theme";
import "./ScoreBars.css"
import { Box, Typography, Button } from "@mui/material";

import {
  FlexibleXYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  DiscreteColorLegend,  
  LineSeries,
} from "react-vis";


const defaultProps = {
  margin: {top: 20, left: 60, right: 60, bottom: 100}
};

const Btn = {
  borderRadius: '30px',
  border: "3px solid darkgreen",
  color: "black",    
};


const CATEGORIES = [
  {title: 'plastic', color: "#409aeb"},
  {title: 'fossilFuels', color: "#d7880d"},
  {title: 'deforestation', color: "#14af0d"},
  {title: 'agriculture', color: "#8e1ecc"},
  {title: 'transportation', color: "#846f6f"},
  {title: 'foodProduction', color: "#44cacc"},
  {title: 'average score', color: "red", strokeDasharray: '3 3'},
]

function ScoreBars () {

        const { currentUser } = useContext(UserContext);
        const { scoreLog, setScoreLog } = useContext(ScoreContext);
        const [groupedData, setGroupedData] = useState({});
        const [aveScore, setAveScore] = useState({});
        const [selectedCategory, setSelectedCategory] = useState(1);

        const BarSeries = VerticalBarSeries;
      
        // Feteching scores' history from the API
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
        
        // Data processing: Group data based on category and calculate the average score for each of them
        useEffect(() => {
          
          if (scoreLog.length > 0) {
  
            scoreLog.sort((a, b) => new Date(a.time_stamp) - new Date(b.time_stamp));
      
            const groupedDataResult = scoreLog.reduce((result, item) => {
              if (!result[item.cat_id]) {
                result[item.cat_id] = [];
              }
              result[item.cat_id].push(item);
              return result;
            }, {});
            setGroupedData(groupedDataResult);
      
            const aveScoreResult = {};
            for (const categoryId in groupedDataResult) {
              const categoryData = groupedDataResult[categoryId];
              if (categoryData.length > 0) {
                const averageScore =
                  categoryData.reduce((sum, item) => sum + item.score, 0) / categoryData.length;
                const firstDate = categoryData[0].time_stamp;
                const lastDate = categoryData[categoryData.length - 1].time_stamp;
                const aveScoreData = [
                  { x: firstDate, y: averageScore * 100 },
                  { x: lastDate, y: averageScore * 100 },
                ];
                aveScoreResult[categoryId] = aveScoreData;
              }
            }
            setAveScore(aveScoreResult);
      
          }
        }, [scoreLog]);
      
        const filteredData = groupedData[selectedCategory] || [];
      
        // Function to handle the "Next Category" button click
        const handleNextCategory = () => {
          const categoryIds = Object.keys(groupedData);
          const currentIndex = categoryIds.indexOf(selectedCategory);
          if (currentIndex < categoryIds.length - 1) {
            setSelectedCategory(categoryIds[currentIndex + 1]);
          }
        };
      
        // Function to handle the "Previous Category" button click
        const handlePreviousCategory = () => {
          const categoryIds = Object.keys(groupedData);
          const currentIndex = categoryIds.indexOf(selectedCategory);
          if (currentIndex > 0) {
            setSelectedCategory(categoryIds[currentIndex - 1]);
          }
        };
        
        {console.log('groupedData', groupedData)}

        function formatDate(dateStr) {
          const date = new Date(dateStr);
          const monthNames = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
          ];
          const month = monthNames[date.getMonth()];
          const day = date.getDate().toString().padStart(2, '0');
          const year = date.getFullYear();
          return `${month} ${day} ${year}`;
        }
        
        
        if (Object.keys(groupedData).length === 0) {
          return <div> Loading... </div>;
        }

        return (          
            
            <Box className="container" 
                  sx={{
                    display: "flex",
                    flexDirection: "column",                  
                    width: '90vw',
                    height: '100vh',                    
                    [theme.breakpoints.down("md")]: {
                    marginTop: "100px",
                    width: '90vw',
                    height: '100vh'
                    },                                                                                                  
                  }}
          >
            <Typography variant="h4" 
                            sx={{
                              textAlign: "center",
                              textTransform: "uppercase",
                              margin: "15px",                              
                            }}
                > 
                  Score Timeline
                </Typography>  
            <Box sx={{
                      display: "flex",
                      justifyContent: "center",                      
                      height: '50px',                      
                  }}>
              
                <Button onClick={handlePreviousCategory} sx={Btn}> Previous Category </Button>
              
              <Box sx={{ margin: "10px", width: "150px",display: "flex",
                      justifyContent: "center", }}>
                {selectedCategory && (                  
                  groupedData[selectedCategory][0].cat_id === 1 ? <Typography> Plastic </Typography> 
                  : groupedData[selectedCategory][0].cat_id === 2 ? <Typography> Fossil Fuels </Typography>
                  : groupedData[selectedCategory][0].cat_id === 3 ? <Typography> Deforestation </Typography>
                  : groupedData[selectedCategory][0].cat_id === 4 ? <Typography> Agriculture </Typography>
                  : groupedData[selectedCategory][0].cat_id === 5 ? <Typography> Transportation </Typography>
                  : groupedData[selectedCategory][0].cat_id === 6 ? <Typography> Food Production </Typography>
                  : null
                )}
              </Box >

                <Button onClick={handleNextCategory} sx={Btn}> Next Category </Button>
              
            </Box>

            <Box className="legend" 
                  sx={{
                      display: "flex",
                      justifyContent: "center",                      
                      height: '100px',
                      

                  }}
            >
                  <DiscreteColorLegend                                                  
                          orientation="horizontal"
                          items={CATEGORIES}
                          style={{
                            fontSize: "14px",                            
                            height: "80px",
                            margin: "5px"
                          }}                           
                  />
            </Box>

            <Box
                className="plot"
                sx={{                            
                  width: '100%',
                  height: '100%',                  
                }}                          
            >
                
                  <FlexibleXYPlot 
                          {...defaultProps}
                          xType="ordinal"
                          yDomain={[0, 120]}                          
                  >
                  
                  <HorizontalGridLines
                        style={{
                          stroke: '#BFB3B3'                          
                        }} 
                  />
                  <VerticalGridLines 
                        style={{
                          stroke: '#BFB3B3'                          
                        }}
                  />
                  
                  <XAxis 
                        tickFormat={v => formatDate(v)}
                        tickValues={filteredData.map(score => score.time_stamp)}
                        tickLabelAngle={-45}
                        style={{
                          line: {stroke: 'black'},                      
                          text: {stroke: 'none', fill: 'black', fontWeight: 600},
                        }} 
                    />                  
                 
                  <YAxis title="Scores(%)"
                          tickValues={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                          style={{ 
                            line: {stroke: 'black'},
                            text: {stroke: 'none', fill: 'black', fontWeight: 600},
                            }}
                    />

                  <BarSeries
                    key={selectedCategory}
                    data={filteredData.map(item => ({
                      x: item.time_stamp,
                      y: item.score * 100
                    }))}
                    color={CATEGORIES[selectedCategory - 1].color}
                    barWidth={0.1}
                  />
                  
                  <LineSeries
                    data={aveScore[selectedCategory]}
                    style={{                      
                      strokeDasharray: '10 10',
                      stroke: "red"
                    }}          
                  />        
                
                </FlexibleXYPlot>
                
            </Box>
          </Box>

        );
}

export default ScoreBars;