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
        

        let newLevel = ""
        
        if (levelQuery.rows.length === 0) {
            newLevel = "easy"            
        }
        
        else {

            let currLevel = (levelQuery.rows[0]).current_complexity

            if (currLevel === "easy") {
                newLevel = "medium"
            }
    
            else if (currLevel === "medium") {
                newLevel = "hard"
            }
            
        }
        
        const questionQuery = await db.query(`
                SELECT q.id, q.question, q.choice_1, q.choice_2, q.choice_3, q.choice_4, q.complexity, qc.category
                FROM questions q
                JOIN category_questions cq ON q.id = cq.question_id
                JOIN quiz_category qc ON cq.cat_id = qc.id
                WHERE qc.id = $1 AND q.complexity = $2
                `,
                 [cat_id, newLevel]);
        
        console.log('----->questionQuery.rows length', questionQuery.rows.length)
        debugger;
        return questionQuery.rows
    };


}


module.exports = Question

