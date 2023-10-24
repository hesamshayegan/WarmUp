"use strict";

const db = require("../db");

const { 
    BadRequestError,
    NotFoundError,
  } = require("../expressError");

  class Comment {

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


        static async registerComment({username}, data) {
                
                const { category, content } = data
                
                // Fetch user id
                const user_id = await this.getUserId(username);

                // Fetch category id
                const cat_id = await this.getCategoryId(category);

                const commentIdQuery = await db.query(
                        `SELECT *,
                                RANK() OVER (ORDER BY score DESC) AS score_rank
                        FROM user_quiz_history
                        WHERE user_id = $1
                        AND cat_id = $2
                        LIMIT 1`,
                        [user_id, cat_id],
                        )
                
                
                if ((commentIdQuery.rows).length === 0) throw new NotFoundError(`No comment found`);
                
                let comment_id = 0
                        console.log((commentIdQuery.rows[0]))
                if (commentIdQuery.rows[0].score >= 0.8) {
                        comment_id = (commentIdQuery.rows[0]).id;
                        debugger;                      
                } else {
                        throw new BadRequestError(`The highest score=${Math.round((commentIdQuery.rows[0]).score * 100)}% is less than 80%`);
                }
                
                
                // Check if there is already a comment for the specific cateogry

                const commentQuery = await db.query(`
                        SELECT comment_id
                        FROM comments c
                        JOIN user_quiz_history uqh ON uqh.id = c.comment_id
                        WHERE user_id = $1
                        AND cat_id = $2`,
                        [user_id, cat_id],
                        )

                if (commentQuery.rows.length !== 0) {
                throw new BadRequestError(`a comment already registered by: username: ${username} and category:${category}`);
                }

                const comment = await db.query(`
                        INSERT INTO comments
                        (comment_id, content)
                        VALUES 
                        ($1, $2)
                        RETURNING *`,
                        [comment_id,
                        content],
                        );

                
                const result = comment.rows[0]
                return result

        }


        static async getCommentId({username}, data){
            
            const category = data
            
            // Fetch user id
            const user_id = await this.getUserId(username);

            // Fetch category id
            const cat_id = await this.getCategoryId(category);

            const commentIdQuery = await db.query(
                `SELECT comment_id
                FROM comments c
                JOIN user_quiz_history uqh ON c.comment_id = uqh.id
                WHERE uqh.user_id = $1
                AND uqh.cat_id = $2`,
                [user_id, cat_id],
                )
        
            if ((commentIdQuery.rows).length === 0) throw new NotFoundError(`No comment found`);
        
            const comment_id = (commentIdQuery.rows[0]).comment_id;
            
            return comment_id

        }




        static async editComment({username}, data) {
                    
            const { category, content } = data
            
            // Fetch comment id
            const comment_id = await this.getCommentId({username}, category);

            const commentUpdated = await db.query(`
                    UPDATE comments 
                    SET content = $1
                    WHERE comment_id = $2
                    RETURNING *
                    `, [content,
                        comment_id]);
                        

            const result = commentUpdated.rows[0]
            return result

        }




        static async removeComment({username}, data) {

            const category = data

            const comment_id = await this.getCommentId({username}, category);

            await db.query(
                `DELETE
                FROM comments
                WHERE comment_id = $1`,
                [comment_id]);
        }



        static async getComment(username) {

            // Fetch user id
            const user_id = await this.getUserId(username);
            
            const commentIdQuery = await db.query(
                `SELECT c.*, uqh.user_id, uqh.cat_id, uqh.score, uqh.time_stamp, qc.category
                FROM comments c
                JOIN user_quiz_history uqh ON uqh.id = c.comment_id
                JOIN quiz_category qc ON uqh.cat_id = qc.id
                WHERE uqh.user_id = $1`,
                [user_id],
                )
                
        //     if ((commentIdQuery.rows).length === 0) throw new NotFoundError(`No comment found`);


            const result = commentIdQuery.rows            
            return result
            
        }
        
        
        static async getAllComment() {
               
                const commentIdQuery = await db.query(
                    `SELECT *
                    FROM comments
                    `,
                    )
                    
                if ((commentIdQuery.rows).length === 0) throw new NotFoundError(`No comment found`);
    
    
                const result = commentIdQuery.rows            
                return result
                
            }  


}


module.exports = Comment