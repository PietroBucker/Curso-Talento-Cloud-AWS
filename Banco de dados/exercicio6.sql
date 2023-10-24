CREATE DATABASE ESCOLA;

USE ESCOLA;

CREATE TABLE ALUNO (
    id INT NOT NULL PRIMARY KEY,
    f_name VARCHAR(30),
    l_name VARCHAR(50),
    email VARCHAR(50),
    address VARCHAR(100)
);

INSERT INTO ALUNO (
    "pietro", "Bucker", "pietro_177@hotmail.com", "rua 1"
);
