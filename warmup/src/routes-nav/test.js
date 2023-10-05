import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import { Button, Box } from "@mui/material";
import WarmUpApi from '../api/api';



const CATEGORIES = [
  { id: 1, name: 'Plastic' },
  { id: 2, name: 'Fossil Fuels' },
  { id: 3, name: 'Deforestation' },
  { id: 4, name: 'Agriculture' },
  { id: 5, name: 'Transportation' },
  { id: 6, name: 'Food Production' },
];

const cellStyle = {
  display: 'flex',
  justifyContent: "center",
  alignContent: "center"
}

export default function Test() {

        const [AllScoresLogs, setAllScoresLogs] = useState();        
        const [sortedLogs, setSortedLogs] = useState({});
        const [selectedCategory, setSelectedCategory] = useState(1);
       
      
        
        // Feteching scores' history from the API
        useEffect(() => {
          async function fetchAllScoreHistory() {
            try {
              const fetchedAllScoresHistory = await WarmUpApi.getAllScoresHistory();
              setAllScoresLogs(fetchedAllScoresHistory);
            } catch (error) {
              console.error("Error fetching scores:", error);
            }
          }
      
          fetchAllScoreHistory();
        }, []);      


        
        // Sorting and updating sortedLogs
        useEffect(() => {
          if (AllScoresLogs && AllScoresLogs.length > 0) {
            const groupedData = AllScoresLogs.reduce((result, item) => {
              if (!result[item.cat_id]) {
                result[item.cat_id] = {};
              }
        
              // Group data for each unique username and for each category.
              // Compares the current item's score with the previously 
              // stored score for the same cat_id and username.
              if (
                !result[item.cat_id][item.username] ||
                item.score > result[item.cat_id][item.username].score
              ) {
                result[item.cat_id][item.username] = item;
              }
              return result;
            }, {});
        
            const newSortedLogs = {};
        
            for (const catId in groupedData) {
              if (groupedData.hasOwnProperty(catId)) {
                const userScores = Object.values(groupedData[catId]);
                // Sort userScores by score in descending order
                userScores.sort((a, b) => b.score - a.score);
                // Take only the first score for each different user
                newSortedLogs[catId] = userScores;
              }
            }
           
            setSortedLogs(newSortedLogs);
          }
        }, [AllScoresLogs]);



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

        const handleCategoryChange = (category) => {
          setSelectedCategory(category);
        };

        
        if (Object.keys(sortedLogs).length === 0) {

          return <div> Loading... </div>;

        } else {

            return (
              
              <Box>

                <Box sx={{ width: "800px"}}>
                    {CATEGORIES.map((cat) => (
                      <Button
                        key={cat.id}
                        variant={selectedCategory === cat.id ? 'contained' : 'outlined'}
                        onClick={() => handleCategoryChange(cat.id)}
                      >
                        {cat.name}
                      </Button>
                    ))}              
                </Box>

                <TableContainer>                          
                  <Table sx={{ width: "800px" }}>
                    
                    <TableHead>
                      <TableRow>
                        <TableCell align='center'> Rank </TableCell>
                        <TableCell align='center'> Player </TableCell>
                        <TableCell align='center'> Score(%)&nbsp; </TableCell>
                        <TableCell align='center' sx={{ width: "600px"}}> Date&nbsp; </TableCell>
                        <TableCell align='center'> Comment&nbsp; </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {sortedLogs[selectedCategory].map((row, index, array) => {
                        let rank = 1; 
                        let showIcon = false;
                    
                        if (index > 0) {
                          
                          if (row.score === array[index - 1].score) {
                            rank = index;
                          } else {
                            rank = index + 1;
                          }
                        }
                
                        if (rank === 1) {
                          showIcon = true;
                        }

                        return (                          
                          <TableRow key={index + 1} sx={{ backgroundColor: "red"}}>
                            <TableCell component="th" scope="row" sx={cellStyle}>
                              {rank}
                              {showIcon && <EmojiEventsOutlinedIcon sx={{ color: 'orange' }} />}
                            </TableCell>
                            <TableCell align='center'> {row.username} </TableCell>
                            <TableCell align='center'> {Math.round(row.score * 100)} </TableCell>
                            <TableCell align='center'> {formatDate(row.time_stamp)} </TableCell>
                            <TableCell align='center'> Test </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                    
                  </Table>
                </TableContainer>
              </Box>
            );
        }
}
