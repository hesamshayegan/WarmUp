import React, { useState, useEffect, useContext } from "react";
import UserContext from '../common/UserContext';
import ScoreContext from '../common/ScoreContext';
import WarmUpApi from "../api/api";
import CategoryCard from "./CategoryCard"
import Grid from '@mui/material/Grid'
import "./Categories.css";
import { Typography, Box } from "@mui/material";


const Categories = () => {
    const [categories, setCategories] = useState([]);
    const { currentUser } = useContext(UserContext);
    const { scores, setScores } = useContext(ScoreContext); 

    

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
        if (currentUser) {
            async function fetchCurrentScores() {
                try {
                    const username = currentUser.username;
                    const fetchedCurrentScores = await WarmUpApi.getCurrentScores(username);
                    setScores(fetchedCurrentScores);
                } catch (error) {
                    console.error("Error fetching current scores:", error);
                }
            }
            
            fetchCurrentScores();
        }
    }, [currentUser]);
            
    console.log('scores',scores)


    function findCurrentLevel(id) {
        if (scores) {            
          const currLevel = scores.find((cat) => cat.id === id);
          return currLevel ? currLevel.currComplexity : '';
        }
        return '';
    }
    

    console.log("cursor before", document.body.style.cursor) 

    // Reset cursor to default when the component unmounts
    useEffect(() => {

        return () => {

          document.body.style.cursor = "default";

        };
    }, []);

    console.log("cursor", document.body.style.cursor)
    return (

            <div className="page-wrapper">
                <Box  sx={{ display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center" }}
                > 
                    <Typography variant="h4" 
                                sx={{ color: "white",                                
                                    fontWeight: "bold",
                                    margin: "15px",                                
                                    textAlign: 'center'}}
                    >
                        Which topic are you more curious about? 
                    </Typography>
                    <Typography variant="h5"
                                sx={{ color: "white",                                
                                    fontWeight: "bold",
                                    margin: "15px",                                
                                    textAlign: 'center'}}>
                        Take a quiz to test your knowledge and learn something new!
                    </Typography>
                </Box>
                
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    style={{ minHeight: "100vh" }}     
                >
                    <Grid container spacing={2} sx={{ width: '80%', marginTop: "20px" }} >
                        {categories.map(c => {
                            const currLevel = findCurrentLevel(c.id);
                            return (
                                <Grid item key={c.id} xs={12} sm={6} md={4} sx={{ backgroundColor: "transparent" }}>
                                    <CategoryCard
                                        id={c.id}
                                        category={c.category}
                                        currentLevel={currLevel}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </div>

    );
};

export default Categories;
