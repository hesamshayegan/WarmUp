"use strict";

const express = require("express");
const jsonschema = require("jsonschema");

const Score = require("../models/score");

const router = express.Router();





router.post("/:username/:category", async function (req, res, next) {
    try {
        
        const { username, category } = req.params
        const score = await Score.record({ username, category });
        return res.json({ score })

    } catch(err) {
        next(err)
    }
})

router.patch("/:username/:category", async function (req, res, next) {

    try {
        const { username, category } = req.params
        const { correct_answers, current_complexity } = req.body
        const score = await Score.update({ username, category},
                                         { correct_answers, current_complexity });
        
        return res.json({ score })
    } catch(err) {
        return next(err)
    }

})



module.exports = router