"use strict";

const express = require("express");
const jsonschema = require("jsonschema");

const Question = require("../models/question");

const router = express.Router();


router.get("/:category", async function (req, res, next) {
    try {

        const questions = await Question.get(req.params.category);
        return res.json({ questions })
    } catch(err) {
        next(err)
    }
})

module.exports = router