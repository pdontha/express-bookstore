DROP DATABASE bookstore;
CREATE DATABASE bookstore;
\connect bookstore


CREATE TABLE books (
  isbn TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  amazon_url TEXT NOT NULL,
  author TEXT NOT NULL,
  language TEXT NOT NULL,
  pages INTEGER,
  publisher TEXT NOT NULL,
  year INTEGER);


DROP DATABASE bookstore_test;
CREATE DATABASE bookstore_test;
\connect bookstore_test


CREATE TABLE books (
  isbn TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  amazon_url TEXT NOT NULL,
  author TEXT NOT NULL,
  language TEXT NOT NULL,
  pages INTEGER,
  publisher TEXT NOT NULL,
  year INTEGER);