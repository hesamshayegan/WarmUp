import React, { useState, useContext, useEffect } from "react";
import UserContext from '../common/UserContext';
import ScoreContext from '../common/ScoreContext';
import WarmUpApi from '../api/api';
import { Grid, Box, Typography } from "@mui/material";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  DiscreteColorLegend
} from "react-vis";

const CATEGORIES = [
  'plastic',
  'fossilFuels',
  'deforestation',
  'agriculture',
  'transportation',
  'foodProduction',
];

function ScoreBars() {

        const { currentUser } = useContext(UserContext);
        const { scoreLog, setScoreLog } = useContext(ScoreContext);
        const [loading, setLoading] = useState(true);
        const [plasticData, setPlasticData] = useState([]);
        const [fossilFuelsData, setFossilFuelsData] = useState([]);
        const [deforestationData, setDeforestationData] = useState([]);
        const [agricultureData, setAgricultureData] = useState([]);
        const [transportationData, setTransportationData] = useState([]);
        const [foodProductionData, setFoodProductionData] = useState([]);


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



        const BarSeries = VerticalBarSeries;
        

        return (
          <Box sx={{ display: "flex", 
                     justifyContent: "center",
                     alignContent: "center",
                     flowDirection: "column", 
                     marginTop: '20px',
                     height: '400px'}}>
            
            
            <XYPlot className="plot" xType="ordinal" width={700} height={400} xDistance={60}>
            <DiscreteColorLegend  height={100}
                                  width={500}
                                  orientation="horizontal"
                                  items={CATEGORIES} 
                                  colors={["#cd3b54",
                                            "#59b830",
                                            "#ba4fb9",
                                            "#fff153",
                                            "blue", 
                                            "red" ]}
            />
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis tickLabelAngle={-45} tickPadding={2} style={{
                                            line: {stroke: 'red'},
                                            ticks: {stroke: 'green'},
                                            text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600} }} />
              
              <YAxis tickValues={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} title="Scores(%)"/>
              <BarSeries          
                data={plasticData}
                color="#cd3b54"
                animation={{ damping: 10, stiffness: 20 }}
              />
              <BarSeries
                data={fossilFuelsData}
                color="#59b830"
                animation={{ damping: 10, stiffness: 20 }}
              />
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
 
            </XYPlot>

          </Box>
        );
}

export default ScoreBars;