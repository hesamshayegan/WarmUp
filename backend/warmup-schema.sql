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
  question_id INTEGER,
  FOREIGN KEY (cat_id) REFERENCES quiz_category (id) ON DELETE CASCADE,
  FOREIGN KEY (question_id) REFERENCES questions (id) ON DELETE CASCADE
);

CREATE TABLE user_quiz_progress (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  cat_id INTEGER,
  questions_per_category INTEGER, 
  correct_answers INTEGER,
  current_complexity VARCHAR(10),
  FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
  FOREIGN KEY (cat_id) REFERENCES quiz_category (id),
  UNIQUE (user_id, cat_id)
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  comment_id INTEGER,
  content TEXT NOT NULL,
  FOREIGN KEY (comment_id) REFERENCES user_quiz_progress (id) ON DELETE CASCADE,
  UNIQUE (comment_id)
);