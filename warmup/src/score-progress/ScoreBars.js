import React, { useState, useContext, useEffect } from "react";
import UserContext from '../common/UserContext';
import ScoreContext from '../common/ScoreContext';
import WarmUpApi from '../api/api';
import theme from "../theme";
import "./ScoreBars.css"
import { Grid, Box, Typography } from "@mui/material";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  DiscreteColorLegend,
  FlexibleXYPlot,
  Hint
} from "react-vis";

const CATEGORIES = [
  {title: 'plastic', color: "#cd3b54"},
  {title: 'fossilFuels', color: "#59b830"},
  {title: 'deforestation', color: "#ba4fb9"},
  {title: 'agriculture', color: "#fff153"},
  {title: 'transportation', color: "blue"},
  {title: 'foodProduction', color: "red"},
]

const defaultProps = {
  margin: {top: 20, left: 30, right: 10, bottom: 60}
};

function ScoreBars ({height, width}) {

        const { currentUser } = useContext(UserContext);
        const { scoreLog, setScoreLog } = useContext(ScoreContext);
        const [loading, setLoading] = useState(true);
        const [plasticData, setPlasticData] = useState([]);
        const [fossilFuelsData, setFossilFuelsData] = useState([]);
        const [deforestationData, setDeforestationData] = useState([]);
        const [agricultureData, setAgricultureData] = useState([]);
        const [transportationData, setTransportationData] = useState([]);
        const [foodProductionData, setFoodProductionData] = useState([]);
        const [hoveredCell, setHoveredCell] = useState(null);


        useEffect(() => {
          async function fetchScoreHistory() {
              try {

                const username = currentUser.username;
                const fetchedScoreHistory = await WarmUpApi.getScoreHistory({ username });
                setScoreLog(fetchedScoreHistory);
                setLoading(false);

              } catch (error) {

                console.error("Error fetching current scores:", error);

              }
          }
          
          fetchScoreHistory();
          
        }, []);

        console.log(scoreLog)

        // Define the input for using in React-Vis Elements
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


        useEffect(() => {
          if (!loading) {
      
            setPlasticData(scoreCat(1).initialData);
            setFossilFuelsData(scoreCat(2).initialData);
            setDeforestationData(scoreCat(3).initialData);
            setAgricultureData(scoreCat(4).initialData);
            setTransportationData(scoreCat(5).initialData);
            setFoodProductionData(scoreCat(6).initialData);
            
          }
        }, [loading, scoreLog]);


        useEffect(() => {
          if (!loading) {
            setTimeout(() => {
              setPlasticData(scoreCat(1).originalData);
              setFossilFuelsData(scoreCat(2).originalData);   
            }, 20);
              setDeforestationData(scoreCat(3).originalData);
            setTimeout(() => {
              setAgricultureData(scoreCat(4).originalData);
              setTransportationData(scoreCat(5).originalData);
            }, 20);
              setFoodProductionData(scoreCat(6).originalData);
          }
        }, [loading, scoreLog]);



        const handleMouseOver = (value, label) => {
          setHoveredCell(label);
        };
      
        const handleMouseOut = () => {
          setHoveredCell(null);
        };


        const BarSeries = VerticalBarSeries;
        

        return (
          
            <Box className="container"  
            sx={{                    
              display: 'flex', // Use Flexbox
              flexDirection: 'column', // Vertically align items
              justifyContent: 'center', // Horizontally align items
              alignItems: 'center', // Vertically align items
                     width: width || '100vh',
                     height: height || '60vh',
                     [theme.breakpoints.down("md")]: { 
                      width: width || '45vh',
                      height: height || '60vh'
                    }                                                                              
                  }}
            > 
              <Box>
                <DiscreteColorLegend  
                                  width={500}
                                  style={{
                                    position: 'absolute',                                                                                                          
                                    border: "2px solid red",
                                    borderRadius: "10px",                                  
                                  }}                             
                                  orientation="horizontal"
                                  items={CATEGORIES}                              
              />
            </Box>
            <Box
              className="flexible-vis"
              sx={{ display: 'flex', // Use Flexbox
               // Vertically align items
              justifyContent: 'end', // Horizontally align items
              alignItems: 'center',}} // Vertically align items}}
              style={{width: '100%', height: '100%', border: '1px solid red'}}
            >
                      
              <FlexibleXYPlot xType="ordinal"
                yDomain={[0, 120]} 
                {...defaultProps}
                sx={{ display: 'flex', // Use Flexbox
               // Vertically align items
              justifyContent: 'end', // Horizontally align items
              alignItems: 'center',}}>
              
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis tickLabelAngle={-45}  
                      style={{
                        line: {stroke: 'black'},                      
                        text: {stroke: 'none', fill: 'black', fontWeight: 601},
                      }} 
                />
                
                <YAxis className="y-axis" title="Scores(%)"
                      tickValues={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                      style={{ 
                        line: {stroke: 'black'},
                        text: {stroke: 'none', fill: 'black', fontWeight: 600},
                        }}
                />
                      
                <BarSeries          
                  data={plasticData}
                  color="#cd3b54"
                  animation={{ damping: 10, stiffness: 20 }}                
                  onValueMouseOver={value => handleMouseOver(value, 'plastic')}
                  onValueMouseOut={handleMouseOut}
                />
                {hoveredCell !== null && (
                  <Hint value={hoveredCell}
                        align={{vertical: 'bottom', horizontal: 'right'}} >
                    <div style={{background: 'black', color: 'blue'}}>
                      <p  style={{ color: 'red'}}>{hoveredCell}</p>
                    </div>
                  </Hint>
                )}
                              
                <BarSeries
                  data={fossilFuelsData}
                  color="#59b830"
                  animation={{ damping: 10, stiffness: 20 }}
                  onValueMouseOver={value => handleMouseOver(value, 'fossilFuels')}
                  onValueMouseOut={handleMouseOut}
                />
                {hoveredCell !== null && (
                  <Hint value={hoveredCell}
                  align={{vertical: 'bottom', horizontal: 'right'}} >
                    <div>
                      <p>{hoveredCell}</p>
                    </div>
                  </Hint>
                )}

                <BarSeries
                  data={deforestationData}
                  color="#ba4fb9"
                  animation={{ damping: 10, stiffness: 20 }}
                />
                <BarSeries
                  data={agricultureData}
                  color="#fff153"
                  animation={{ damping: 10, stiffness: 20 }}
                />
                <BarSeries
                  data={transportationData}
                  color="blue"
                  animation={{ damping: 10, stiffness: 20 }}
                />
                <BarSeries
                  data={foodProductionData}
                  color="red"
                  animation={{ damping: 10, stiffness: 20 }}
                />
              
              </FlexibleXYPlot>
            
            </Box>
            </Box>

           
        );
}

export default ScoreBars;