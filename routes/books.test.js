"use strict";

const db = require("../db");
process.env.NODE_ENV = "test";

const request = require("supertest");

const Book = require("../models/book");

const app = require("../app");


describe("Test User class", function () {
  beforeEach(async function () {
    await db.query("DELETE FROM books");
    let u = await Book.create({
      "isbn": "6",
      "amazon_url": "http://a.co/eobPtX2",
      "author": "Matthew Lane",
      "language": "english",
      "pages": 264,
      "publisher": "Princeton University Press",
      "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games",
      "year": 2017
    });
  });

  // afterEach(async function () {
  //   await db.query("DELETE FROM books");
  // });


describe("POST /books", function () {
  test("Adds a book to a store", async function () {
    const response = await request(app)
      .post(`/books`)
      .send({
        "isbn": "5",
        "amazon_url": "http://a.co/eobPtX2",
        "author": "Matthew Lane",
        "language": "english",
        "pages": 264,
        "publisher": "Princeton University Press",
        "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games",
        "year": 2017
      });
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({
      "book": {
        "isbn": "5",
        "amazon_url": "http://a.co/eobPtX2",
        "author": "Matthew Lane",
        "language": "english",
        "pages": 264,
        "publisher": "Princeton University Press",
        "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games",
        "year": 2017
      }
    });

    // const getBookResp = await request(app).get(`/books/2`)
    // expect(response.body).toEqual({
    //   "book": {
    //     "isbn": "2",
    //     "amazon_url": "http://a.co/eobPtX2",
    //     "author": "Matthew Lane",
    //     "language": "english",
    //     "pages": 264,
    //     "publisher": "Princeton University Press",
    //     "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games",
    //     "year": 2017
    //   }
    // });
  });
});


});
