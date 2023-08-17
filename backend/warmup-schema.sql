CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(25) NOT NULL,
  password TEXT NOT NULL,
  email TEXT NOT NULL
    CHECK (position('@' IN email) > 1),
  image_profile TEXT
);

CREATE TABLE quiz_category (
  id SERIAL PRIMARY KEY,
  category VARCHAR(25)
);

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  question TEXT NOT NULL,
  choice_1 JSON,
  choice_2 JSON,
  choice_3 JSON,
  choice_4 JSON,
  complexity VARCHAR(25)
);

CREATE TABLE category_questions (
  cat_id INTEGER,
  question_id INTEGER
);

CREATE TABLE user_quiz_progress (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  cat_id INTEGER,
  questions_answered INTEGER,
  correct_answers INTEGER,
  current_complexity VARCHAR(10)
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  comment_id INTEGER,
  content TEXT NOT NULL
);

ALTER TABLE category_questions ADD FOREIGN KEY (cat_id) REFERENCES quiz_category (id);

ALTER TABLE category_questions ADD FOREIGN KEY (question_id) REFERENCES questions (id);

ALTER TABLE comments ADD FOREIGN KEY (comment_id) REFERENCES user_quiz_progress (id);

ALTER TABLE user_quiz_progress ADD FOREIGN KEY (cat_id) REFERENCES quiz_category (id);

ALTER TABLE user_quiz_progress ADD FOREIGN KEY (user_id) REFERENCES users (id); 

