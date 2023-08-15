"use strict";

const db = require("../db");


class Score {


    static async record({username, category}) {

        const cat = await db.query(`
                SELECT id
                FROM quiz_category
                WHERE category = $1`, [category]);
        
        const cat_id = (cat.rows[0]).id;

        const user = await db.query(`
            SELECT id
            FROM users
            WHERE username = $1`, [username]);
        const user_id = (user.rows[0]).id;
        
        const score = await db.query(`
            INSERT INTO user_quiz_progress
            (user_id, cat_id, questions_answered)
            VALUES 
            ($1, $2, $3)
            RETURNING *`,
            [user_id, cat_id, 10],
        );

        return score.rows[0]
    };



    



}

module.exports = Score

// id SERIAL PRIMARY KEY,
//   user_id INTEGER,
//   cat_id INTEGER,
//   questions_answered INTEGER,
//   questions_correct INTEGER