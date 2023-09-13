"use strict";

const db = require("../db");

const { 
        BadRequestError,
        NotFoundError
      } = require("../expressError");

const moment = require('moment');


const { getAllCategories } = require("./question");




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
            throw new BadRequestError(`Duplicate record for username:${username} and category:${category}`);
        }

        const catQuestionsQuery = await db.query(`
                SELECT COUNT (*) FROM questions q
                JOIN category_questions cq ON q.id = cq.question_id
                JOIN quiz_category qc ON cq.cat_id = qc.id
                WHERE category = $1`, [category])

        const catQuestionsCount = (catQuestionsQuery.rows[0]).count
        

        const record = await db.query(`
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

        const currentRecord = record.rows[0];                   
        
        return currentRecord
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

        if ((record.rows).length === 0) {
            console.debug("No score found")
        }

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
            throw new BadRequestError(`record already registered:${username} and category:${category}`);
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

        // register the score in the user's score history if the complexity is hard
        if (newLevel === 'hard') {

            const registerToHistory = await this.recordScoreHistory({username, category}); 

        }

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



    static async getAllCurrentScores({ username }) {

        // Fetch user id
        const user_id = await this.getUserId(username);
        
        // Fetch all cateogies
        const categories = await getAllCategories()

        const userScores = [];

        // Call fetchCategoryScores to populate userScores
        await fetchCategoryScores(user_id);

        async function fetchCategoryScores(user_id) {

            for (const category of categories) {
                const { id: cat_id, category: categoryName } = category;
                let categoryScore = 0
                
                // calculate current score per category
                const questionsQuery = await db.query(`
                SELECT questions_per_category, correct_answers
                FROM user_quiz_progress
                WHERE user_id = $1
                AND cat_id = $2
                `, [ user_id, cat_id]);

                if (questionsQuery.rows.length === 0) {
                        categoryScore
                } else {
                        const { questions_per_category, correct_answers } = questionsQuery.rows[0];
                        categoryScore = correct_answers / questions_per_category;
                }

                userScores.push({
                    id: cat_id,
                    category: categoryName,
                    currentScore: categoryScore,
                });
            }
        };

        return userScores;

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
    static async removeRecord({username, category}) {

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


    /******************************* Score History */


    // register a record to score history table
    static async recordScoreHistory({username, category}) {

        // Fetch user id
        const user_id = await this.getUserId(username);
        
        // Fetch category id
        const cat_id = await this.getCategoryId(category);

        const recordQuery = await db.query(`
                SELECT * 
                FROM user_quiz_progress
                WHERE user_id = $1
                AND cat_id = $2`,
                [user_id, cat_id],
                )

        if ((recordQuery.rows).length === 0) throw new NotFoundError(`No score found`);
        
        const record = recordQuery.rows[0];

        if (record.current_complexity === 'hard') {

            const currentScore = record.correct_answers / record.questions_per_category;

            // Get the current timestamp in the required format
            const timestampFormatted = moment().format('YYYY-MM-DD, h:mm:ss');

            const registerRecord = await db.query(
                `INSERT INTO user_quiz_history
                (user_id, cat_id, score, time_stamp)
                VALUES 
                ($1, $2, $3, $4)`,
                [user_id, cat_id, currentScore, timestampFormatted]
                );

            const result = registerRecord.rows

            return result

            }
        
    }


    // get all the score history for a cateogry
    static async getScoreHistory({username, category}) {
        console.log('works')
        // Fetch user id
        const user_id = await this.getUserId(username);
        
        // Fetch category id
        const cat_id = await this.getCategoryId(category);

        const historyQuery = await db.query(`
                SELECT * 
                FROM user_quiz_history
                WHERE user_id = $1
                AND cat_id = $2
                `,
                [user_id, cat_id],
                )

        const result = historyQuery.rows;
        

        if (result.length === 0) throw new NotFoundError(`No score found`);

        return result;

    }
}

module.exports = Score