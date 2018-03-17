<<<<<<< HEAD
CREATE DATABASE nw_db;
=======
-- CREATE DATABASE nw_db;
>>>>>>> 4ed9860c1eed9ce8461e9612d20bf90ccee645e0
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
<<<<<<< HEAD
	site_link varchar(255) NOT NULL,
=======
	link varchar(255) NOT NULL,
>>>>>>> 4ed9860c1eed9ce8461e9612d20bf90ccee645e0
	PRIMARY KEY (id)
);