"use strict";

const db = require("../db");


class Question {


    static async get(category) {
        const question = await db.query(`
            WITH selected_category AS (
                SELECT id
                FROM quiz_category
                WHERE category = $1
                LIMIT 1
            )
            SELECT q.id, q.question, q.choice_1, q.choice_2, q.choice_3, q.choice_4, q.complexity
            FROM questions q
            JOIN category_questions cq ON q.id = cq.question_id
            JOIN selected_category sc ON cq.cat_id = sc.id
            LIMIT 10`,
            [category]
        );
        return question.rows
    };

    // static async getCategory() {

    // }


}


module.exports = Question