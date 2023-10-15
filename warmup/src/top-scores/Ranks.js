import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import { styled } from '@mui/material/styles';
import { 
Box, Button, Typography, DialogActions,
DialogContent, DialogTitle, Dialog, Link 
} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import theme from "../theme";
import WarmUpApi from '../api/api';
import { motion } from 'framer-motion';
import LoadingSpinner from '../common/LoadingSpinner';

import img from "../static/images/profile/profile-avatar.png";




const CATEGORIES = [
  { id: 1, name: 'Plastic' },
  { id: 2, name: 'Fossil Fuels' },
  { id: 3, name: 'Deforestation' },
  { id: 4, name: 'Agriculture' },
  { id: 5, name: 'Transportation' },
  { id: 6, name: 'Food Production' },
];



const btnStyle = {
    background: "linear-gradient(90deg, rgba(12,225,255,1) 0%, rgba(0,230,107,1) 71%, rgba(188,255,12,1) 100%)",
    borderRadius: "30px",
    border: 0,
    color: "white",
    height: "48px",
    padding: "10px",
    boxShadow: "0 3px 5px 2px rgba(255, 255, 102, 0.3)",
    transition: "box-shadow 0.3s ease-in-out",
    [theme.breakpoints.down("md")]: {                                    
      height: "30px",
      width: "100px",
      fontSize: "10px",
      marginTop: "5px"

      },
    "&:hover": {
        boxShadow: "0 6px 10px 4px rgba(0, 255, 102, 0.3)",
        border: "none",
    }
}

const selectedBtnStyle = {
  ...btnStyle,
  border: "3px solid #f8e11b",
  "&:hover": {
    boxShadow: "0 6px 10px 4px rgba(0, 255, 102, 0.3)",
    border: "3px solid #f8e11b",
  }
};


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
      width: '360px',
      height: '360px',
      backgroundColor: '#f0f0f0',
      
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
      backgroundColor: '#41548c',
    },
    '& .MuiDialogTitle-root': {
      padding: theme.spacing(1),
      backgroundColor: '#41548c',
    }, 
}));

const readStyle = {
    backgroundColor: 'transparent',  
    color: 'white',                 
    border: 'none',       
    borderRadius: '4px',            
    padding: '8px 16px',            
    cursor: 'pointer',             
    '&:hover': {
      backgroundColor: 'transparent',      
      color: '#f8e11b',
    },
};


const headStyle = {
    color: "#f8e11b",
    fontSize: "1.1rem",
    [theme.breakpoints.down("md")]: {                                    
      fontSize: "12px",
      margin: "1px",
      padding: "8px"
      }              
}

const playerStyle = {
  color: "#f8e11b",
  fontSize: "1.1rem",
  padding: "0px",
  margin: "0px",
  [theme.breakpoints.down("md")]: {                                    
    fontSize: "12px",
    margin: "0px",
    padding: "0px"
    }              
}

const rankStyle = {
  display: 'flex',  
  alignItems: "center",
  color: "white",
  fontSize: "12px", 
  padding: "8px"
}

const cellStyle = {
  color: "white",
  [theme.breakpoints.down("md")]: {                                    
    fontSize: "12px",
    margin: "1px",
    padding: "8px"
    }              
}


function Ranks() {

        const [AllScoresLogs, setAllScoresLogs] = useState();        
        const [sortedLogs, setSortedLogs] = useState({});
        const [selectedCategory, setSelectedCategory] = useState(1);
        const [open, setOpen] = useState(false);
        const [comments, setComments] = useState();
        const [selectedCommentContent, setSelectedCommentContent] = useState('');
        const [users, setAllUsers] = useState({}); 
       
      
        // Feteching users' info from the API
        useEffect(() => {
          async function fetchAllUsers() {
            try {
              const fetchedAllUsers = await WarmUpApi.findAllUsers();
              setAllUsers(fetchedAllUsers);
            } catch (error) {
              console.error("Error fetching users:", error);
            }
          }
      
          fetchAllUsers();
        }, []);

        console.log('users', users)


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


        // Get all comments
        useEffect(() => {
          async function fetchAllComments() {
            try {
              const fetchedAllComments = await WarmUpApi.getAllComments();
              setComments(fetchedAllComments);
            } catch (error) {
              console.error("Error fetching comments:", error);
            }
          }
      
          fetchAllComments();
        }, []);



        function findCommentContent(id) {
          if (comments) {            
            const comment = comments.find((comment) => comment.comment_id === id);
            return comment ? comment.content : '';
          }
          return '';
        }

  

        function findImageProfile(user_id) {
          if (users && Array.isArray(users)) {            
            const user = users.find((user) => user.id === user_id);
            return user ? user.image_profile : '';
            
          }
          return '';
        }


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

        const handleClickOpen = (commentContent) => {
          
          setSelectedCommentContent(commentContent);
          setOpen(true);  
          
        };

          const handleClose = () => {
            
            setSelectedCommentContent('');
            setOpen(false);
            
        };


        
        function truncateText(text) {
          if (text) {
              if (text.length <= 20) {
              return text;
              } else {
              return text.slice(0, 20) + "...";
              }
          } else {
              return null
          }
        }

        console.log('sortedLogs', sortedLogs)
        if (Object.keys(sortedLogs).length === 0 || !Array.isArray(users)) {

          return (
            <Box sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}>
              <LoadingSpinner />
            </Box>
          );

        } else {

            return (
              
              <Box>

                <Box sx={{ display: "flex",
                           justifyContent: 'space-evenly',
                           flexWrap: 'wrap',
                           width: "800px",
                           [theme.breakpoints.down("md")]: {                                    
                                maxWidth: '100vw'                                
                                }
                            }}
                           
                >
                    {CATEGORIES.map((cat) => (
                      <Button
                        key={cat.id}
                        variant={selectedCategory === cat.id ? 'contained' : 'outlined'}                        
                        sx={selectedCategory === cat.id ? selectedBtnStyle : btnStyle}
                        onClick={() => handleCategoryChange(cat.id)}
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
                                    width: '370px',                                                                        
                                    }}}
                  >
                    
                    <TableHead>
                      <TableRow>
                        <TableCell align='center' sx={headStyle}> Rank </TableCell>
                        <TableCell align='center' sx={playerStyle}>  </TableCell>
                        <TableCell align='left' sx={headStyle}> Player </TableCell>
                        <TableCell align='center' sx={headStyle}> Score(%)&nbsp; </TableCell>
                        <TableCell align='center' sx={headStyle}> Date&nbsp; </TableCell>
                        <TableCell align='center' sx={headStyle}> Feedback&nbsp; </TableCell>
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

                        
                        // Get the comment content & image profile for the current item, using the concept of Closure
                        const commentContent = findCommentContent(row.id);                        
                        const imageProfile = findImageProfile(row.user_id)

                        return (                          
                          <TableRow key={index + 1}>
                            <TableCell component="th" scope="row">
                              <Box sx={rankStyle}>
                                {rank}
                                {showIcon && <EmojiEventsOutlinedIcon sx={{ color: 'orange' }} />}
                              </Box>
                            </TableCell>
                            <TableCell align='right' sx={playerStyle}>
                              <img
                                src={imageProfile ? imageProfile : img}
                                style={{ height: "30px",
                                        width: "30px",
                                        borderRadius: "50%"
                                }}                      
                              />                               
                            </TableCell>
                            <TableCell align='left' sx={cellStyle}> {row.username} </TableCell>
                            <TableCell align='center' sx={cellStyle}> {Math.round(row.score * 100)} </TableCell>
                            <TableCell align='center' sx={cellStyle}> {formatDate(row.time_stamp)} </TableCell>
                            
                            <TableCell align='center' sx={cellStyle}>

                              {commentContent ? truncateText(commentContent) : '-'}
                              {commentContent && (
                                <Box>
                                  <Link onClick={() => handleClickOpen(commentContent)} sx={readStyle}>
                                    Read More                                 
                                  </Link>
                                </Box>
                                
                              )}
                            </TableCell>

                          </TableRow>
                        );
                      })}
                    </TableBody>
                    
                  </Table>
                </TableContainer>
                </motion.div>
                
                
                <Box>
                    <BootstrapDialog
                        onClose={handleClose}                    
                        open={open}                        
                    >
                        <DialogTitle sx={{ m: 0, p: 2, color: "white"}}>
                            Check out the user's feedback
                        </DialogTitle> 
                        <IconButton                    
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,                                
                            }}
                        >
                            <CloseIcon sx={{ color: "white"}} />
                        </IconButton>
                        <DialogContent>

                          <Typography gutterBottom>
                            {selectedCommentContent}                          
                          </Typography>

                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose} sx={readStyle}>                    
                            Close
                        </Button>
                        </DialogActions>
                    </BootstrapDialog>
                </Box>
                
              </Box>
            );
        }
}

export default Ranks;