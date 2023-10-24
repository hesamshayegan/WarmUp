import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Box, Button } from '@mui/material';
import { motion } from "framer-motion";


import plastic from "../static/images/categories/plastic.jpg"
import fossil from "../static/images/categories/fossil-fuels.jpg"
import deforestation from "../static/images/categories/deforestation.jpg"
import agriculture from "../static/images/categories/agriculture.jpg"
import transportation from "../static/images/categories/transportation.avif"
import food from "../static/images/categories/food.jpg"


const CategoryCard = ({ category, currentLevel}) => {

    const [hover, setHover] = useState(false);
    // console.log('currentLevel', currentLevel)
    return (


        <motion.div
        className="box"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        > 
            <Box            
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                sx={{
                    filter: !hover && 'grayscale(100%)',
                    margin: "6px"
                    }}                
            >
                
                    <Card sx={{ width: '100%',
                                height: "500px",
                                border: '5px solid yellow',
                                backgroundColor: "transparent",
                            }}>
                        
                        <CardActionArea >
                            
                            <Link to={`/categories/${category}`} style={{ textDecoration: "none" }}> 
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={
                                        category === "plastic"
                                        ? `${plastic}`
                                        : category === "fossil-fuels"
                                        ? `${fossil}`
                                        : category === "deforestation"
                                        ? `${deforestation}`
                                        : category === "agriculture"
                                        ? `${agriculture}`
                                        : category === "transportation"
                                        ? `${transportation}`
                                        : category === "food-production"
                                        ? `${food}`
                                        : null
                                    }
                                    alt="category type"
                                    sx={{ width: "100%" }}
                                />

                                <CardContent sx={{ height: "110px"}}>
                                    <Typography gutterBottom variant="h4" component="div" color="white" textTransform="uppercase">
                                        {category === "fossil-fuels" ? "fossil fuels"
                                        : category === "food-production" ? "food production"
                                        : category }
                                    </Typography>

                                    <Typography variant="body2" color="white">
                                        {category === "plastic" ? "How can plastic waste contaminate soil and water, threatening wildlife and ecosystems?" 
                                        : category === "fossil-fuels" ? "How can greenhouse gas emissions from fossil fuels cause sea levels to rise, threatening coastal communities and ecosystems?"
                                        : category === "deforestation" ? "How does cutting down trees make it harder for the Earth to absorb carbon dioxide from the air?"
                                        : category === "agriculture" ? "How can fertilizers and pesticides, make communities more vulnerable to natural disasters?"
                                        : category === "transportation" ? "How do cars, trucks, airplanes, and ships pollute the air and make the planet warmer?"
                                        : category === "food-production" ? "How does growing, moving, and storing food pollute the air, trap heat, and warm the planet?"
                                        : null}
                                    </Typography> 
                                </CardContent>
                                <CardActions>
                                    {currentLevel && (
                                        <Box sx ={{ display: "flex", flexDirection: "row" }}>
                                            <Typography variant="body2"
                                                        sx={{ color:"white", marginTop: "5px", textTransform: "uppercase" }}>
                                                Current Level
                                            </Typography>
                                                            
                                            <Button size="small" 
                                                    sx={{
                                                        color: "white",
                                                        borderRadius: "30px",
                                                        border: "2px solid white",
                                                        backgroundColor: currentLevel === 'medium' ? '#d3ea29' :
                                                                         currentLevel === 'hard' ? '#28fa1e' :
                                                                         currentLevel === 'easy' ? '#ea5629':
                                                                         null,
                                                        marginLeft: "10px",
                                                        marginBottom: "30px"
                                                        }}
                                            >
                                                {currentLevel === 'medium' ? 'medium' :
                                                currentLevel === 'hard' ? 'hard' :
                                                currentLevel === 'easy' ? 'easy' :
                                                null
                                                }
                                            </Button>
                                        </Box>
                                     )}
                                    
                                                                   
                                </CardActions>
                                                          
                            </Link>
                        </CardActionArea>

                    </Card>
            </Box>
        </motion.div>

    
            

    )
    
}

export default CategoryCard;