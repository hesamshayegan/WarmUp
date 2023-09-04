import React, { useState, useEffect } from "react";
import WarmUpApi from "../api/api";
import CategotyCard from "./CategoryCard"

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
        <div className="category-container">

                {categories.map(c => (
                    <CategotyCard
                        key={c.id}
                        id={c.id}
                        category={c.category}
                    />
                ))}

        </div>
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
