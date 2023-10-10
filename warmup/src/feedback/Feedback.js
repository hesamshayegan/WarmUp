import React, { useContext, useState, useEffect } from "react";
import UserContext from '../common/UserContext';
import { Box, Grid, Typography, Link} from "@mui/material";
import WarmUpApi from "../api/api";
import Slide from '@mui/material/Slide';

import CategoryCommentCard from "./CategoryCommentCard"




function Feedback() {

            const { currentUser } = useContext(UserContext);            
            const [categories, setCategories] = useState([]);
            const [comments, setComments] = useState([]);


            useEffect(() => {
                async function fetchCategories() {
                    try {
                        const fetchedCategories = await WarmUpApi.getAllCategories();
                        setCategories(fetchedCategories);
                    } catch (error) {
                        console.error("Error fetching categories:", error);
                    }
                }
                
                fetchCategories();
                
            }, []);


            useEffect(() => {

                async function fetchComments() {
                    try {

                    const username = currentUser.username;
                    const fetchedComments = await WarmUpApi.getAllcomments({ username });
                    setComments(fetchedComments);

                    } catch (error) {

                    console.error("Error fetching current comments:", error);

                    }
                }
                
                fetchComments();
                
                    
            }, []);

            console.log(comments)

            return (
                
                <Grid container>
                    <Grid item md={4} 
                          sx={{ 
                            backgroundImage: "linear-gradient(90deg, rgba(12,225,255,1) 0%, rgba(0,230,107,1) 71%, rgba(188,255,12,1) 100%)",                            
                          }}
                >                                  
                    <Slide direction="right" 
                    in={true} 
                    mountOnEnter 
                    unmountOnExit
                    easing={{
                        enter: 'cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    timeout={{ enter: 1000, exit: 0 }}
                    >
                        <Box>
                            <Typography variant="h3" 
                                        sx={{
                                            textAlign: "center",                                
                                            margin: "10px",
                                            marginTop: "20px",
                                            color: "white"
                                        }}
                            > 
                                Feedback
                            </Typography>
                            <Typography variant="h6" 
                                        sx={{
                                            textAlign: "center",                               
                                            margin: "10px",
                                            marginTop: "20px",
                                            color: "white"
                                        }}
                            > 
                                In this section, you can share your thoughts on the topics you mastered
                                - scored more than 80% - and earned a badge for.
                            </Typography>
                            <Typography variant="h6" 
                                        sx={{
                                            textAlign: "center",                               
                                            margin: "10px",
                                            marginTop: "20px",
                                            color: "white"
                                        }}
                            > 
                                Share a fact, environmental impact, or solution related to climate change.
                            </Typography>
                        </Box>
                    </Slide>
                    </Grid>
                    <Grid item md={8} sx={{ backgroundColor: "#F0F8FF", height: "100vh" }}>
                        
                        <Grid container spacing={1}>
                            
                            {categories.map(c => (
                                        <Grid item key={c.id} xs={12} sm={6} md={4}
                                            sx={{ backgroundColor: "transparent" }}>
                                            <CategoryCommentCard                                                
                                                key={c.id}
                                                id={c.id}
                                                category={c.category}
                                                content={(comments.find((comment) => comment.category === c.category)?.content) || null}
                                            />                                           
                                        </Grid>
                                    ))}
                            
                        </Grid>                     
                    </Grid>
                </Grid>

            )

            


}


export default Feedback;