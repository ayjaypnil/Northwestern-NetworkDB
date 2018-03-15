CREATE DATABASE XXXXX;
USE XXXXX;

CREATE TABLE XXXX
(
	id int NOT NULL AUTO_INCREMENT,
	email varchar(255) NOT NULL,
    password_hash varchar(255) NOT NULL
	first_name varchar(255) NOT NULL,
	last_name varchar(255) NOT NULL,
	campus varchar(255) NOT NULL,
	link varchar(255) NOT NULL,
    grade_date DATE NOT NULL,
	PRIMARY KEY (id)
);