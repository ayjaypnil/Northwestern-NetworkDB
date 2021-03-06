CREATE DATABASE nw_db;
USE nw_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	email varchar(255) NOT NULL,
    password_hash varchar(255) NOT NULL,
	first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
	campus varchar(255) NOT NULL,
	grad_date varchar(255) NOT NULL,
	site_link varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE jobs
(
	job_id int NOT NULL AUTO_INCREMENT,
	id int,
	job_title varchar(255) NOT NULL,
    job_desc varchar(136) NOT NULL,
	job_URL varchar(50),
	PRIMARY KEY (job_id),
	FOREIGN KEY (id) REFERENCES users(id)
);