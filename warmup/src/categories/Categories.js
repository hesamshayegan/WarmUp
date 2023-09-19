import React, { useState, useEffect } from "react";
import WarmUpApi from "../api/api";
import CategotyCard from "./CategoryCard"
import Grid from '@mui/material/Grid'
import AnimCursor from "../common/AnimatedCursor"
import "./Categories.css";
import { Typography, Box } from "@mui/material";


const Categories = () => {
    const [categories, setCategories] = useState([]);

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
                <AnimCursor />
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    style={{ minHeight: "100vh" }}     
                >
                    <Grid container spacing={2} sx={{ width: '80%', marginTop: "20px" }} >
                                {categories.map(c => (
                                    <Grid  className="container*********************" item key={c.id} xs={12} sm={6} md={4}
                                        sx={{ backgroundColor: "transparent" }}>
                                        <CategotyCard
                                            id={c.id}
                                            category={c.category}
                                        />
                                    </Grid>
                                ))}
                    </Grid>
                </Grid>
            </div>

    );
};

export default Categories;
