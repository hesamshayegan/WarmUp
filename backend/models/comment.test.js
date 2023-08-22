"use strict";

const {
  NotFoundError,
  BadRequestError
} = require("../expressError");

const db = require("../db.js");
const User = require("./user.js");
const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
} = require("./_testCommon");
const Score = require("./score");
const Comment = require("./comment");



beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);


/************************************** register a comment */
describe("register a comment", function() {
    
    test("works", async function () {

        const u1_info = {username: 'u1',
                         category: 'plastic'}

        const data1 = {correct_answers: 2,
                       current_complexity: "easy"}
        
        const content = {content: "test comment 1"}
             
        const record = await Score.recordScore(u1_info, data1);

        const comment = await Comment.registerComment(u1_info, content);

        expect(comment).toEqual(
                                {
                                "id": 1,
                                "comment_id": 1,
                                "content": "test comment 1"
                                }           
        )    

    });

    test("score not found", async function () {
        try {
            const u1_info = {username: 'u1',
                             category: 'plastic'}

            const content = {content: "test comment 1"}

            const comment = await Comment.registerComment(u1_info, content);

        } catch(err) {
            expect(err instanceof NotFoundError).toBeTruthy();
        }
    })

});



/************************************** edit a comment */

describe("edit a comment", function() {
    
    test("works", async function () {

        const u1_info = {username: 'u1',
                         category: 'plastic'}

        const data1 = {correct_answers: 2,
                       current_complexity: "easy"}
        
        const content = {content: "test comment 1"}

        const contentUpdated = {content: "updated: test comment 1"}
             
        const record = await Score.recordScore(u1_info, data1);

        const comment = await Comment.registerComment(u1_info, content);

        const commentUpdated = await Comment.editComment(u1_info, contentUpdated);

        expect(commentUpdated).toEqual(
                                {
                                "id": 1,
                                "comment_id": 1,
                                "content": "updated: test comment 1"
                                }           
        )    

    });

    test("score not found", async function () {
        
        try {
            const u1_info = {username: 'u1',
                             category: 'plastic'}

            const contentUpdated = {content: "updated: test comment 1"}

            const commentUpdated = await Comment.registerComment(u1_info, contentUpdated);

        } catch(err) {
            expect(err instanceof NotFoundError).toBeTruthy();
        }
    })

});


/************************************** remove a comment */
describe("remove a comment", function() {
    
    test("works", async function () {

        const u1_info = {username: 'u1',
                         category: 'plastic'}

        const data1 = {correct_answers: 2,
                       current_complexity: "easy"}
        
        const content = {content: "test comment 1"}

        const record = await Score.recordScore(u1_info, data1);

        const comment = await Comment.registerComment(u1_info, content);

        const res1 = await db.query(
            "SELECT * FROM comments");
        expect(res1.rows).toHaveLength(1);
        
        await Comment.removeComment(u1_info);

        const res2 = await db.query(
            "SELECT * FROM comments");
        expect(res2.rows).toHaveLength(0);
  
    });

    // no score found
    test("score not found", async function () {
        try {
            const u1_info = {username: 'u1',
                             category: 'plastic'}
            const u1 = await Comment.removeComment(u1_info);
        } catch (err) {
            expect(err instanceof NotFoundError).toBeTruthy();
        } 
    });

});