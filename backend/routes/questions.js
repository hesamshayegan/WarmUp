"use strict";

const express = require("express");
const jsonschema = require("jsonschema");

const Question = require("../models/question");

const router = express.Router();


// get all categories
router.get("/categories", async function (req, res, next) {
    try {
        const categories = await Question.getAllCategories();
        return res.json({ categories })
    } catch(err) {
        next(err)
    }
})

module.exports = router


//get all questions for a category
router.get("/:username/:category", async function (req, res, next) {
    try {
        const { username, category } = req.params
        const questions = await Question.getQuestions({username, category});
        return res.json({ questions })
    } catch(err) {
        next(err)
    }
})

module.exports = router