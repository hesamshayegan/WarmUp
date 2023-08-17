"use strict";

const db = require("../db");

const { sqlForPartialUpdate } = require("../helpers/sql");


class Score {


    static async record({username, category}) {
        
        const userQuery = await db.query(`
            SELECT id
            FROM users
            WHERE username = $1`, [username]);
        const user_id = (userQuery.rows[0]).id;

        const catQuery = await db.query(`
                SELECT id
                FROM quiz_category
                WHERE category = $1`, [category]);
        
        const cat_id = (catQuery.rows[0]).id;

        const score = await db.query(`
            INSERT INTO user_quiz_progress
            (user_id, cat_id, questions_answered, current_complexity)
            VALUES 
            ($1, $2, $3, $4)
            RETURNING *`,
            [user_id, cat_id, 10, 'easy'],
        );

        const result = score.rows[0]
        return result
    };



    static async update({ username, category }, data) {
        
        const { correct_answers, current_complexity } = data

        // Fetch user ID
        const userQuery = await db.query(`
            SELECT id
            FROM users
            WHERE username = $1`, [username]);
       
        const user_id = (userQuery.rows[0]).id;
        
        // Fetch category ID
        const catQuery = await db.query(`
                SELECT id
                FROM quiz_category
                WHERE category = $1`, [category]);
        
        const cat_id = (catQuery.rows[0]).id;

        // Update user_quiz_progress
        const scoreUpdated = await db.query(`
                          UPDATE user_quiz_progress 
                          SET correct_answers = $1,
                              current_complexity = $2
                          WHERE user_id = ${user_id}
                          AND cat_id = ${cat_id}
                          RETURNING *`, [ correct_answers,
                                        current_complexity ]);
                           
        const result = scoreUpdated.rows[0];

        return result
    }



}

module.exports = Score