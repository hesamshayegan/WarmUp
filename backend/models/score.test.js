"use strict";

const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
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



beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);


/************************************** get user id */
describe("get user id", function() {

    test("works", async function () {
        const u1_id = await Score.getUserId('u1');
        const u2_id = await Score.getUserId('u2');
        expect(u1_id).toEqual(1);
        expect(u2_id).toEqual(2);    
    });

    test("user id not found", async function () {
        try {
            const u3_id = await Score.getUserId('u3');
        } catch (err) {
            expect(err instanceof NotFoundError).toBeTruthy();
        } 
    });

});


/************************************** get category id */
describe("get category id", function() {

    test("works", async function () {
        const plastic_id = await Score.getCategoryId('plastic');
        const transportation_id = await Score.getCategoryId('transportation');
        expect(plastic_id).toEqual(1);
        expect(transportation_id).toEqual(5);    
    });

    test("category id not found", async function () {
        try {
            const category_id = await Score.getUserId('category');
        } catch (err) {
            expect(err instanceof NotFoundError).toBeTruthy();
        } 
    });

});


/************************************** recorde a score */
describe("record a score", function() {
    
    test("works", async function () {
     
        const u1_info = {username: 'u1',
                         category: 'plastic'}

        const data1 = {correct_answers: 2,
                       current_complexity: "easy"}
        
        const record1 = await Score.recordScore(u1_info, data1);

        expect(record1).toEqual(
                {
                    "id": 1,
                    "user_id": 1,
                    "cat_id": 1,
                    "questions_per_category": 6,
                    "correct_answers": 2,
                    "current_complexity": "easy"
                }   
        );

        const u1_info2 = {username: 'u1',
                          category: 'fossil-fuels'}
        const data2 = {correct_answers: 1,
                       current_complexity: "easy"}

        const record2 = await Score.recordScore(u1_info2, data2);

        expect(record2).toEqual(
                {
                    "id": 2,
                    "user_id": 1,
                    "cat_id": 2,
                    "questions_per_category": 6,
                    "correct_answers": 1,
                    "current_complexity": "easy"
                } 
        );     
    });

    test("category id not found", async function () {
        try {
            const u1_info2_duplicate = {username: 'u1',
                                        category: 'fossil-fuels'}
            const data2_duplicate = {correct_answers: 1,
                                     current_complexity: "easy"}

            const recored_duplicate = await Score.recordScore(u1_info2_duplicate, data2_duplicate);

        } catch(err) {
            expect(err instanceof BadRequestError).toBeTruthy();
        }
    })

});



/************************************** update a score */
describe("update a score", function() {

    test("works", async function () {

        
        const u1_info = {username: 'u1',
                         category: 'plastic'}

        const data1 = {correct_answers: 2,
                       current_complexity: "easy"}

        const data_udpate1 = {correct_answers: 4}

        const data_udpate2 = {correct_answers: 5}

        const data_udpate3 = {correct_answers: 6}

        const record1 = await Score.recordScore(u1_info, data1);
        
        // Current Complexity: Easy to Medium 
        const record_update1 = await Score.updateScore(u1_info, data_udpate1);

        expect(record_update1).toEqual(
                {
                    "id": 1,
                    "user_id": 1,
                    "cat_id": 1,
                    "questions_per_category": 6,
                    "correct_answers": 4,
                    "current_complexity": "medium"
                }   
        );
        // Current Complexity: Medium to Hard
        const record_update2 = await Score.updateScore(u1_info, data_udpate2);

        expect(record_update2).toEqual(
            {
                "id": 1,
                "user_id": 1,
                "cat_id": 1,
                "questions_per_category": 6,
                "correct_answers": 5,
                "current_complexity": "hard"
            }   
         );

        // Current Complexity: Hard to Hard
        const record_update3 = await Score.updateScore(u1_info, data_udpate3);

        expect(record_update3).toEqual(
            {
                "id": 1,
                "user_id": 1,
                "cat_id": 1,
                "questions_per_category": 6,
                "correct_answers": 6,
                "current_complexity": "hard"
            }   
         );

    });

    // no score found
    test("score not found", async function () {
        try {

            const u1_info = {username: 'u1',
                             category: 'plastic'}
            const data1 = {correct_answers: 2,
                           current_complexity: "easy"}

            const u1_info_absent = {username: 'u1',
                             category: 'deforestation'}        

            const record1 = await Score.recordScore(u1_info, data1);

            const record_update1 = await Score.updateScore(u1_info_absent, data1);

        } catch(err) {
            expect(err instanceof NotFoundError).toBeTruthy();
        }
    });

});



/************************************** get a category score */
describe("get a category score", function() {

    test("works", async function () {

        const u1_info = {username: 'u1',
                         category: 'plastic'}

        const data1 = {correct_answers: 6,
                       current_complexity: "hard"}

        const record1 = await Score.recordScore(u1_info, data1);

        const score1 = await Score.getCategoryScore(u1_info)

        expect(score1).toEqual(1)                   
    });

    // no score found
    test("score not found", async function () {
        try {

            const u1_info = {username: 'u1',
                             category: 'plastic'}
            const data1 = {correct_answers: 2,
                           current_complexity: "easy"}

            const u1_info_absent = {username: 'u1',
                                    category: 'deforestation'}        

            const record1 = await Score.recordScore(u1_info, data1);

            const score1 = await Score.getCategoryScore(u1_info_absent)

        } catch(err) {
            expect(err instanceof NotFoundError).toBeTruthy();
        }
    });

});


/************************************** get a total score */
describe("get a total score", function() {
    
    test("works", async function () {

        const u1_info = {username: 'u1',
                         category: 'plastic'}

        const data1 = {correct_answers: 3,
                       current_complexity: "medium"}

        const u1_info2 = {username: 'u1',
                         category: 'fossil-fuels'}

        const data2 = {correct_answers: 3,
                       current_complexity: "medium"}

    
        const record1 = await Score.recordScore(u1_info, data1);
        const record2 = await Score.recordScore(u1_info2, data2);

        const totalScore = await Score.getTotalScore({username: 'u1'})
        expect(totalScore).toEqual(0.5)
        
        // no score found    
        const totalScore2 = await Score.getTotalScore({username: 'u2'})
        expect(totalScore2).toEqual(0)         
    
    });

});


/************************************** get the top score */
describe("get the top score", function() {

    test("works", async function () {
        
        const u1_info = {username: 'u1',
                         category: 'plastic'}

        const data1 = {correct_answers: 3,
                       current_complexity: "medium"}

        const u1_info2 = {username: 'u1',
                          category: 'fossil-fuels'}

        const data2 = {correct_answers: 6,
                       current_complexity: "hard"}
        
        const record1 = await Score.recordScore(u1_info, data1);
        const record2 = await Score.recordScore(u1_info2, data2);
        
        const topScore = await Score.getTopScore({username: 'u1'})
        expect(topScore).toEqual(
            [{
                "cat_id": 2,
                "questions_per_category": 6,
                "correct_answers": 6,
                  "topScore": 1
            }]
        )
    })

    // two equal top scores
    test("works", async function () {
        
        const u1_info = {username: 'u1',
                         category: 'plastic'}

        const data1 = {correct_answers: 6,
                       current_complexity: "hard"}

        const u1_info2 = {username: 'u1',
                          category: 'fossil-fuels'}

        const data2 = {correct_answers: 6,
                       current_complexity: "hard"}
        
        const record1 = await Score.recordScore(u1_info, data1);
        const record2 = await Score.recordScore(u1_info2, data2);
        
        const topScore = await Score.getTopScore({username: 'u1'})
        expect(topScore).toEqual(
            [
                {
                    "cat_id": 1,
                    "questions_per_category": 6,
                    "correct_answers": 6,
                    "topScore": 1
                },
                {
                    "cat_id": 2,
                    "questions_per_category": 6,
                    "correct_answers": 6,
                    "topScore": 1
                }
            ]
        )
    });

    // no score found
    test("score not found", async function () {
        try {
            const u1 = await Score.getTopScore('u1');
        } catch (err) {
            expect(err instanceof NotFoundError).toBeTruthy();
        } 
    });

});



/************************************** get all the top scores */
describe("get all the top scores", function() {
    
    test("works", async function () {
        
        const u1_info = {username: 'u1',
                         category: 'plastic'}

        const data1 = {correct_answers: 3,
                       current_complexity: "medium"}

        const u1_info2 = {username: 'u1',
                          category: 'fossil-fuels'}

        const data11 = {correct_answers: 6,
                       current_complexity: "hard"}
        
        const record1 = await Score.recordScore(u1_info, data1);
        const record11 = await Score.recordScore(u1_info2, data11);


        const u2_info = {username: 'u2',
                         category: 'plastic'}

        const data2 = {correct_answers: 3,
                       current_complexity: "medium"}

        const u2_info2 = {username: 'u2',
                          category: 'fossil-fuels'}

        const data22 = {correct_answers: 6,
                       current_complexity: "hard"}
        
        const record2 = await Score.recordScore(u2_info, data2);
        const record22 = await Score.recordScore(u2_info2, data22);

        const allTopScores = await Score.getAllUsersTopScores()
        expect(allTopScores).toEqual(
                [
                    {
                        "username": "u1",
                        "topScore": 1
                    },
                    {
                        "username": "u2",
                        "topScore": 1
                    },

                ]
        );
    });

    // no score found
    test("score not found", async function () {
        try {
            const u1 = await Score.getAllUsersTopScores();
        } catch (err) {
            expect(err instanceof NotFoundError).toBeTruthy();
        } 
    });


});


/************************************** remove a record */
describe("remoeve a record", function() {
    
    test("works", async function () {
        
        const u1_info = {username: 'u1',
                         category: 'plastic'}

        const data1 = {correct_answers: 3,
                       current_complexity: "medium"}

        const record1 = await Score.recordScore(u1_info, data1);

        const res1 = await db.query(
            "SELECT * FROM user_quiz_progress");
        expect(res1.rows.length).toEqual(1);
        
        await Score.remove(u1_info);

        const res2 = await db.query(
            "SELECT * FROM user_quiz_progress");
        expect(res2.rows.length).toEqual(0);
        });

    // no score found
    test("score not found", async function () {
        try {
            const u1_info = {username: 'u1',
                             category: 'plastic'}
            const u1 = await Score.remove(u1_info);
        } catch (err) {
            expect(err instanceof NotFoundError).toBeTruthy();
        } 
    });

    
});


