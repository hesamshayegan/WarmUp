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

-- questiosn for cateogory: plastic
INSERT INTO questions (question, choice_1, choice_2, choice_3, choice_4, complexity)
VALUES
  (
    'Does banning single-use plastic even make a dent in the bigger problem of climate change?',
    '{"answer": "Yes, it exerts pressure on the fossil fuel industry and encourages reuse.", "isCorrect": true}',
    '{"answer": "No, plastic bans have no significant impact on climate change.", "isCorrect": false}',
    '{"answer": "Banning plastic harms the economy and doesn''t address climate change.", "isCorrect": false}',
    '{"answer": "Climate change isn''t related to plastic bans.", "isCorrect": false}',
    'low'
  ),
  (
    'What are microplastics, and what kind of plastic is most likely to become a microplastic?',
    '{"answer": "Microplastics are small electronics made of plastic material.", "isCorrect": false}',
    '{"answer": "Microplastics are small bits of broken glass.", "isCorrect": false}',
    '{"answer": "Microplastics are tiny plastic particles and microbeads from products.", "isCorrect": true}',
    '{"answer": "Microplastics are rubber-like plastics used in footwear.", "isCorrect": false}',
    'medium'
  ),
  (
    'Which of the following is a major source of greenhouse gas emissions from the plastic industry?',
    '{"answer": "The extraction of fossil fuels", "isCorrect": true}',
    '{"answer": "The production of plastic products.", "isCorrect": false}',
    '{"answer": "The disposal of plastic waste.", "isCorrect": false}',
    '{"answer": "All of the above", "isCorrect": true}',
    'medium'
  ),
  (
    '2Does banning single-use plastic even make a dent in the bigger problem of climate change?',
    '{"answer": "Yes, it exerts pressure on the fossil fuel industry and encourages reuse.", "isCorrect": true}',
    '{"answer": "No, plastic bans have no significant impact on climate change.", "isCorrect": false}',
    '{"answer": "Banning plastic harms the economy and doesn''t address climate change.", "isCorrect": false}',
    '{"answer": "Climate change isn''t related to plastic bans.", "isCorrect": false}',
    'low'
  ),
  (
    '2What are microplastics, and what kind of plastic is most likely to become a microplastic?',
    '{"answer": "Microplastics are small electronics made of plastic material.", "isCorrect": false}',
    '{"answer": "Microplastics are small bits of broken glass.", "isCorrect": false}',
    '{"answer": "Microplastics are tiny plastic particles and microbeads from products.", "isCorrect": true}',
    '{"answer": "Microplastics are rubber-like plastics used in footwear.", "isCorrect": false}',
    'medium'
  ),
  (
    '2Which of the following is a major source of greenhouse gas emissions from the plastic industry?',
    '{"answer": "The extraction of fossil fuels", "isCorrect": true}',
    '{"answer": "The production of plastic products.", "isCorrect": false}',
    '{"answer": "The disposal of plastic waste.", "isCorrect": false}',
    '{"answer": "All of the above", "isCorrect": true}',
    'medium'
  ),
  (
    '3Does banning single-use plastic even make a dent in the bigger problem of climate change?',
    '{"answer": "Yes, it exerts pressure on the fossil fuel industry and encourages reuse.", "isCorrect": true}',
    '{"answer": "No, plastic bans have no significant impact on climate change.", "isCorrect": false}',
    '{"answer": "Banning plastic harms the economy and doesn''t address climate change.", "isCorrect": false}',
    '{"answer": "Climate change isn''t related to plastic bans.", "isCorrect": false}',
    'low'
  ),
  (
    '3What are microplastics, and what kind of plastic is most likely to become a microplastic?',
    '{"answer": "Microplastics are small electronics made of plastic material.", "isCorrect": false}',
    '{"answer": "Microplastics are small bits of broken glass.", "isCorrect": false}',
    '{"answer": "Microplastics are tiny plastic particles and microbeads from products.", "isCorrect": true}',
    '{"answer": "Microplastics are rubber-like plastics used in footwear.", "isCorrect": false}',
    'medium'
  ),
  (
    '3Which of the following is a major source of greenhouse gas emissions from the plastic industry?',
    '{"answer": "The extraction of fossil fuels", "isCorrect": true}',
    '{"answer": "The production of plastic products.", "isCorrect": false}',
    '{"answer": "The disposal of plastic waste.", "isCorrect": false}',
    '{"answer": "All of the above", "isCorrect": true}',
    'medium'
  ),
  (
    '4Does banning single-use plastic even make a dent in the bigger problem of climate change?',
    '{"answer": "Yes, it exerts pressure on the fossil fuel industry and encourages reuse.", "isCorrect": true}',
    '{"answer": "No, plastic bans have no significant impact on climate change.", "isCorrect": false}',
    '{"answer": "Banning plastic harms the economy and doesn''t address climate change.", "isCorrect": false}',
    '{"answer": "Climate change isn''t related to plastic bans.", "isCorrect": false}',
    'low'
  ),
  (
    '4What are microplastics, and what kind of plastic is most likely to become a microplastic?',
    '{"answer": "Microplastics are small electronics made of plastic material.", "isCorrect": false}',
    '{"answer": "Microplastics are small bits of broken glass.", "isCorrect": false}',
    '{"answer": "Microplastics are tiny plastic particles and microbeads from products.", "isCorrect": true}',
    '{"answer": "Microplastics are rubber-like plastics used in footwear.", "isCorrect": false}',
    'medium'
  ),
  (
    '4Which of the following is a major source of greenhouse gas emissions from the plastic industry?',
    '{"answer": "The extraction of fossil fuels", "isCorrect": true}',
    '{"answer": "The production of plastic products.", "isCorrect": false}',
    '{"answer": "The disposal of plastic waste.", "isCorrect": false}',
    '{"answer": "All of the above", "isCorrect": true}',
    'medium'
  ),
   (
    '5What are microplastics, and what kind of plastic is most likely to become a microplastic?',
    '{"answer": "Microplastics are small electronics made of plastic material.", "isCorrect": false}',
    '{"answer": "Microplastics are small bits of broken glass.", "isCorrect": false}',
    '{"answer": "Microplastics are tiny plastic particles and microbeads from products.", "isCorrect": true}',
    '{"answer": "Microplastics are rubber-like plastics used in footwear.", "isCorrect": false}',
    'medium'
  ),
   (
    '6What are microplastics, and what kind of plastic is most likely to become a microplastic?',
    '{"answer": "Microplastics are small electronics made of plastic material.", "isCorrect": false}',
    '{"answer": "Microplastics are small bits of broken glass.", "isCorrect": false}',
    '{"answer": "Microplastics are tiny plastic particles and microbeads from products.", "isCorrect": true}',
    '{"answer": "Microplastics are rubber-like plastics used in footwear.", "isCorrect": false}',
    'medium'
  );

-- questiosn for cateogory: deforestation
INSERT INTO questions (question, choice_1, choice_2, choice_3, choice_4, complexity)
VALUES
  (
    'how much of the world''s heat-trapping emissions come from tropical deforestation?',
    '{"answer": "5%", "isCorrect": false}',
    '{"answer": "10%", "isCorrect": true}',
    '{"answer": "15%", "isCorrect": false}',
    '{"answer": "20%", "isCorrect": false}',
    'low'
  );


-- questiosn for cateogory: agriculture
INSERT INTO questions (question, choice_1, choice_2, choice_3, choice_4, complexity)
VALUES
  (
    'What are some of the things that farmers can do to adapt to climate change?',
    '{"answer": "Choose crops that are more resilient to heat and drought", "isCorrect": false}',
    '{"answer": "Use water more efficiently", "isCorrect": false}',
    '{"answer": "Adopt new farming practices", "isCorrect": false}',
    '{"answer": "Invest in crop insurance", "isCorrect": true}',
    'low'
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
       (3,4),
       (4,5);



        