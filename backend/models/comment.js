"use strict";

const db = require("../db");

const { 
    BadRequestError,
    NotFoundError,
    UnauthorizedError
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



    static async registerComment({username, category}, data) {
            
            const { content } = data
            
            // Fetch user id
            const user_id = await this.getUserId(username);
    
            // Fetch category id
            const cat_id = await this.getCategoryId(category);

            const commentIdQuery = await db.query(
                    `SELECT id
                    FROM user_quiz_progress
                    WHERE user_id = $1
                    AND cat_id = $2`,
                    [user_id, cat_id],
                    )
            
            if ((commentIdQuery.rows).length === 0) throw new NotFoundError(`No score found`);

            const comment_id = (commentIdQuery.rows[0]).id;

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



    static async getCommentId({ username, category }){

            // Fetch user id
            const user_id = await this.getUserId(username);

            // Fetch category id
            const cat_id = await this.getCategoryId(category);

            const commentIdQuery = await db.query(
                `SELECT comment_id
                FROM comments c
                JOIN user_quiz_progress uqp ON c.comment_id = uqp.id
                WHERE uqp.user_id = $1
                AND uqp.cat_id = $2`,
                [user_id, cat_id],
                )
        
            if ((commentIdQuery.rows).length === 0) throw new NotFoundError(`No score found`);

            const comment_id = (commentIdQuery.rows[0]).comment_id;
            
            return comment_id

    }




    static async editComment({username, category}, data) {
                    
            const { content } = data
            
            // Fetch comment id
            const comment_id = await this.getCommentId({username, category});

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




    static async removeComment({username, category}) {

            const comment_id = await this.getCommentId({username, category});

            await db.query(
                `DELETE
                FROM comments
                WHERE comment_id = $1`,
                [comment_id]);
    }
    
}


module.exports = Comment