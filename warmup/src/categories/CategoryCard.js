import React from 'react';
import { Link } from "react-router-dom";

const CategoryCard = ({ category, id }) => {

    return (
        <div className="card-container">
            <div className="card-wrapper">
                <div className="card-header">
                    <div className="card-title"> 
                        <Link to={`/categories/${category}`} key={id}> { category } </Link>
                    </div>
                    <div className="card-content"> 
                    <img src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                        width="200"
                        height="200" 
                        className="card-image" 
                        alt="No image">
                    </img>
                </div>
                </div>
                
            </div>
        </div>
    )
    
}

export default CategoryCard;


// // Create a function to map category IDs to images
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