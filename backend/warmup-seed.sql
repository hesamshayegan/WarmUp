INSERT INTO users (username, password, email, image_profile)
VALUES ('testuser',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'test@test.com',
        'image'),
        ('testuser2',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'test2@test2.com',
        'image2');

-- cateogories 
INSERT INTO quiz_category (category)
VALUES ('plastic'),
       ('fossil fuels'),
       ('deforestation'),
       ('agriculture'),
       ('transportation'),
       ('food production');

-- questions for cateogory: plastic
INSERT INTO questions (question, choice_1, choice_2, choice_3, choice_4, complexity)
VALUES
(
    'question1?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'easy'
),
(
    'question2?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'easy'
),  
(
    'question3?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'easy'
),  
(
    'question4?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'easy'
),  
(
    'question5?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'easy'
),  
(
    'question1?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'medium'
),  
(
    'question2?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'medium'
),  
(
    'question3?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'medium'
),  
(
    'question4?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'medium'
),  
(
    'question5?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'medium'
),  
(
    'question1?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'hard'
),  
(
    'question2?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'hard'
),  
(
    'question3?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'hard'
),  
(
    'question4?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'hard'
),  
(
    'question5?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'hard'
);

INSERT INTO category_questions (cat_id, question_id)
VALUES (1,1),
       (1,2),
       (1,3),
       (1,4),
       (1,5),
       (1,6),
       (1,7),
       (1,8),
       (1,9),
       (1,10),
       (1,11),
       (1,12),
       (1,13),
       (1,14),
       (1,15);

  

-- questions for cateogory: deforestation
INSERT INTO questions (question, choice_1, choice_2, choice_3, choice_4, complexity)
VALUES
(
    'question1?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'easy'
),
(
    'question2?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'easy'
),  
(
    'question3?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'easy'
),  
(
    'question4?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'easy'
),  
(
    'question5?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'easy'
),  
(
    'question1?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'medium'
),  
(
    'question2?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'medium'
),  
(
    'question3?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'medium'
),  
(
    'question4?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'medium'
),  
(
    'question5?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'medium'
),  
(
    'question1?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'hard'
),  
(
    'question2?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'hard'
),  
(
    'question3?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'hard'
),  
(
    'question4?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'hard'
),  
(
    'question5?',
    '{"answer": "1", "isCorrect": true}',
    '{"answer": "2", "isCorrect": false}',
    '{"answer": "3", "isCorrect": false}',
    '{"answer": "4", "isCorrect": false}',
    'hard'
);

INSERT INTO category_questions (cat_id, question_id)
VALUES (3,16),
       (3,17),
       (3,18),
       (3,19),
       (3,20),
       (3,21),
       (3,22),
       (3,23),
       (3,24),
       (3,25),
       (3,26),
       (3,27),
       (3,28),
       (3,29),
       (3,30);

