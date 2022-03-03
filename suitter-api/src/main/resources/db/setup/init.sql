CREATE TABLE IF NOT EXISTS users
(
    id           VARCHAR(36) NOT NULL PRIMARY KEY,
    name         VARCHAR,
    email        VARCHAR NOT NULL,
    password     VARCHAR NOT NULL,
    phone_number VARCHAR,
    is_private   BOOLEAN DEFAULT FALSE,
    icon         VARCHAR,
    created_at   LONG,
    updated_at   LONG
);

CREATE TABLE IF NOT EXISTS posts
(
    id         VARCHAR(36) NOT NULL PRIMARY KEY,
    user_id    VARCHAR(36) NOT NULL,
    content    VARCHAR,
    created_at LONG,
    updated_at LONG,
    FOREIGN KEY (user_id) REFERENCES users (id)
);