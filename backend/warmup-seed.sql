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
       ('fossil-fuels'),
       ('deforestation'),
       ('agriculture'),
       ('transportation'),
       ('food-production');

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

  

-- questions for cateogory: fossil fuels
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
VALUES (2,16),
       (2,17),
       (2,18),
       (2,19),
       (2,20),
       (2,21),
       (2,22),
       (2,23),
       (2,24),
       (2,25),
       (2,26),
       (2,27),
       (2,28),
       (2,29),
       (2,30);


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
VALUES (3,31),
       (3,32),
       (3,33),
       (3,34),
       (3,35),
       (3,36),
       (3,37),
       (3,38),
       (3,39),
       (3,40),
       (3,41),
       (3,42),
       (3,43),
       (3,44),
       (3,45);

-- questions for cateogory: agricutlre
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
VALUES (4,46),
       (4,47),
       (4,48),
       (4,49),
       (4,50),
       (4,51),
       (4,52),
       (4,53),
       (4,54),
       (4,55),
       (4,56),
       (4,57),
       (4,58),
       (4,59),
       (4,60);


-- questions for cateogory: transportation
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
VALUES (5,61), 
       (5,62),
       (5,63),
       (5,64),
       (5,65),
       (5,66),
       (5,67),
       (5,68),
       (5,69),
       (5,70),
       (5,71),
       (5,72),
       (5,73),
       (5,74),
       (5,75);



-- questions for cateogory: food-production
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
VALUES (6,76), 
       (6,77),
       (6,78),
       (6,79),
       (6,80),
       (6,81),
       (6,82),
       (6,83),
       (6,84),
       (6,85),
       (6,86),
       (6,87),
       (6,88),
       (6,89),
       (6,90);