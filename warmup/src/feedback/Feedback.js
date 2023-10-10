import React, { useContext, useState, useEffect } from "react";
import UserContext from '../common/UserContext';
import { Box, Grid, Typography, Link} from "@mui/material";
import WarmUpApi from "../api/api";
import CommentForm from "./CommentForm"

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
                
                <Grid container sx={{ height: "100vh" }}>
                    <Grid item md={4} sx={{ backgroundColor: "grey"}}>                                  
                    <Box
                        sx={{           
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-around",
                            alignItems: "center",
                            backgroundColor: "grey",
                        }}
                    >
                        <Typography> Share your feedback for the categories you got a badge </Typography>                        
                                
                        </Box>
                    </Grid>
                    <Grid item md={8} sx={{ height: "100vh"}}>
                        
                        <Grid container spacing={2} sx={{ margin: "5px" }}>
                            {categories.map(c => (
                                        <Grid item key={c.id} xs={12} sm={6} md={4}
                                            sx={{ backgroundColor: "transparent" }}>
                                            <CategoryCommentCard
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