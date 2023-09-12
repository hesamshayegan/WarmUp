import React from 'react';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Box } from "@mui/material";

const CategoryCard = ({ category}) => {

    return (

        
        <Box display="flex" justifyContent="center" sx={{ alignContent: 'stretch' }}>
            <Card sx={{ width: '60%' }}>

                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image="https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                    alt="green iguana"
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {category}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            Description....
                        </Typography>
                    </CardContent>   
                </CardActionArea>

                <CardActions>
                    <Button size="small" color="primary">
                        <Link to={`/categories/${category}`}> 
                            {category}
                        </Link>
                    </Button>
                </CardActions>

            </Card>
        </Box>

    
            

    )
    
}

export default CategoryCard;


// Create a function to map category IDs to images
// const getCategoryImage = (categoryId) => {
//     // You can implement logic here to map category IDs to image variables
//     switch (categoryId) {
//         case 1:
//             return categoryImage1;
//         case 2:
//             return categoryImage2;
//         case 3:
//             return categoryImage3;
//         // Add more cases for additional categories
//         default:
//             return null; // Return a default image if needed
//     }
// };

// return (
//     <div>
//         <ul>
//             {categories.map(c => (
//                 <li key={c.id}>
//                     <img src={getCategoryImage(c.id)} alt={c.category} />
//                     {c.category}
//                 </li>
//             ))}
//         </ul>
//     </div>
// );
// };

