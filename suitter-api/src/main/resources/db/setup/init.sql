CREATE TABLE IF NOT EXISTS users
(
    id           VARCHAR(36) NOT NULL PRIMARY KEY,
    name         VARCHAR,
    email        VARCHAR,
    password     VARCHAR,
    phone_number INT(11),
    is_private   BOOLEAN,
    icon         VARCHAR,
    created_at   TIMESTAMP,
    updated_at   TIMESTAMP
);

CREATE TABLE IF NOT EXISTS posts
(
    id         VARCHAR(36) NOT NULL PRIMARY KEY,
    user_id    VARCHAR(36) NOT NULL,
    content    VARCHAR,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id)
);