import React, { useState, useEffect } from "react";
import WarmUpApi from "../api/api";
import CategotyCard from "./CategoryCard"
import Grid from '@mui/material/Grid'


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


        <Grid
      container
      justifyContent="center" // Center horizontally
      alignItems="center"     // Center vertically
      style={{ height: "100vh" }} // Set a minimum height for vertical centering
    >
            <Grid container spacing={1} sx={{ width: '75%' }} >
                        {categories.map(c => (
                            <Grid  item key={c.id} xs={12} sm={6} md={4}>
                                <CategotyCard
                                    id={c.id}
                                    category={c.category}
                                />
                            </Grid>
                        ))}
            </Grid>
            </Grid>
        
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




