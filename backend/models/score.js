"use strict";

const db = require("../db");

const { 
        BadRequestError,
        NotFoundError,
        UnauthorizedError
      } = require("../expressError");

class Score {



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
    

    // record a score
    static async recordScore({username, category}, data) {
        
        const { correct_answers, current_complexity } = data

        // Fetch user id
        const user_id = await this.getUserId(username);
        
        // Fetch category id
        const cat_id = await this.getCategoryId(category);


        const duplicateCheck = await db.query(
                `SELECT user_id, cat_id
                FROM user_quiz_progress
                WHERE user_id = $1
                AND cat_id = $2`,
                [user_id, cat_id],
                )
        
        if (duplicateCheck.rows[0]) {
            throw new BadRequestError(`Duplicate record for user_id:${user_id} and cat_id:${cat_id}`);
        }

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
                [user_id,
                cat_id,
                catQuestionsCount,
                correct_answers,
                current_complexity],
                );

        const result = score.rows[0]
        return result
    };



    // Get a record 

    static async getRecord({username, category}) {
        
        // Fetch user id
        const user_id = await this.getUserId(username);
        
        // Fetch category id
        const cat_id = await this.getCategoryId(category);

        const record = await db.query(
                `SELECT *
                FROM user_quiz_progress
                WHERE user_id = $1
                AND cat_id = $2`,
                [user_id, cat_id],
                )

        if ((record.rows).length === 0) throw new NotFoundError(`No score found`);

        const result = record.rows[0];

        return result
            
    }

    // update a record

    static async updateScore({ username, category }, data) {
        
        const { correct_answers } = data

        // Fetch user id
        const user_id = await this.getUserId(username);
        
        // Fetch category id
        const cat_id = await this.getCategoryId(category);

        // Fetch current complexity and change it accordingly
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

        else {
            newLevel = "hard"
        }

        // Update user_quiz_progress
        const scoreUpdated = await db.query(`
                UPDATE user_quiz_progress 
                SET correct_answers = $1,
                    current_complexity = $2
                WHERE user_id = $3
                AND cat_id = $4
                RETURNING *
                `, [correct_answers,
                    newLevel,
                    user_id,
                    cat_id]);
        
        if ((scoreUpdated.rows).length === 0) throw new NotFoundError(`No score found`);

        const result = scoreUpdated.rows[0];

        return result
    }


    static async getCategoryScore({ username, category }) {

        // Fetch user id
        const user_id = await this.getUserId(username);
        
        // Fetch category id
        const cat_id = await this.getCategoryId(category);

        // calculate current score per category
        const questionsQuery = await db.query(`
                SELECT questions_per_category, correct_answers
                FROM user_quiz_progress
                WHERE user_id = $1
                AND cat_id = $2
                `, [ user_id, cat_id]);
        
        
        if ((questionsQuery.rows).length === 0) throw new NotFoundError(`No score found`);
        const { questions_per_category, correct_answers } = questionsQuery.rows[0];

        const categoryScore = correct_answers / questions_per_category

        return categoryScore
    }




    static async getTotalScore({ username }) {
        

        // Fetch user id
        const user_id = await this.getUserId(username);

        // Calculate user's total score
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

        // Fetch user id
        const user_id = await this.getUserId(username);
        
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
                    topScore: row.correct_answers / row.questions_per_category
                });
            }
        }
        
        if (topScores.length === 0) throw new NotFoundError(`No score found`);

        return topScores
    }



    static async getAllUsersTopScores() {

        // Fetch all users
        const usersQuery = await db.query(`
                SELECT username
                FROM users       
                `)

        const allUsersTopScores = []
        // Iterate through each user and fetch their top scores
        // not found score case handling is already implemented in the getTopScore method
        
        for (const userRow of usersQuery.rows)  {
  
            const topScores = await this.getTopScore({ username: userRow.username });

            if(topScores.length !== 0) {

                allUsersTopScores.push({ username: userRow.username,
                                         topScore: (topScores[0]).topScore })
            }    
        }

        return allUsersTopScores
    }



    // remove a record
    static async remove({username, category}) {

        // Fetch user id
        const user_id = await this.getUserId(username);
                
        // Fetch category id
        const cat_id = await this.getCategoryId(category);


        // Check if the record exists before attempting to delete it
        const recordQuery = await db.query(
                `SELECT id
                FROM user_quiz_progress
                WHERE user_id = $1
                AND cat_id = $2`,
                [user_id, cat_id],
        );

        if (recordQuery.rows.length === 0) {
            throw new NotFoundError(`No record found for user: ${username}, category: ${category}`);
        }

        
        await db.query(
              `DELETE
               FROM user_quiz_progress
               WHERE user_id = $1
               AND cat_id = $2`,
               [user_id, cat_id],
        );

    }

}

module.exports = Score