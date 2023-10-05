import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import { Button, Box } from "@mui/material";
import theme from "../theme";
import WarmUpApi from '../api/api';
import { motion } from 'framer-motion';



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
  alignItems: "center",
  color: "white"
}

const ButtonStyle = {
    background: "linear-gradient(90deg, rgba(12,225,255,1) 0%, rgba(0,230,107,1) 71%, rgba(188,255,12,1) 100%)",
    borderRadius: "30px",
    border: 0,
    color: "white",
    height: "48px",
    padding: "10px",
    boxShadow: "0 3px 5px 2px rgba(255, 255, 102, 0.3)",
    transition: "box-shadow 0.3s ease-in-out",
    "&:hover": {
        boxShadow: "0 6px 10px 4px rgba(0, 255, 102, 0.3)",
        border: "none",
    }
}

function Ranks() {

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

                <Box sx={{ display: "flex",
                           justifyContent: 'space-evenly',
                           width: "800px",
                           [theme.breakpoints.down("md")]: {                                    
                                maxWidth: '370px',                                                                        
                                }
                            }}
                           
                >
                    {CATEGORIES.map((cat) => (
                      <Button
                        key={cat.id}
                        variant={selectedCategory === cat.id ? 'contained' : 'outlined'}
                        onClick={() => handleCategoryChange(cat.id)}                        
                        sx={ButtonStyle}
                      >
                        {cat.name}
                        
                      </Button>
                    ))}              
                </Box>

                <motion.div
                    key={selectedCategory}
                    
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                <TableContainer>                          
                  <Table sx={{ width: "800px",
                               [theme.breakpoints.down("md")]: {                                    
                                    maxWidth: '370px',                                                                        
                                    } }}>
                    
                    <TableHead>
                      <TableRow sx={{ color: "red"}}>
                        <TableCell align='center' sx={{ color: "white"}}> Rank </TableCell>
                        <TableCell align='center' sx={{ color: "white"}}> Player </TableCell>
                        <TableCell align='center' sx={{ color: "white"}}> Score(%)&nbsp; </TableCell>
                        <TableCell align='center' sx={{ width: "600px", color: "white"}}> Date&nbsp; </TableCell>
                        <TableCell align='center' sx={{ color: "white"}}> Comment&nbsp; </TableCell>
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
                          <TableRow key={index + 1}>
                            <TableCell component="th" scope="row">
                              <Box sx={cellStyle}>
                                {rank}
                                {showIcon && <EmojiEventsOutlinedIcon sx={{ color: 'orange' }} />}
                              </Box>
                            </TableCell>
                            <TableCell align='center' sx={{ color: "white"}}> {row.username} </TableCell>
                            <TableCell align='center' sx={{ color: "white"}}> {Math.round(row.score * 100)} </TableCell>
                            <TableCell align='center' sx={{ color: "white"}}> {formatDate(row.time_stamp)} </TableCell>
                            <TableCell align='center' sx={{ color: "white"}}> Test </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                    
                  </Table>
                </TableContainer>
                </motion.div>
              </Box>
            );
        }
}

export default Ranks;