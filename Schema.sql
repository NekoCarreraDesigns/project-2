DROP DATABASE IF EXISTS travelto_db;
CREATE DATABASE travelto_db;

USE travel_db;

CREATE TABLE users
(
    id INT
    auto_increment NOT NULL,
    user_name VARCHAR
    (50),
    first_name VARCHAR
    (50),
    last_name VARCHAR
    (50),
    password VARCHAR
    (100),
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY
    (id)
);

    CREATE TABLE visits
    (
        visit_id INT NOT NULL,
        user_id VARCHAR(100) NOT NULL,
        location_id INT,
        wasVisited BOOLEAN NOT NULL DEFAULT 0
    );

    CREATE TABLE locations
    (
        location_id INT NOT NULL,
        activity_id INT,
        location_name VARCHAR(100)
    );
