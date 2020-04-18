CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(200),
  last_name VARCHAR(200),
  instagram_handle VARCHAR(200),
  description VARCHAR(1600),
  email_address VARCHAR(400),
  hashtags VARCHAR(500),
  filepath VARCHAR(600)
);