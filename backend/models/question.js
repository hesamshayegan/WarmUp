"use strict";

const db = require("../db");


class Question {


    static async get(category) {

        
        const levelQuery = await db.query(`
                SELECT current_complexity
                FROM user_quiz_progress
        `);
        
        let currLevel = (levelQuery.rows[0]).current_complexity
        
        if (currLevel.length === 0) {
            currLevel = "easy"
        }

        else if (currLevel === "easy") {
            currLevel = "medium"
        }

        else if (currLevel === "medium") {
            currLevel = "hard"
        }
       
        const catQuery = await db.query(`
                SELECT id
                FROM quiz_category
                WHERE category = $1`, [category]);
        
        const cat_id = (catQuery.rows[0]).id;

        const questionQuery = await db.query(`
                SELECT *
                FROM questions q
                JOIN category_questions cq ON q.id = cq.question_id
                JOIN quiz_category qc ON cq.cat_id = qc.id
                WHERE qc.id = $1 AND q.complexity = $2
                `,
                 [cat_id, currLevel]);
        
        console.log('----->questionQuery.rows length', questionQuery.rows.length)
        
        return questionQuery.rows
    };


}


module.exports = Question

