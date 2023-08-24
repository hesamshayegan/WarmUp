"use strict";

const db = require("../db");

const { 
    NotFoundError
  } = require("../expressError");





class Question {


    static async getUserId(username) {
        
        const userQuery = await db.query(`
                SELECT id
                FROM users
                WHERE username = $1`, [username]);

        if ((userQuery.rows).length === 0) throw new NotFoundError(`No user: ${username}`);

        const user_id = (userQuery.rows[0]).id;
    
        return user_id
    }



    static async getCategoryId(category) {
        
        const catQuery = await db.query(`
                SELECT id
                FROM quiz_category
                WHERE category = $1`, [category]);

        if ((catQuery.rows).length === 0) throw new NotFoundError(`No category: ${category}`);

        const cat_id = (catQuery.rows[0]).id;
    
        return cat_id
    }


    // get all categories
    static async getAllCategories() {

        const catQuery = await db.query(`
                SELECT *
                FROM quiz_category`)

        return catQuery.rows
    }




    // get questions for a category based on current level of complexity
    static async getQuestions({username, category}) {

        // Fetch user id
        const user_id = await this.getUserId(username);
        
        // Fetch category id
        const cat_id = await this.getCategoryId(category);


        const levelQuery = await db.query(`
                SELECT current_complexity
                FROM user_quiz_progress
                WHERE user_id = $1
                AND cat_id = $2`,
                [user_id, cat_id],
                );
        
        // Check if the record exists before getting new questions
        if (levelQuery.rows.length === 0) {
            throw new NotFoundError(`No record found for user: ${username}, category: ${category}`);
        }
        

        let currLevel = (levelQuery.rows[0]).current_complexity
        let newLevel = ""


        if (currLevel === "easy") {
            newLevel = "medium"
        }

        else if (currLevel === "medium") {
            newLevel = "hard"
        }
       

        const questionQuery = await db.query(`
                SELECT *
                FROM questions q
                JOIN category_questions cq ON q.id = cq.question_id
                JOIN quiz_category qc ON cq.cat_id = qc.id
                WHERE qc.id = $1 AND q.complexity = $2
                `,
                 [cat_id, newLevel]);
        
        console.log('----->questionQuery.rows length', questionQuery.rows.length)
        
        return questionQuery.rows
    };


}


module.exports = Question

