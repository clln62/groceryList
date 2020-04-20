CREATE DATABASE IF NOT EXISTS Groceries;

USE Groceries;

CREATE TABLE list (
    id INT NOT NULL AUTO_INCREMENT,
    item_name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);


INSERT INTO List (item_name) VALUES ("Milk");
INSERT INTO List (item_name) VALUES ("Eggs");
INSERT INTO List (item_name) VALUES ("Cheese");
INSERT INTO List (item_name) VALUES ("Cereal");
INSERT INTO List (item_name) VALUES ("Apples");
INSERT INTO List (item_name) VALUES ("Cake");
INSERT INTO List (item_name) VALUES ("Beans");
INSERT INTO List (item_name) VALUES ("Rice");
INSERT INTO List (item_name) VALUES ("Pie");
INSERT INTO List (item_name) VALUES ("Chocolate");
INSERT INTO List (item_name) VALUES ("Pasta");