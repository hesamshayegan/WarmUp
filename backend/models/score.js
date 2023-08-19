"use strict";

const db = require("../db");


class Score {


    static async recordScore({username, category}, data) {
        
        const { correct_answers } = data

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

        const catQuestionsQuery = await db.query(`
                SELECT COUNT (*) FROM questions q
                JOIN category_questions cq ON q.id = cq.question_id
                JOIN quiz_category qc ON cq.cat_id = qc.id
                WHERE category = $1`, [category])

        const catQuestionsCount = (catQuestionsQuery.rows[0]).count
        

        const score = await db.query(`
            INSERT INTO user_quiz_progress
            (user_id, cat_id, questions_per_category, correct_answers, current_complexity)
            VALUES 
            ($1, $2, $3, $4, $5)
            RETURNING *`,
            [user_id, cat_id, catQuestionsCount, correct_answers, 'easy'],
        );

        const result = score.rows[0]
        return result
    };



    static async updateScore({ username, category }, data) {
        
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
                RETURNING *
                `, [correct_answers, current_complexity]);
                  
        const result = scoreUpdated.rows[0];

        return result
    }





    static async getCategoryScore({ username, category }) {

        //  write if there is no score!!!!!


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

        // calculate current score per category
        const questionsQuery = await db.query(`
                SELECT questions_per_category, correct_answers
                FROM user_quiz_progress
                WHERE user_id = $1
                AND cat_id = $2
                `, [ user_id, cat_id]);
        
        const { questions_per_category, correct_answers } = questionsQuery.rows[0];

        const categoryScore = correct_answers / questions_per_category

        return categoryScore
    }




    static async getTotalScore({ username }) {
        
        // Fetch user ID
        const userQuery = await db.query(`
            SELECT id
            FROM users
            WHERE username = $1`, [username]);
       
        const user_id = (userQuery.rows[0]).id;

        // calculate user's total score
        const sumScoreQuery = await db.query(`
                SELECT SUM(correct_answers)
                FROM  user_quiz_progress
                WHERE user_id = $1
                `, [ user_id ]);
        
        const sumScore = (sumScoreQuery.rows[0]).sum

        const totalQuestionsQuery = await db.query(`
                SELECT COUNT(question)
                FROM  questions
                `);

        const totalQuestions = (totalQuestionsQuery.rows[0]).count
         
        const totalScore = sumScore / totalQuestions

        return totalScore
    }






    static async getTopScore({ username }) {
        

        // Fetch user ID
        const userQuery = await db.query(`
            SELECT id
            FROM users
            WHERE username = $1`, [username]);
       
        const user_id = (userQuery.rows[0]).id;
        
        // Fetch the scores with a rank = 1
        const topRankQuery = await db.query(`
            SELECT *,
            RANK() OVER (ORDER BY correct_answers DESC) AS correct_answers_rank
            FROM
                user_quiz_progress
            WHERE user_id = $1;
            `, [ user_id ]);
        
        const topScores = [];
        for (const row of topRankQuery.rows) {
            if (Number(row.correct_answers_rank) === 1) {
                topScores.push({
                    cat_id: row.cat_id, 
                    questions_per_category: row.questions_per_category,
                    correct_answers: row.correct_answers,
                    score: row.correct_answers / row.questions_per_category
                });
            }
        }        

        return topScores
    }




}

module.exports = Score