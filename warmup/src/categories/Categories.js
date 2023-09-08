import React, { useState, useEffect } from "react";
import WarmUpApi from "../api/api";
import CategotyCard from "./CategoryCard"
import Grid from '@mui/material/Grid'
import { Box } from "@mui/material";



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

        <Box display="flex" justifyContent="center">
            <Grid container spacing={2}>
                        {categories.map(c => (
                            <Grid item key={c.id} xs={12} sm={6} md={4}>
                                <CategotyCard
                                    id={c.id}
                                    category={c.category}
                                />
                            </Grid>
                        ))}
            </Grid>
        </Box>
    );
};

export default Categories;

// import React, { useState } from "react";
// import WarmUpApi from "../api/api";

// const Categories = () => {
//     const [categories, setCategories] = useState([]);

//     async function fetchCategories() {
//         try {
//             const response = await WarmUpApi.getAllCategories();
//             const fetchedCategories = response.categories;
//             setCategories(fetchedCategories);
//         } catch (error) {
//             console.error("Error fetching categories:", error);
//         }
//     }

//     // Fetch categories when the component renders
//     fetchCategories();

//     return (
//         <div>
//             <ul>
//                 {categories.map(c => (
//                     <li key={c.id}> {c.category} </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Categories;




