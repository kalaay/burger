DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;


-- Create the table products.
CREATE TABLE burgers
(
    item_id int NOT NULL
    AUTO_INCREMENT,
	burger_name varchar
    (255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY
    (ited_id)
);
