CREATE TABLE Users (
    id int NOT NULL AUTO_INCREMENT,
    first_name varchar(255) NOT NULL,
    user_type varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    birth_date date NOT NULL,
    email varchar(255) NOT NULL,
    categories_ids SETz,
    password varchar(255) NOT NULL,
    PRIMARY KEY (id)	
);