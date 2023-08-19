"use strict";

const express = require("express");
const jsonschema = require("jsonschema");

const Score = require("../models/score");

const router = express.Router();





router.post("/:username/:category", async function (req, res, next) {
    try {
        
        const { username, category } = req.params
        const { correct_answers } = req.body
        const score = await Score.recordScore({ username, category },
                                              { correct_answers });
        return res.json({ score })

    } catch(err) {
        next(err)
    }
})

router.patch("/:username/:category", async function (req, res, next) {

    try {
        const { username, category } = req.params
        const { correct_answers, current_complexity } = req.body
        const updatedScore = await Score.updateScore({ username, category},
                                                     { correct_answers, current_complexity });
        
        return res.json({ updatedScore })
    } catch(err) {
        return next(err)
    }

})


router.get("/:username/:category/score", async function (req, res, next) {

    try {
        const { username, category } = req.params
        const scoreCategory = await Score.getCategoryScore({ username, category});
        
        return res.json({ scoreCategory })
    } catch(err) {
        return next(err)
    }

})


router.get("/:username/totscore", async function (req, res, next) {

    try {
        const { username } = req.params
        const totalCategory = await Score.getTotalScore({ username });
        
        return res.json({ totalCategory })
    } catch(err) {
        return next(err)
    }

})


router.get("/:username/topscore", async function (req, res, next) {

    try {
        const { username } = req.params
        const topScore = await Score.getTopScore({ username });
        
        return res.json({ topScore })
    } catch(err) {
        return next(err)
    }

})







module.exports = router