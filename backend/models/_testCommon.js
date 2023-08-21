const bcrypt = require("bcrypt");

const db = require("../db");
const { BCRYPT_WORK_FACTOR } = require("../config");


// In SQL, string values should be enclosed in single quotes (')
async function commonBeforeAll() {

    // Delete existing data and reset sequences
    await db.query("DELETE FROM questions"); 
    await db.query("DELETE FROM quiz_category");
    await db.query("DELETE FROM category_questions");
    await db.query("DELETE FROM users");
    
    
    // Reset sequence values for SERIAL columns
    await db.query("ALTER SEQUENCE users_id_seq RESTART WITH 1");
    await db.query("ALTER SEQUENCE quiz_category_id_seq RESTART WITH 1");
    await db.query("ALTER SEQUENCE questions_id_seq RESTART WITH 1");
    

    await db.query(`
    INSERT INTO users(username,
                      password,
                      email,
                      image_profile)
    VALUES ('u1', $1, 'u1@email.com', 'src1'),
           ('u2', $2, 'u2@email.com', 'src2')
    RETURNING username`,
    [
      await bcrypt.hash("password1", BCRYPT_WORK_FACTOR),
      await bcrypt.hash("password2", BCRYPT_WORK_FACTOR),
    ]);

    await db.query(`
    INSERT INTO quiz_category (category)
    VALUES ('plastic'),
           ('fossil-fuels'),
           ('deforestation'),
           ('agriculture'),
           ('transportation'),
           ('food-production')
    `)

    // -- questions for cateogory: plastic
    await db.query(`
      INSERT INTO questions (question, choice_1, choice_2, choice_3, choice_4, complexity)
      VALUES
        ('question1?',
        '{"answer": "1", "isCorrect": true}',
        '{"answer": "2", "isCorrect": false}',
        '{"answer": "3", "isCorrect": false}',
        '{"answer": "4", "isCorrect": false}',
        'easy'
        ),
        ('question2?',
        '{"answer": "1", "isCorrect": true}',
        '{"answer": "2", "isCorrect": false}',
        '{"answer": "3", "isCorrect": false}',
        '{"answer": "4", "isCorrect": false}',
        'easy'
        ),
        ('question3?',
        '{"answer": "1", "isCorrect": true}',
        '{"answer": "2", "isCorrect": false}',
        '{"answer": "3", "isCorrect": false}',
        '{"answer": "4", "isCorrect": false}',
        'medium'
        ),
        ('question4?',
        '{"answer": "1", "isCorrect": true}',
        '{"answer": "2", "isCorrect": false}',
        '{"answer": "3", "isCorrect": false}',
        '{"answer": "4", "isCorrect": false}',
        'medium'
        ),
        ('question5?',
        '{"answer": "1", "isCorrect": true}',
        '{"answer": "2", "isCorrect": false}',
        '{"answer": "3", "isCorrect": false}',
        '{"answer": "4", "isCorrect": false}',
        'hard'
        ),
        ('question6?',
        '{"answer": "1", "isCorrect": true}',
        '{"answer": "2", "isCorrect": false}',
        '{"answer": "3", "isCorrect": false}',
        '{"answer": "4", "isCorrect": false}',
        'hard'
        )
    `);

  await db.query(`
          INSERT INTO category_questions (cat_id, question_id)
          VALUES (1,1),
                (1,2),
                (1,3),
                (1,4),
                (1,5),
                (1,6)
  `)
  

  // -- questions for cateogory: fossil-fuels
  await db.query(`
      INSERT INTO questions (question, choice_1, choice_2, choice_3, choice_4, complexity)
      VALUES
        ('question1?',
        '{"answer": "1", "isCorrect": true}',
        '{"answer": "2", "isCorrect": false}',
        '{"answer": "3", "isCorrect": false}',
        '{"answer": "4", "isCorrect": false}',
        'easy'
        ),
        ('question2?',
        '{"answer": "1", "isCorrect": true}',
        '{"answer": "2", "isCorrect": false}',
        '{"answer": "3", "isCorrect": false}',
        '{"answer": "4", "isCorrect": false}',
        'easy'
        ),
        ('question3?',
        '{"answer": "1", "isCorrect": true}',
        '{"answer": "2", "isCorrect": false}',
        '{"answer": "3", "isCorrect": false}',
        '{"answer": "4", "isCorrect": false}',
        'medium'
        ),
        ('question4?',
        '{"answer": "1", "isCorrect": true}',
        '{"answer": "2", "isCorrect": false}',
        '{"answer": "3", "isCorrect": false}',
        '{"answer": "4", "isCorrect": false}',
        'medium'
        ),
        ('question5?',
        '{"answer": "1", "isCorrect": true}',
        '{"answer": "2", "isCorrect": false}',
        '{"answer": "3", "isCorrect": false}',
        '{"answer": "4", "isCorrect": false}',
        'hard'
        ),
        ('question6?',
        '{"answer": "1", "isCorrect": true}',
        '{"answer": "2", "isCorrect": false}',
        '{"answer": "3", "isCorrect": false}',
        '{"answer": "4", "isCorrect": false}',
        'hard'
        )
    `);


await db.query(`
  INSERT INTO category_questions (cat_id, question_id)
  VALUES (2,7),
        (2,8),
        (2,9),
        (2,10),
        (2,11),
        (2,12)
`)

}


async function commonBeforeEach() {
  await db.query("BEGIN");
  await db.query("DELETE FROM user_quiz_progress");
  await db.query("ALTER SEQUENCE user_quiz_progress_id_seq RESTART WITH 1");

}

async function commonAfterEach() {
  await db.query("ROLLBACK");
}

async function commonAfterAll() {
  await db.end();
}
  

module.exports = {
    commonBeforeAll,
    commonBeforeEach,
    commonAfterEach,
    commonAfterAll,

};