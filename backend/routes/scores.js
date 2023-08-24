"use strict";

const express = require("express");
const jsonschema = require("jsonschema");

const Score = require("../models/score");
const { ensureCorrectUser } = require("../middleware/auth");
const { BadRequestError } = require("../expressError");
const quizProgressSchema = require("../schemas/quizProgress.json");

const router = express.Router();



// record a score
router.post("/:username/:category", ensureCorrectUser, async function (req, res, next) {
    try {

        const validator = jsonschema.validate(req.body, quizProgressSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }
        
        const { username, category } = req.params
        const { correct_answers, current_complexity } = req.body
        const score = await Score.recordScore({ username, category },
                                              { correct_answers, current_complexity });
        return res.json({ score })

    } catch(err) {
        next(err)
    }
});


// get a record
router.get("/:username/:category/record", async function (req, res, next){
    try {
        const { username, category } = req.params
        const record = await Score.getRecord({ username, category});

        return res.json({ record })

    } catch(err) {
        return next(err)
    }
})


// update a record
router.patch("/:username/:category", ensureCorrectUser, async function (req, res, next) {

    try {

        const validator = jsonschema.validate(req.body, quizProgressSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }
        
        const { username, category } = req.params
        const { correct_answers } = req.body
        const updatedScore = await Score.updateScore({ username, category},
                                                     { correct_answers });
        
        return res.json({ updatedScore })

    } catch(err) {
        return next(err)
    }

})



router.get("/:username/:category/score", ensureCorrectUser, async function (req, res, next) {

    try {
        const { username, category } = req.params
        const scoreCategory = await Score.getCategoryScore({ username, category});
        
        return res.json({ scoreCategory })
        
    } catch(err) {
        return next(err)
    }

})


router.get("/:username/totscore", ensureCorrectUser, async function (req, res, next) {

    try {
        const { username } = req.params
        const totalCategory = await Score.getTotalScore({ username });
        
        return res.json({ totalCategory })

    } catch(err) {
        return next(err)
    }

})


router.get("/:username/topscore", ensureCorrectUser, async function (req, res, next) {

    try {
        const { username } = req.params
        const topScores = await Score.getTopScore({ username });
        
        return res.json({ topScores })

    } catch(err) {
        return next(err)
    }

})


router.get("/topscores", async function (req, res, next) {

    try {

        const allTopScores = await Score.getAllUsersTopScores();
        
        return res.json({ allTopScores })

    } catch(err) {
        return next(err)
    }

})



// remove a record
router.delete("/:username/:category/record", ensureCorrectUser, async function (req, res, next) {

    try {
        const { username, category } = req.params
        await Score.removeRecord({ username, category});

        return res.json({ deleted: `username:${req.params.username}, category:${req.params.category} record` });
        
    } catch(err) {
        return next(err)
    }

})



// get a score history
router.get("/:username/:category/score/history", ensureCorrectUser, async function (req, res, next) {

    try {
        const { username, category } = req.params
        const scoreHisotry = await Score.getScoreHistory({ username, category});
        
        return res.json({ scoreHisotry })
        
    } catch(err) {
        return next(err)
    }

})





module.exports = router