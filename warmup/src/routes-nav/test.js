import React, { useState } from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  LineSeries,
} from 'react-vis';

import scoreLog from "./data"


// Sort the data by time_stamp
scoreLog.sort((a, b) => new Date(a.time_stamp) - new Date(b.time_stamp));


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


// Step 1: Group data by cat_id
const groupedData = scoreLog.reduce((result, item) => {
  if (!result[item.cat_id]) {
    result[item.cat_id] = [];
  }
  result[item.cat_id].push(item);
  return result;
}, {});


// Create a new object to store average score for each category
const aveScore = {};

// Iterate through each category
for (const categoryId in groupedData) {
  const categoryData = groupedData[categoryId];

  if (categoryData.length > 0) {
    // Calculate the average score for the category
    const averageScore =
      categoryData.reduce((sum, item) => sum + item.score, 0) / categoryData.length;

    // Get the first and last dates
    const firstDate = categoryData[0].time_stamp;
    const lastDate = categoryData[categoryData.length - 1].time_stamp;

    // Create an array with only two points for each category
    const aveScoreData = [
      { x: firstDate, y: averageScore * 100 },
      { x: lastDate, y: averageScore * 100 },
    ];

    // Assign the transformed data to the corresponding category key
    aveScore[categoryId] = aveScoreData;
  }
}

// Step 2: Extract unique time_stamp values
const uniqueTimeStamps = [...new Set(scoreLog.map(item => item.time_stamp))];
console.log('uniqueTimeStamps', uniqueTimeStamps)

export default function Test() {
  const BarSeries = VerticalBarSeries;
  

  const [selectedCategory, setSelectedCategory] = useState(1); // Initial category

  // Function to filter data by category
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

  console.log('groupedData', groupedData)
  console.log([selectedCategory][0].cat_id)
  console.log('selectedCategory', selectedCategory)
  console.log('aveScore',aveScore)
  console.log('****', aveScore[selectedCategory])
  return (
    <div>
      <div>
        <button onClick={handlePreviousCategory}> Previous Category </button>
        {selectedCategory && (
          <span>
              { groupedData[selectedCategory][0].cat_id === 1 ? "Plastic"
              : groupedData[selectedCategory][0].cat_id === 2 ? "Fossil Fuels"
              : groupedData[selectedCategory][0].cat_id === 3 ? "Deforestation"
              : groupedData[selectedCategory][0].cat_id === 4 ? "Agriculture"
              : groupedData[selectedCategory][0].cat_id === 5 ? "Transportation"
              : groupedData[selectedCategory][0].cat_id === 6 ? "Food Production"
              : null              
              }
          </span>
        )}
        <button onClick={handleNextCategory}> Next Category </button>
      </div>
      <XYPlot xType="ordinal" yDomain={[0, 120]} width={1000} height={300}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis
          title="Time Stamp"
          tickFormat={v => formatDate(v)}
          tickValues={uniqueTimeStamps}
          tickLabelAngle={45}
        />
         
        <YAxis title="Score" />
        <BarSeries
          key={selectedCategory}
          data={filteredData.map(item => ({
            x: item.time_stamp,
            y: item.score * 100
          }))}
          barWidth={0.25}
        />
        {console.log('filteredData', filteredData)}
        <LineSeries
          data={aveScore[selectedCategory]}
          style={{
            // note that this can not be translated to the canvas version
            strokeDasharray: '2 2',
            stroke: "red"
          }}          
        />        
      </XYPlot>
    </div>
  );
}