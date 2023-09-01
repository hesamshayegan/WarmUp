import React from "react";
import { Link, useParams } from "react-router-dom";
import categoryData from "./CategoryData";


const CategoryInfo = () => {


    const { id } = useParams();
    const categories = categoryData
    
    const categoryInfo = categories.find(cat => cat.id === Number(id));

    return (
        <div className="category-container">
            <div className="category-info">
                <h1> {categoryInfo.name} </h1>
                <p> {categoryInfo.info} </p>
            </div>
            
            <div className="category-container">
                <p> Wanna a take quiz ?</p>
                <Link to={`quiz/categories/${id}/`} key={id}> { categoryInfo.name } </Link>

            </div>
        

        </div>
        
    )

}


export default CategoryInfo
